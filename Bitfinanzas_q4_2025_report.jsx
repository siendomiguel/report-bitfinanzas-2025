import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  BarChart3,
  FileText,
} from 'lucide-react';

export default function BitfinanzasReport() {
  const [activeTab, setActiveTab] = useState('resumen');

  // Datos mensuales 2025
  const monthlyData2025 = [
    {
      mes: 'Septiembre',
      usuarios: 52384,
      nuevos: 37768,
      pageviews: 128495,
      sesiones: 99613,
      duracion: 118.8,
      bounce: 46.08,
    },
    {
      mes: 'Octubre',
      usuarios: 144914,
      nuevos: 122443,
      pageviews: 312693,
      sesiones: 259214,
      duracion: 94.4,
      bounce: 45.93,
    },
    {
      mes: 'Noviembre',
      usuarios: 182693,
      nuevos: 149651,
      pageviews: 362462,
      sesiones: 301836,
      duracion: 91.4,
      bounce: 46.03,
    },
    {
      mes: 'Diciembre*',
      usuarios: 84704,
      nuevos: 61249,
      pageviews: 171927,
      sesiones: 143294,
      duracion: 90.8,
      bounce: 47.45,
    },
  ];

  // Datos mensuales 2024 (mismo período)
  const monthlyData2024 = [
    { mes: 'Octubre', usuarios: 283254, pageviews: 595929 },
    { mes: 'Noviembre', usuarios: 294200, pageviews: 590840 },
    { mes: 'Diciembre*', usuarios: 284763, pageviews: 595310 },
  ];

  // Comparación YoY
  const yoyComparison = [
    { mes: 'Octubre', usuarios2024: 283254, usuarios2025: 144914, pv2024: 595929, pv2025: 312693 },
    { mes: 'Noviembre', usuarios2024: 294200, usuarios2025: 182693, pv2024: 590840, pv2025: 362462 },
    { mes: 'Diciembre*', usuarios2024: 284763, usuarios2025: 84704, pv2024: 595310, pv2025: 171927 },
  ];

  // Datos semanales
  const weeklyData = [
    { semana: 'Sem 40 (Sep 30-Oct 5)', usuarios: 23847, pageviews: 38246, bounce: 40.14 },
    { semana: 'Sem 41 (Oct 6-12)', usuarios: 41224, pageviews: 67297, bounce: 46.1 },
    { semana: 'Sem 42 (Oct 13-19)', usuarios: 61278, pageviews: 112368, bounce: 44.74 },
    { semana: 'Sem 43 (Oct 20-26)', usuarios: 23381, pageviews: 46056, bounce: 47.38 },
    { semana: 'Sem 44 (Oct 27-Nov 2)', usuarios: 29667, pageviews: 55755, bounce: 48.56 },
    { semana: 'Sem 45 (Nov 3-9)', usuarios: 61480, pageviews: 104388, bounce: 43.72 },
    { semana: 'Sem 46 (Nov 10-16)', usuarios: 41131, pageviews: 65706, bounce: 50.58 },
    { semana: 'Sem 47 (Nov 17-23)', usuarios: 64874, pageviews: 104814, bounce: 49.29 },
    { semana: 'Sem 48 (Nov 24-30)', usuarios: 32369, pageviews: 58901, bounce: 47.25 },
    { semana: 'Sem 49 (Dic 1-7)', usuarios: 32407, pageviews: 63274, bounce: 44.48 },
    { semana: 'Sem 50 (Dic 8-14)', usuarios: 48736, pageviews: 85775, bounce: 45.32 },
    { semana: 'Sem 51 (Dic 15-21)', usuarios: 21838, pageviews: 38352, bounce: 49.7 },
    { semana: 'Sem 52 (Dic 22-23)', usuarios: 3125, pageviews: 6150, bounce: 57.26 },
  ];

  // Usuarios nuevos vs recurrentes
  const userTypeData2025 = [
    { mes: 'Octubre', nuevos: 122991, recurrentes: 42260 },
    { mes: 'Noviembre', nuevos: 150478, recurrentes: 51641 },
    { mes: 'Diciembre*', nuevos: 61400, recurrentes: 29773 },
  ];

  // Top páginas
  const topPages = [
    { titulo: 'Goldman Sachs: 5 acciones +70% potencial', pageviews: 16375, mes: 'Dic' },
    { titulo: 'Citi: acción con potencial 40%', pageviews: 25511, mes: 'Oct' },
    { titulo: 'Cathie Wood vende Tesla', pageviews: 20471, mes: 'Nov' },
    { titulo: 'Eric Trump y la caída cripto', pageviews: 14736, mes: 'Nov' },
    { titulo: 'Kiyosaki alerta colapso masivo', pageviews: 13790, mes: 'Nov' },
    { titulo: '2026: 2 acciones para invertir $5K', pageviews: 13717, mes: 'Dic' },
    { titulo: 'Fed inyectará $40B en letras', pageviews: 12887, mes: 'Dic' },
    { titulo: 'JPMorgan: titán del consumo +13%', pageviews: 12040, mes: 'Dic' },
  ];

  // Fuentes de tráfico
  const trafficSources = [
    { fuente: 'Búsqueda Orgánica', octubre: 83122, noviembre: 86387, diciembre: 37050 },
    { fuente: 'Tráfico Directo', octubre: 62070, noviembre: 94293, diciembre: 47064 },
    { fuente: 'Redes Sociales', octubre: 1226, noviembre: 1161, diciembre: 771 },
    { fuente: 'Referidos', octubre: 465, noviembre: 1050, diciembre: 323 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

  const formatNumber = num => new Intl.NumberFormat('es-CO').format(num);

  const calcChange = (current, previous) => {
    const change = (((current - previous) / previous) * 100).toFixed(1);
    return { value: change, positive: change >= 0 };
  };

  const MetricCard = ({ title, value, change, icon: Icon, subtitle }) => (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{typeof value === 'number' ? formatNumber(value) : value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-2 rounded-lg ${change ? (change.positive ? 'bg-green-50' : 'bg-red-50') : 'bg-blue-50'}`}>
          <Icon
            className={`w-5 h-5 ${change ? (change.positive ? 'text-green-600' : 'text-red-600') : 'text-blue-600'}`}
          />
        </div>
      </div>
      {change && (
        <div className={`flex items-center mt-3 text-sm ${change.positive ? 'text-green-600' : 'text-red-600'}`}>
          {change.positive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          <span>{Math.abs(change.value)}% vs mes anterior</span>
        </div>
      )}
    </div>
  );

  const tabs = [
    { id: 'resumen', label: 'Resumen Ejecutivo', icon: BarChart3 },
    { id: 'mensual', label: 'Análisis Mensual', icon: Calendar },
    { id: 'semanal', label: 'Análisis Semanal', icon: TrendingUp },
    { id: 'paginas', label: 'Top Páginas', icon: FileText },
    { id: 'yoy', label: 'Comparación Anual', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-lg">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold">Bitfinanzas.com - Reporte Q4 2025</h1>
        </div>
        <p className="text-blue-100 text-sm">Análisis de octubre, noviembre y diciembre 2025</p>
        <p className="text-blue-200 text-xs mt-1">*Diciembre: datos hasta el 23</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}>
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Resumen Ejecutivo */}
      {activeTab === 'resumen' && (
        <div className="space-y-6">
          {/* KPIs principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              title="Usuarios Activos (Nov)"
              value={182693}
              change={calcChange(182693, 144914)}
              icon={Users}
              subtitle="Pico del trimestre"
            />
            <MetricCard
              title="Page Views (Nov)"
              value={362462}
              change={calcChange(362462, 312693)}
              icon={Eye}
              subtitle="+15.9% vs octubre"
            />
            <MetricCard
              title="Usuarios Nuevos (Nov)"
              value={149651}
              change={calcChange(149651, 122443)}
              icon={TrendingUp}
              subtitle="82% del total"
            />
            <MetricCard title="Total Q4 2025" value={847082} icon={BarChart3} subtitle="Page views acumulados" />
          </div>

          {/* Alerta YoY */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-red-800">⚠️ Alerta: Caída significativa vs 2024</h3>
                <p className="text-red-700 text-sm mt-1">
                  Comparado con el mismo período de 2024, el tráfico ha disminuido significativamente:
                  <br />• Octubre 2025 vs 2024: <strong>-48.8% usuarios</strong> (144K vs 283K)
                  <br />• Noviembre 2025 vs 2024: <strong>-37.9% usuarios</strong> (182K vs 294K)
                  <br />• Diciembre 2025 vs 2024: <strong>-70.3% usuarios</strong> (84K vs 284K)
                </p>
              </div>
            </div>
          </div>

          {/* Gráfico de tendencia */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Tendencia de Usuarios Q4 2025</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData2025}>
                <defs>
                  <linearGradient id="colorUsuarios" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Area
                  type="monotone"
                  dataKey="usuarios"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorUsuarios)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Resumen rápido */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h4 className="font-semibold text-green-800 mb-2">✅ Lo Positivo</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Noviembre fue el mejor mes del trimestre</li>
                <li>• Crecimiento Oct→Nov: +26% usuarios</li>
                <li>• Tasa de rebote estable (~46%)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ A Monitorear</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Duración de sesión bajando (de 1:58 a 1:31)</li>
                <li>• Diciembre con caída pronunciada</li>
                <li>• Tráfico muy dependiente de SEO y Directo</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h4 className="font-semibold text-red-800 mb-2">❌ Crítico</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Caída de -49% a -70% vs 2024</li>
                <li>• Pérdida de ~150K usuarios mensuales</li>
                <li>• Necesita estrategia de recuperación</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Análisis Mensual */}
      {activeTab === 'mensual' && (
        <div className="space-y-6">
          {/* Comparación de métricas */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Usuarios Activos por Mes</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData2025}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Legend />
                <Bar dataKey="usuarios" name="Usuarios Activos" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="nuevos" name="Usuarios Nuevos" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Page Views */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Page Views por Mes</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monthlyData2025}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Bar dataKey="pageviews" name="Page Views" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Line
                  type="monotone"
                  dataKey="sesiones"
                  name="Sesiones"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Nuevos vs Recurrentes */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Usuarios Nuevos vs Recurrentes</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userTypeData2025} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <YAxis dataKey="mes" type="category" tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Legend />
                <Bar dataKey="nuevos" name="Nuevos" fill="#10B981" radius={[0, 4, 4, 0]} />
                <Bar dataKey="recurrentes" name="Recurrentes" fill="#3B82F6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Insight:</strong> Los usuarios recurrentes mantienen una proporción estable (~25-30% del total),
                lo que indica una base de lectores fieles. Sin embargo, el volumen total ha disminuido
                significativamente respecto a 2024.
              </p>
            </div>
          </div>

          {/* Tabla de métricas */}
          <div className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
            <h3 className="font-semibold text-gray-800 mb-4">Tabla Comparativa Mensual</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Métrica</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Sep</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Oct</th>
                  <th className="text-right py-3 px-2 font-semibold text-blue-600">Nov</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Dic*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">Usuarios Activos</td>
                  <td className="text-right py-3 px-2">{formatNumber(52384)}</td>
                  <td className="text-right py-3 px-2">{formatNumber(144914)}</td>
                  <td className="text-right py-3 px-2 font-semibold text-blue-600">{formatNumber(182693)}</td>
                  <td className="text-right py-3 px-2">{formatNumber(84704)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">Usuarios Nuevos</td>
                  <td className="text-right py-3 px-2">{formatNumber(37768)}</td>
                  <td className="text-right py-3 px-2">{formatNumber(122443)}</td>
                  <td className="text-right py-3 px-2 font-semibold text-blue-600">{formatNumber(149651)}</td>
                  <td className="text-right py-3 px-2">{formatNumber(61249)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">Page Views</td>
                  <td className="text-right py-3 px-2">{formatNumber(128495)}</td>
                  <td className="text-right py-3 px-2">{formatNumber(312693)}</td>
                  <td className="text-right py-3 px-2 font-semibold text-blue-600">{formatNumber(362462)}</td>
                  <td className="text-right py-3 px-2">{formatNumber(171927)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">Duración (seg)</td>
                  <td className="text-right py-3 px-2">118.8</td>
                  <td className="text-right py-3 px-2">94.4</td>
                  <td className="text-right py-3 px-2">91.4</td>
                  <td className="text-right py-3 px-2">90.8</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">Tasa de Rebote</td>
                  <td className="text-right py-3 px-2">46.08%</td>
                  <td className="text-right py-3 px-2">45.93%</td>
                  <td className="text-right py-3 px-2">46.03%</td>
                  <td className="text-right py-3 px-2">47.45%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Análisis Semanal */}
      {activeTab === 'semanal' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Usuarios Activos por Semana</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorWeekly" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="semana" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Area
                  type="monotone"
                  dataKey="usuarios"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorWeekly)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Page Views por Semana</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="semana" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Bar dataKey="pageviews" name="Page Views" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Insights semanales */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h4 className="font-semibold text-green-800 mb-2">📈 Mejores Semanas</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>
                  <strong>Semana 47 (Nov 17-23):</strong> 64,874 usuarios
                </li>
                <li>
                  <strong>Semana 45 (Nov 3-9):</strong> 61,480 usuarios
                </li>
                <li>
                  <strong>Semana 42 (Oct 13-19):</strong> 61,278 usuarios
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h4 className="font-semibold text-red-800 mb-2">📉 Semanas Más Bajas</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>
                  <strong>Semana 52 (Dic 22-23):</strong> 3,125 usuarios (parcial)
                </li>
                <li>
                  <strong>Semana 51 (Dic 15-21):</strong> 21,838 usuarios
                </li>
                <li>
                  <strong>Semana 43 (Oct 20-26):</strong> 23,381 usuarios
                </li>
              </ul>
            </div>
          </div>

          {/* Tabla semanal */}
          <div className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
            <h3 className="font-semibold text-gray-800 mb-4">Detalle Semanal Completo</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Semana</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Usuarios</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Page Views</th>
                  <th className="text-right py-3 px-2 font-semibold text-gray-700">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((week, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 ${week.usuarios > 50000 ? 'bg-green-50' : ''}`}>
                    <td className="py-2 px-2 text-xs">{week.semana}</td>
                    <td className="text-right py-2 px-2 font-medium">{formatNumber(week.usuarios)}</td>
                    <td className="text-right py-2 px-2">{formatNumber(week.pageviews)}</td>
                    <td className="text-right py-2 px-2">{week.bounce.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Top Páginas */}
      {activeTab === 'paginas' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Top Páginas por Page Views</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={topPages} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <YAxis dataKey="titulo" type="category" width={200} tick={{ fontSize: 10 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Bar dataKey="pageviews" fill="#3B82F6" radius={[0, 4, 4, 0]}>
                  {topPages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Fuentes de tráfico */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Fuentes de Tráfico por Mes</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={trafficSources}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="fuente" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Legend />
                <Bar dataKey="octubre" name="Octubre" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="noviembre" name="Noviembre" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="diciembre" name="Diciembre" fill="#F59E0B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Distribución de tráfico */}
          <div className="grid md:grid-cols-3 gap-4">
            {['Octubre', 'Noviembre', 'Diciembre'].map((mes, idx) => {
              const data = [
                { name: 'SEO', value: [83122, 86387, 37050][idx] },
                { name: 'Directo', value: [62070, 94293, 47064][idx] },
                { name: 'Social', value: [1226, 1161, 771][idx] },
                { name: 'Otros', value: [1500, 2000, 800][idx] },
              ];
              return (
                <div key={mes} className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">{mes}</h4>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}>
                        {data.map((entry, i) => (
                          <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={v => formatNumber(v)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              );
            })}
          </div>

          {/* Insight de contenido */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Insights de Contenido</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>
                • <strong>Acciones con potencial:</strong> Los artículos sobre recomendaciones de bancos (Goldman, Citi,
                JPMorgan) generan alto tráfico
              </li>
              <li>
                • <strong>Cripto:</strong> Contenido sobre Bitcoin, Cathie Wood y líderes de opinión sigue atrayendo
                audiencia
              </li>
              <li>
                • <strong>Kiyosaki:</strong> Continúa siendo un imán de tráfico constante
              </li>
              <li>
                • <strong>Oportunidad:</strong> El contenido sobre predicciones y "acciones para invertir" tiene muy
                buen rendimiento
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Comparación YoY */}
      {activeTab === 'yoy' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Usuarios Activos: 2024 vs 2025</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={yoyComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Legend />
                <Bar dataKey="usuarios2024" name="2024" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="usuarios2025" name="2025" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Page Views: 2024 vs 2025</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={yoyComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={v => formatNumber(v)} />
                <Legend />
                <Bar dataKey="pv2024" name="2024" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pv2025" name="2025" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tabla de variación */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Variación Año contra Año (YoY)</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Mes</th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-700">Usuarios 2024</th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-700">Usuarios 2025</th>
                  <th className="text-right py-3 px-3 font-semibold text-red-600">Variación</th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-700">PV 2024</th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-700">PV 2025</th>
                  <th className="text-right py-3 px-3 font-semibold text-red-600">Variación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-3 font-medium">Octubre</td>
                  <td className="text-right py-3 px-3">{formatNumber(283254)}</td>
                  <td className="text-right py-3 px-3">{formatNumber(144914)}</td>
                  <td className="text-right py-3 px-3 text-red-600 font-semibold">-48.8%</td>
                  <td className="text-right py-3 px-3">{formatNumber(595929)}</td>
                  <td className="text-right py-3 px-3">{formatNumber(312693)}</td>
                  <td className="text-right py-3 px-3 text-red-600 font-semibold">-47.5%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-3 font-medium">Noviembre</td>
                  <td className="text-right py-3 px-3">{formatNumber(294200)}</td>
                  <td className="text-right py-3 px-3">{formatNumber(182693)}</td>
                  <td className="text-right py-3 px-3 text-red-600 font-semibold">-37.9%</td>
                  <td className="text-right py-3 px-3">{formatNumber(590840)}</td>
                  <td className="text-right py-3 px-3">{formatNumber(362462)}</td>
                  <td className="text-right py-3 px-3 text-red-600 font-semibold">-38.6%</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Diciembre*</td>
                  <td className="text-right py-3 px-3">{formatNumber(284763)}</td>
                  <td className="text-right py-3 px-3">{formatNumber(84704)}</td>
                  <td className="text-right py-3 px-3 text-red-600 font-semibold">-70.3%</td>
                  <td className="text-right py-3 px-3">{formatNumber(595310)}</td>
                  <td className="text-right py-3 px-3">{formatNumber(171927)}</td>
                  <td className="text-right py-3 px-3 text-red-600 font-semibold">-71.1%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-3">
              *Diciembre 2025: datos hasta el 23. Diciembre 2024: datos hasta el 23 para comparación justa.
            </p>
          </div>

          {/* Análisis de la caída */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h4 className="font-semibold text-red-800 mb-3">📊 Análisis de la Caída YoY</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-red-700">
              <div>
                <strong>Pérdida Acumulada Q4:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Usuarios perdidos: ~449,906</li>
                  <li>• Page Views perdidos: ~1,334,997</li>
                  <li>• Promedio mensual perdido: ~150K usuarios</li>
                </ul>
              </div>
              <div>
                <strong>Posibles Causas a Investigar:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Cambios en algoritmo de Google</li>
                  <li>• Competencia más fuerte</li>
                  <li>• Cambios en estrategia de contenido</li>
                  <li>• Reducción de publicidad pagada</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recomendaciones */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h4 className="font-semibold text-blue-800 mb-3">💡 Recomendaciones para Recuperación</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <strong>Corto Plazo (1-3 meses):</strong>
                <ul className="mt-2 space-y-1">
                  <li>✓ Auditoría SEO completa</li>
                  <li>✓ Optimizar contenido existente de alto rendimiento</li>
                  <li>✓ Aumentar frecuencia de publicación</li>
                  <li>✓ Reactivar newsletter y notificaciones</li>
                </ul>
              </div>
              <div>
                <strong>Mediano Plazo (3-6 meses):</strong>
                <ul className="mt-2 space-y-1">
                  <li>✓ Diversificar fuentes de tráfico (social, video)</li>
                  <li>✓ Crear contenido evergreen de alta calidad</li>
                  <li>✓ Implementar estrategia de backlinks</li>
                  <li>✓ Desarrollar comunidad en redes sociales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Reporte generado el 23 de diciembre de 2025 | Datos: Google Analytics 4</p>
        <p>Propiedad: bitfinanzas.com (ID: 312665082)</p>
      </div>
    </div>
  );
}
