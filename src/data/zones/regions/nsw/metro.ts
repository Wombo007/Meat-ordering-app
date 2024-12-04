import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswMetroZones: { [postcode: string]: ZoneInfo } = {
  // Sydney Metro (Zone 1)
  ...createZoneEntries(
    [
      '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 
      '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', 
      '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', 
      '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041', '2042', '2043', 
      '2044', '2045', '2046', '2047', '2048', '2049', '2050', '2051', '2052', '2053', '2054', 
      '2055', '2056', '2057', '2058', '2059', '2060', '2061', '2062', '2063', '2064', '2065', 
      '2066', '2067', '2068', '2069', '2070', '2071', '2072', '2073', '2074', '2075', '2076', 
      '2077', '2079', '2080', '2081', '2082', '2083', '2084', '2085', '2086', '2087', '2088', 
      '2089', '2090', '2092', '2093', '2094', '2095', '2096', '2097', '2099', '2100', '2101', 
      '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '2110', '2111', '2112', 
      '2113', '2114', '2115', '2116', '2117', '2118', '2119', '2120', '2121', '2122', '2123', 
      '2124', '2125', '2126', '2127', '2128', '2129', '2130', '2131', '2132', '2133', '2134', 
      '2135', '2136', '2137', '2138', '2139', '2140', '2141', '2142', '2143', '2144', '2145', 
      '2146', '2147', '2148', '2150', '2151', '2152', '2153', '2154', '2155', '2156', '2157', 
      '2158', '2159', '2160', '2161', '2162', '2163', '2164', '2165', '2166', '2167', '2168', 
      '2170', '2171', '2173', '2174', '2175', '2176', '2177', '2178', '2179', '2190', '2191', 
      '2192', '2193', '2194', '2195', '2196', '2197', '2198', '2199', '2200', '2203', '2204', 
      '2205', '2206', '2207', '2208', '2209', '2210', '2211', '2212', '2213', '2214', '2216', 
      '2217', '2218', '2219', '2220', '2221', '2222', '2223', '2224', '2225', '2226', '2227', 
      '2228', '2229', '2230', '2231', '2232', '2233', '2234'
    ],
    '1',
    'SYD METRO',
    'Sydney'
  )
};