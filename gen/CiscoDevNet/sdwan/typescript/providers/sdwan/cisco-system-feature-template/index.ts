// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoSystemFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collect admin-tech before reboot due to daemon failure
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#admin_tech_on_failure CiscoSystemFeatureTemplate#admin_tech_on_failure}
  */
  readonly adminTechOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#admin_tech_on_failure_variable CiscoSystemFeatureTemplate#admin_tech_on_failure_variable}
  */
  readonly adminTechOnFailureVariable?: string;
  /**
  * Set the affinity group number for router
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#affinity_group_number CiscoSystemFeatureTemplate#affinity_group_number}
  */
  readonly affinityGroupNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#affinity_group_number_variable CiscoSystemFeatureTemplate#affinity_group_number_variable}
  */
  readonly affinityGroupNumberVariable?: string;
  /**
  * Set the affinity group preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#affinity_group_preference CiscoSystemFeatureTemplate#affinity_group_preference}
  */
  readonly affinityGroupPreference?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#affinity_group_preference_variable CiscoSystemFeatureTemplate#affinity_group_preference_variable}
  */
  readonly affinityGroupPreferenceVariable?: string;
  /**
  * Set the console baud rate
  *   - Choices: `1200`, `2400`, `4800`, `9600`, `19200`, `38400`, `57600`, `115200`
  *   - Default value: `9600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#console_baud_rate CiscoSystemFeatureTemplate#console_baud_rate}
  */
  readonly consoleBaudRate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#console_baud_rate_variable CiscoSystemFeatureTemplate#console_baud_rate_variable}
  */
  readonly consoleBaudRateVariable?: string;
  /**
  * Set the policer rate for control sessions
  *   - Range: `1`-`65535`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#control_session_pps CiscoSystemFeatureTemplate#control_session_pps}
  */
  readonly controlSessionPps?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#control_session_pps_variable CiscoSystemFeatureTemplate#control_session_pps_variable}
  */
  readonly controlSessionPpsVariable?: string;
  /**
  * Configure a list of comma-separated device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#controller_group_list CiscoSystemFeatureTemplate#controller_group_list}
  */
  readonly controllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#controller_group_list_variable CiscoSystemFeatureTemplate#controller_group_list_variable}
  */
  readonly controllerGroupListVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#description CiscoSystemFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * Device groups (Use comma(,) for multiple groups)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#device_groups CiscoSystemFeatureTemplate#device_groups}
  */
  readonly deviceGroups?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#device_groups_variable CiscoSystemFeatureTemplate#device_groups_variable}
  */
  readonly deviceGroupsVariable?: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#device_types CiscoSystemFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable migration mode to Multi-Region Fabric
  *   - Choices: `enabled`, `enabled-from-bgp-core`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#enable_mrf_migration CiscoSystemFeatureTemplate#enable_mrf_migration}
  */
  readonly enableMrfMigration?: string;
  /**
  * Enhanced App Aware Routing
  *   - Choices: `disabled`, `aggressive`, `moderate`, `conservative`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#enhanced_app_aware_routing CiscoSystemFeatureTemplate#enhanced_app_aware_routing}
  */
  readonly enhancedAppAwareRouting?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#enhanced_app_aware_routing_variable CiscoSystemFeatureTemplate#enhanced_app_aware_routing_variable}
  */
  readonly enhancedAppAwareRoutingVariable?: string;
  /**
  * Enable Geo fencing
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#geo_fencing CiscoSystemFeatureTemplate#geo_fencing}
  */
  readonly geoFencing?: boolean | cdktf.IResolvable;
  /**
  * Set the device’s geo fencing range
  *   - Range: `100`-`10000`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#geo_fencing_range CiscoSystemFeatureTemplate#geo_fencing_range}
  */
  readonly geoFencingRange?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#geo_fencing_range_variable CiscoSystemFeatureTemplate#geo_fencing_range_variable}
  */
  readonly geoFencingRangeVariable?: string;
  /**
  * Enable Geo fencing
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#geo_fencing_sms CiscoSystemFeatureTemplate#geo_fencing_sms}
  */
  readonly geoFencingSms?: boolean | cdktf.IResolvable;
  /**
  * Set device’s geo fencing SMS phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#geo_fencing_sms_phone_numbers CiscoSystemFeatureTemplate#geo_fencing_sms_phone_numbers}
  */
  readonly geoFencingSmsPhoneNumbers?: CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers[] | cdktf.IResolvable;
  /**
  * Set the hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#hostname CiscoSystemFeatureTemplate#hostname}
  */
  readonly hostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#hostname_variable CiscoSystemFeatureTemplate#hostname_variable}
  */
  readonly hostnameVariable?: string;
  /**
  * Idle CLI timeout in minutes
  *   - Range: `0`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#idle_timeout CiscoSystemFeatureTemplate#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#idle_timeout_variable CiscoSystemFeatureTemplate#idle_timeout_variable}
  */
  readonly idleTimeoutVariable?: string;
  /**
  * Set the device’s physical latitude
  *   - Range: `-90`-`90`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#latitude CiscoSystemFeatureTemplate#latitude}
  */
  readonly latitude?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#latitude_variable CiscoSystemFeatureTemplate#latitude_variable}
  */
  readonly latitudeVariable?: string;
  /**
  * Set the location of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#location CiscoSystemFeatureTemplate#location}
  */
  readonly location?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#location_variable CiscoSystemFeatureTemplate#location_variable}
  */
  readonly locationVariable?: string;
  /**
  * Set the device’s physical longitude
  *   - Range: `-180`-`180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#longitude CiscoSystemFeatureTemplate#longitude}
  */
  readonly longitude?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#longitude_variable CiscoSystemFeatureTemplate#longitude_variable}
  */
  readonly longitudeVariable?: string;
  /**
  * Set the maximum number of OMP sessions <1..100> the device can have
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#max_omp_sessions CiscoSystemFeatureTemplate#max_omp_sessions}
  */
  readonly maxOmpSessions?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#max_omp_sessions_variable CiscoSystemFeatureTemplate#max_omp_sessions_variable}
  */
  readonly maxOmpSessionsVariable?: string;
  /**
  * Set BGP community during migration from BGP-core based network
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#migration_bgp_community CiscoSystemFeatureTemplate#migration_bgp_community}
  */
  readonly migrationBgpCommunity?: number;
  /**
  * Device is multi-tenant
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#multi_tenant CiscoSystemFeatureTemplate#multi_tenant}
  */
  readonly multiTenant?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#multi_tenant_variable CiscoSystemFeatureTemplate#multi_tenant_variable}
  */
  readonly multiTenantVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#name CiscoSystemFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Object Track configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#object_trackers CiscoSystemFeatureTemplate#object_trackers}
  */
  readonly objectTrackers?: CiscoSystemFeatureTemplateObjectTrackers[] | cdktf.IResolvable;
  /**
  * Enable or disable On-demand Tunnel
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#on_demand_tunnel CiscoSystemFeatureTemplate#on_demand_tunnel}
  */
  readonly onDemandTunnel?: boolean | cdktf.IResolvable;
  /**
  * Idle CLI timeout in minutes
  *   - Range: `0`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#on_demand_tunnel_idle_timeout CiscoSystemFeatureTemplate#on_demand_tunnel_idle_timeout}
  */
  readonly onDemandTunnelIdleTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#on_demand_tunnel_idle_timeout_variable CiscoSystemFeatureTemplate#on_demand_tunnel_idle_timeout_variable}
  */
  readonly onDemandTunnelIdleTimeoutVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#on_demand_tunnel_variable CiscoSystemFeatureTemplate#on_demand_tunnel_variable}
  */
  readonly onDemandTunnelVariable?: string;
  /**
  * Set the Overlay ID
  *   - Range: `1`-`4294967295`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#overlay_id CiscoSystemFeatureTemplate#overlay_id}
  */
  readonly overlayId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#overlay_id_variable CiscoSystemFeatureTemplate#overlay_id_variable}
  */
  readonly overlayIdVariable?: string;
  /**
  * Enable port hopping
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#port_hopping CiscoSystemFeatureTemplate#port_hopping}
  */
  readonly portHopping?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#port_hopping_variable CiscoSystemFeatureTemplate#port_hopping_variable}
  */
  readonly portHoppingVariable?: string;
  /**
  * Set the TLOC port offset when multiple devices are behind a NAT
  *   - Range: `0`-`19`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#port_offset CiscoSystemFeatureTemplate#port_offset}
  */
  readonly portOffset?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#port_offset_variable CiscoSystemFeatureTemplate#port_offset_variable}
  */
  readonly portOffsetVariable?: string;
  /**
  * Set region ID
  *   - Range: `1`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#region_id CiscoSystemFeatureTemplate#region_id}
  */
  readonly regionId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#region_id_variable CiscoSystemFeatureTemplate#region_id_variable}
  */
  readonly regionIdVariable?: string;
  /**
  * Set the role for router
  *   - Choices: `edge-router`, `border-router`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#role CiscoSystemFeatureTemplate#role}
  */
  readonly role?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#role_variable CiscoSystemFeatureTemplate#role_variable}
  */
  readonly roleVariable?: string;
  /**
  * Set secondary region ID
  *   - Range: `1`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#secondary_region_id CiscoSystemFeatureTemplate#secondary_region_id}
  */
  readonly secondaryRegionId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#secondary_region_id_variable CiscoSystemFeatureTemplate#secondary_region_id_variable}
  */
  readonly secondaryRegionIdVariable?: string;
  /**
  * Set the site identifier
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#site_id CiscoSystemFeatureTemplate#site_id}
  */
  readonly siteId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#site_id_variable CiscoSystemFeatureTemplate#site_id_variable}
  */
  readonly siteIdVariable?: string;
  /**
  * Set a text description of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#system_description CiscoSystemFeatureTemplate#system_description}
  */
  readonly systemDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#system_description_variable CiscoSystemFeatureTemplate#system_description_variable}
  */
  readonly systemDescriptionVariable?: string;
  /**
  * Set the system IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#system_ip CiscoSystemFeatureTemplate#system_ip}
  */
  readonly systemIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#system_ip_variable CiscoSystemFeatureTemplate#system_ip_variable}
  */
  readonly systemIpVariable?: string;
  /**
  * Set the timezone
  *   - Choices: `Europe/Andorra`, `Asia/Dubai`, `Asia/Kabul`, `America/Antigua`, `America/Anguilla`, `Europe/Tirane`, `Asia/Yerevan`, `Africa/Luanda`, `Antarctica/McMurdo`, `Antarctica/Rothera`, `Antarctica/Palmer`, `Antarctica/Mawson`, `Antarctica/Davis`, `Antarctica/Casey`, `Antarctica/Vostok`, `Antarctica/DumontDUrville`, `Antarctica/Syowa`, `America/Argentina/Buenos_Aires`, `America/Argentina/Cordoba`, `America/Argentina/Salta`, `America/Argentina/Jujuy`, `America/Argentina/Tucuman`, `America/Argentina/Catamarca`, `America/Argentina/La_Rioja`, `America/Argentina/San_Juan`, `America/Argentina/Mendoza`, `America/Argentina/San_Luis`, `America/Argentina/Rio_Gallegos`, `America/Argentina/Ushuaia`, `Pacific/Pago_Pago`, `Europe/Vienna`, `Australia/Lord_Howe`, `Antarctica/Macquarie`, `Australia/Hobart`, `Australia/Currie`, `Australia/Melbourne`, `Australia/Sydney`, `Australia/Broken_Hill`, `Australia/Brisbane`, `Australia/Lindeman`, `Australia/Adelaide`, `Australia/Darwin`, `Australia/Perth`, `Australia/Eucla`, `America/Aruba`, `Europe/Mariehamn`, `Asia/Baku`, `Europe/Sarajevo`, `America/Barbados`, `Asia/Dhaka`, `Europe/Brussels`, `Africa/Ouagadougou`, `Europe/Sofia`, `Asia/Bahrain`, `Africa/Bujumbura`, `Africa/Porto-Novo`, `America/St_Barthelemy`, `Atlantic/Bermuda`, `Asia/Brunei`, `America/La_Paz`, `America/Kralendijk`, `America/Noronha`, `America/Belem`, `America/Fortaleza`, `America/Recife`, `America/Araguaina`, `America/Maceio`, `America/Bahia`, `America/Sao_Paulo`, `America/Campo_Grande`, `America/Cuiaba`, `America/Santarem`, `America/Porto_Velho`, `America/Boa_Vista`, `America/Manaus`, `America/Eirunepe`, `America/Rio_Branco`, `America/Nassau`, `Asia/Thimphu`, `Africa/Gaborone`, `Europe/Minsk`, `America/Belize`, `America/St_Johns`, `America/Halifax`, `America/Glace_Bay`, `America/Moncton`, `America/Goose_Bay`, `America/Blanc-Sablon`, `America/Toronto`, `America/Nipigon`, `America/Thunder_Bay`, `America/Iqaluit`, `America/Pangnirtung`, `America/Resolute`, `America/Atikokan`, `America/Rankin_Inlet`, `America/Winnipeg`, `America/Rainy_River`, `America/Regina`, `America/Swift_Current`, `America/Edmonton`, `America/Cambridge_Bay`, `America/Yellowknife`, `America/Inuvik`, `America/Creston`, `America/Dawson_Creek`, `America/Vancouver`, `America/Whitehorse`, `America/Dawson`, `Indian/Cocos`, `Africa/Kinshasa`, `Africa/Lubumbashi`, `Africa/Bangui`, `Africa/Brazzaville`, `Europe/Zurich`, `Africa/Abidjan`, `Pacific/Rarotonga`, `America/Santiago`, `Pacific/Easter`, `Africa/Douala`, `Asia/Shanghai`, `Asia/Harbin`, `Asia/Chongqing`, `Asia/Urumqi`, `Asia/Kashgar`, `America/Bogota`, `America/Costa_Rica`, `America/Havana`, `Atlantic/Cape_Verde`, `America/Curacao`, `Indian/Christmas`, `Asia/Nicosia`, `Europe/Prague`, `Europe/Berlin`, `Europe/Busingen`, `Africa/Djibouti`, `Europe/Copenhagen`, `America/Dominica`, `America/Santo_Domingo`, `Africa/Algiers`, `America/Guayaquil`, `Pacific/Galapagos`, `Europe/Tallinn`, `Africa/Cairo`, `Africa/El_Aaiun`, `Africa/Asmara`, `Europe/Madrid`, `Africa/Ceuta`, `Atlantic/Canary`, `Africa/Addis_Ababa`, `Europe/Helsinki`, `Pacific/Fiji`, `Atlantic/Stanley`, `Pacific/Chuuk`, `Pacific/Pohnpei`, `Pacific/Kosrae`, `Atlantic/Faroe`, `Europe/Paris`, `Africa/Libreville`, `Europe/London`, `America/Grenada`, `Asia/Tbilisi`, `America/Cayenne`, `Europe/Guernsey`, `Africa/Accra`, `Europe/Gibraltar`, `America/Godthab`, `America/Danmarkshavn`, `America/Scoresbysund`, `America/Thule`, `Africa/Banjul`, `Africa/Conakry`, `America/Guadeloupe`, `Africa/Malabo`, `Europe/Athens`, `Atlantic/South_Georgia`, `America/Guatemala`, `Pacific/Guam`, `Africa/Bissau`, `America/Guyana`, `Asia/Hong_Kong`, `America/Tegucigalpa`, `Europe/Zagreb`, `America/Port-au-Prince`, `Europe/Budapest`, `Asia/Jakarta`, `Asia/Pontianak`, `Asia/Makassar`, `Asia/Jayapura`, `Europe/Dublin`, `Asia/Jerusalem`, `Europe/Isle_of_Man`, `Asia/Kolkata`, `Indian/Chagos`, `Asia/Baghdad`, `Asia/Tehran`, `Atlantic/Reykjavik`, `Europe/Rome`, `Europe/Jersey`, `America/Jamaica`, `Asia/Amman`, `Asia/Tokyo`, `Africa/Nairobi`, `Asia/Bishkek`, `Asia/Phnom_Penh`, `Pacific/Tarawa`, `Pacific/Enderbury`, `Pacific/Kiritimati`, `Indian/Comoro`, `America/St_Kitts`, `Asia/Pyongyang`, `Asia/Seoul`, `Asia/Kuwait`, `America/Cayman`, `Asia/Almaty`, `Asia/Qyzylorda`, `Asia/Aqtobe`, `Asia/Aqtau`, `Asia/Oral`, `Asia/Vientiane`, `Asia/Beirut`, `America/St_Lucia`, `Europe/Vaduz`, `Asia/Colombo`, `Africa/Monrovia`, `Africa/Maseru`, `Europe/Vilnius`, `Europe/Luxembourg`, `Europe/Riga`, `Africa/Tripoli`, `Africa/Casablanca`, `Europe/Monaco`, `Europe/Chisinau`, `Europe/Podgorica`, `America/Marigot`, `Indian/Antananarivo`, `Pacific/Majuro`, `Pacific/Kwajalein`, `Europe/Skopje`, `Africa/Bamako`, `Asia/Rangoon`, `Asia/Ulaanbaatar`, `Asia/Hovd`, `Asia/Choibalsan`, `Asia/Macau`, `Pacific/Saipan`, `America/Martinique`, `Africa/Nouakchott`, `America/Montserrat`, `Europe/Malta`, `Indian/Mauritius`, `Indian/Maldives`, `Africa/Blantyre`, `America/Mexico_City`, `America/Cancun`, `America/Merida`, `America/Monterrey`, `America/Matamoros`, `America/Mazatlan`, `America/Chihuahua`, `America/Ojinaga`, `America/Hermosillo`, `America/Tijuana`, `America/Santa_Isabel`, `America/Bahia_Banderas`, `Asia/Kuala_Lumpur`, `Asia/Kuching`, `Africa/Maputo`, `Africa/Windhoek`, `Pacific/Noumea`, `Africa/Niamey`, `Pacific/Norfolk`, `Africa/Lagos`, `America/Managua`, `Europe/Amsterdam`, `Europe/Oslo`, `Asia/Kathmandu`, `Pacific/Nauru`, `Pacific/Niue`, `Pacific/Auckland`, `Pacific/Chatham`, `Asia/Muscat`, `America/Panama`, `America/Lima`, `Pacific/Tahiti`, `Pacific/Marquesas`, `Pacific/Gambier`, `Pacific/Port_Moresby`, `Asia/Manila`, `Asia/Karachi`, `Europe/Warsaw`, `America/Miquelon`, `Pacific/Pitcairn`, `America/Puerto_Rico`, `Asia/Gaza`, `Asia/Hebron`, `Europe/Lisbon`, `Atlantic/Madeira`, `Atlantic/Azores`, `Pacific/Palau`, `America/Asuncion`, `Asia/Qatar`, `Indian/Reunion`, `Europe/Bucharest`, `Europe/Belgrade`, `Europe/Kaliningrad`, `Europe/Moscow`, `Europe/Volgograd`, `Europe/Samara`, `Asia/Yekaterinburg`, `Asia/Omsk`, `Asia/Novosibirsk`, `Asia/Novokuznetsk`, `Asia/Krasnoyarsk`, `Asia/Irkutsk`, `Asia/Yakutsk`, `Asia/Khandyga`, `Asia/Vladivostok`, `Asia/Sakhalin`, `Asia/Ust-Nera`, `Asia/Magadan`, `Asia/Kamchatka`, `Asia/Anadyr`, `Africa/Kigali`, `Asia/Riyadh`, `Pacific/Guadalcanal`, `Indian/Mahe`, `Africa/Khartoum`, `Europe/Stockholm`, `Asia/Singapore`, `Atlantic/St_Helena`, `Europe/Ljubljana`, `Arctic/Longyearbyen`, `Europe/Bratislava`, `Africa/Freetown`, `Europe/San_Marino`, `Africa/Dakar`, `Africa/Mogadishu`, `America/Paramaribo`, `Africa/Juba`, `Africa/Sao_Tome`, `America/El_Salvador`, `America/Lower_Princes`, `Asia/Damascus`, `Africa/Mbabane`, `America/Grand_Turk`, `Africa/Ndjamena`, `Indian/Kerguelen`, `Africa/Lome`, `Asia/Bangkok`, `Asia/Dushanbe`, `Pacific/Fakaofo`, `Asia/Dili`, `Asia/Ashgabat`, `Africa/Tunis`, `Pacific/Tongatapu`, `Europe/Istanbul`, `America/Port_of_Spain`, `Pacific/Funafuti`, `Asia/Taipei`, `Africa/Dar_es_Salaam`, `Europe/Kiev`, `Europe/Uzhgorod`, `Europe/Zaporozhye`, `Europe/Simferopol`, `Africa/Kampala`, `Pacific/Johnston`, `Pacific/Midway`, `Pacific/Wake`, `America/New_York`, `America/Detroit`, `America/Kentucky/Louisville`, `America/Kentucky/Monticello`, `America/Indiana/Indianapolis`, `America/Indiana/Vincennes`, `America/Indiana/Winamac`, `America/Indiana/Marengo`, `America/Indiana/Petersburg`, `America/Indiana/Vevay`, `America/Chicago`, `America/Indiana/Tell_City`, `America/Indiana/Knox`, `America/Menominee`, `America/North_Dakota/Center`, `America/North_Dakota/New_Salem`, `America/North_Dakota/Beulah`, `America/Denver`, `America/Boise`, `America/Phoenix`, `America/Los_Angeles`, `America/Anchorage`, `America/Juneau`, `America/Sitka`, `America/Yakutat`, `America/Nome`, `America/Adak`, `America/Metlakatla`, `Pacific/Honolulu`, `America/Montevideo`, `Asia/Samarkand`, `Asia/Tashkent`, `Europe/Vatican`, `America/St_Vincent`, `America/Caracas`, `America/Tortola`, `America/St_Thomas`, `Asia/Ho_Chi_Minh`, `Pacific/Efate`, `Pacific/Wallis`, `Pacific/Apia`, `Asia/Aden`, `Indian/Mayotte`, `Africa/Johannesburg`, `Africa/Lusaka`, `Africa/Harare`, `UTC`
  *   - Default value: `UTC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#timezone CiscoSystemFeatureTemplate#timezone}
  */
  readonly timezone?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#timezone_variable CiscoSystemFeatureTemplate#timezone_variable}
  */
  readonly timezoneVariable?: string;
  /**
  * Enable or disable default gateway tracking
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_default_gateway CiscoSystemFeatureTemplate#track_default_gateway}
  */
  readonly trackDefaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_default_gateway_variable CiscoSystemFeatureTemplate#track_default_gateway_variable}
  */
  readonly trackDefaultGatewayVariable?: string;
  /**
  * OMP Tag attached to routes based on interface tracking
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_interface_tag CiscoSystemFeatureTemplate#track_interface_tag}
  */
  readonly trackInterfaceTag?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_interface_tag_variable CiscoSystemFeatureTemplate#track_interface_tag_variable}
  */
  readonly trackInterfaceTagVariable?: string;
  /**
  * Configure tracking of transport
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_transport CiscoSystemFeatureTemplate#track_transport}
  */
  readonly trackTransport?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_transport_variable CiscoSystemFeatureTemplate#track_transport_variable}
  */
  readonly trackTransportVariable?: string;
  /**
  * Tracker configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#trackers CiscoSystemFeatureTemplate#trackers}
  */
  readonly trackers?: CiscoSystemFeatureTemplateTrackers[] | cdktf.IResolvable;
  /**
  * Enable transport gateway
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#transport_gateway CiscoSystemFeatureTemplate#transport_gateway}
  */
  readonly transportGateway?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#transport_gateway_variable CiscoSystemFeatureTemplate#transport_gateway_variable}
  */
  readonly transportGatewayVariable?: string;
}
export interface CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers {
  /**
  * Mobile number, ex: +1231234414
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#number CiscoSystemFeatureTemplate#number}
  */
  readonly number?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#number_variable CiscoSystemFeatureTemplate#number_variable}
  */
  readonly numberVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#optional CiscoSystemFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersToTerraform(struct?: CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.stringToTerraform(struct!.number),
    number_variable: cdktf.stringToTerraform(struct!.numberVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersToHclTerraform(struct?: CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_variable: {
      value: cdktf.stringToHclTerraform(struct!.numberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._numberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberVariable = this._numberVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._numberVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._numberVariable = value.numberVariable;
      this._optional = value.optional;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // number_variable - computed: false, optional: true, required: false
  private _numberVariable?: string; 
  public get numberVariable() {
    return this.getStringAttribute('number_variable');
  }
  public set numberVariable(value: string) {
    this._numberVariable = value;
  }
  public resetNumberVariable() {
    this._numberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberVariableInput() {
    return this._numberVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersList extends cdktf.ComplexList {
  public internalValue? : CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersOutputReference {
    return new CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#optional CiscoSystemFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Track id
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_id CiscoSystemFeatureTemplate#track_id}
  */
  readonly trackId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#track_id_variable CiscoSystemFeatureTemplate#track_id_variable}
  */
  readonly trackIdVariable?: string;
}

export function ciscoSystemFeatureTemplateObjectTrackersGroupTracksIdsToTerraform(struct?: CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    track_id: cdktf.numberToTerraform(struct!.trackId),
    track_id_variable: cdktf.stringToTerraform(struct!.trackIdVariable),
  }
}


export function ciscoSystemFeatureTemplateObjectTrackersGroupTracksIdsToHclTerraform(struct?: CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_id: {
      value: cdktf.numberToHclTerraform(struct!.trackId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._trackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackId = this._trackId;
    }
    if (this._trackIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackIdVariable = this._trackIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._trackId = undefined;
      this._trackIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._trackId = value.trackId;
      this._trackIdVariable = value.trackIdVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // track_id - computed: false, optional: true, required: false
  private _trackId?: number; 
  public get trackId() {
    return this.getNumberAttribute('track_id');
  }
  public set trackId(value: number) {
    this._trackId = value;
  }
  public resetTrackId() {
    this._trackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIdInput() {
    return this._trackId;
  }

  // track_id_variable - computed: false, optional: true, required: false
  private _trackIdVariable?: string; 
  public get trackIdVariable() {
    return this.getStringAttribute('track_id_variable');
  }
  public set trackIdVariable(value: string) {
    this._trackIdVariable = value;
  }
  public resetTrackIdVariable() {
    this._trackIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIdVariableInput() {
    return this._trackIdVariable;
  }
}

export class CiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsList extends cdktf.ComplexList {
  public internalValue? : CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsOutputReference {
    return new CiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSystemFeatureTemplateObjectTrackers {
  /**
  * Type of grouping to be performed for tracker group
  *   - Choices: `and`, `or`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#boolean CiscoSystemFeatureTemplate#boolean}
  */
  readonly boolean?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#boolean_variable CiscoSystemFeatureTemplate#boolean_variable}
  */
  readonly booleanVariable?: string;
  /**
  * Tracks id in group configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#group_tracks_ids CiscoSystemFeatureTemplate#group_tracks_ids}
  */
  readonly groupTracksIds?: CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds[] | cdktf.IResolvable;
  /**
  * interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#interface CiscoSystemFeatureTemplate#interface}
  */
  readonly interface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#interface_variable CiscoSystemFeatureTemplate#interface_variable}
  */
  readonly interfaceVariable?: string;
  /**
  * IP address of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#ip CiscoSystemFeatureTemplate#ip}
  */
  readonly ip?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#ip_variable CiscoSystemFeatureTemplate#ip_variable}
  */
  readonly ipVariable?: string;
  /**
  * Route Ip Mask
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#mask CiscoSystemFeatureTemplate#mask}
  */
  readonly mask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#mask_variable CiscoSystemFeatureTemplate#mask_variable}
  */
  readonly maskVariable?: string;
  /**
  * Object tracker ID
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#object_number CiscoSystemFeatureTemplate#object_number}
  */
  readonly objectNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#object_number_variable CiscoSystemFeatureTemplate#object_number_variable}
  */
  readonly objectNumberVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#optional CiscoSystemFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * service sig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#sig CiscoSystemFeatureTemplate#sig}
  */
  readonly sig?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#sig_variable CiscoSystemFeatureTemplate#sig_variable}
  */
  readonly sigVariable?: string;
  /**
  * VPN
  *   - Range: `0`-`65527`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#vpn_id CiscoSystemFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}

export function ciscoSystemFeatureTemplateObjectTrackersToTerraform(struct?: CiscoSystemFeatureTemplateObjectTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.stringToTerraform(struct!.boolean),
    boolean_variable: cdktf.stringToTerraform(struct!.booleanVariable),
    group_tracks_ids: cdktf.listMapper(ciscoSystemFeatureTemplateObjectTrackersGroupTracksIdsToTerraform, false)(struct!.groupTracksIds),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_variable: cdktf.stringToTerraform(struct!.interfaceVariable),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_variable: cdktf.stringToTerraform(struct!.ipVariable),
    mask: cdktf.stringToTerraform(struct!.mask),
    mask_variable: cdktf.stringToTerraform(struct!.maskVariable),
    object_number: cdktf.numberToTerraform(struct!.objectNumber),
    object_number_variable: cdktf.stringToTerraform(struct!.objectNumberVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    sig: cdktf.stringToTerraform(struct!.sig),
    sig_variable: cdktf.stringToTerraform(struct!.sigVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function ciscoSystemFeatureTemplateObjectTrackersToHclTerraform(struct?: CiscoSystemFeatureTemplateObjectTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.stringToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boolean_variable: {
      value: cdktf.stringToHclTerraform(struct!.booleanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_tracks_ids: {
      value: cdktf.listMapperHcl(ciscoSystemFeatureTemplateObjectTrackersGroupTracksIdsToHclTerraform, false)(struct!.groupTracksIds),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsList",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.maskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_number: {
      value: cdktf.numberToHclTerraform(struct!.objectNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.objectNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sig: {
      value: cdktf.stringToHclTerraform(struct!.sig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sig_variable: {
      value: cdktf.stringToHclTerraform(struct!.sigVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSystemFeatureTemplateObjectTrackersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSystemFeatureTemplateObjectTrackers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._booleanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanVariable = this._booleanVariable;
    }
    if (this._groupTracksIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTracksIds = this._groupTracksIds?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVariable = this._interfaceVariable;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVariable = this._ipVariable;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._maskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskVariable = this._maskVariable;
    }
    if (this._objectNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNumber = this._objectNumber;
    }
    if (this._objectNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNumberVariable = this._objectNumberVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._sig !== undefined) {
      hasAnyValues = true;
      internalValueResult.sig = this._sig;
    }
    if (this._sigVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigVariable = this._sigVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSystemFeatureTemplateObjectTrackers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._booleanVariable = undefined;
      this._groupTracksIds.internalValue = undefined;
      this._interface = undefined;
      this._interfaceVariable = undefined;
      this._ip = undefined;
      this._ipVariable = undefined;
      this._mask = undefined;
      this._maskVariable = undefined;
      this._objectNumber = undefined;
      this._objectNumberVariable = undefined;
      this._optional = undefined;
      this._sig = undefined;
      this._sigVariable = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._booleanVariable = value.booleanVariable;
      this._groupTracksIds.internalValue = value.groupTracksIds;
      this._interface = value.interface;
      this._interfaceVariable = value.interfaceVariable;
      this._ip = value.ip;
      this._ipVariable = value.ipVariable;
      this._mask = value.mask;
      this._maskVariable = value.maskVariable;
      this._objectNumber = value.objectNumber;
      this._objectNumberVariable = value.objectNumberVariable;
      this._optional = value.optional;
      this._sig = value.sig;
      this._sigVariable = value.sigVariable;
      this._vpnId = value.vpnId;
    }
  }

  // boolean - computed: false, optional: true, required: false
  private _boolean?: string; 
  public get boolean() {
    return this.getStringAttribute('boolean');
  }
  public set boolean(value: string) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // boolean_variable - computed: false, optional: true, required: false
  private _booleanVariable?: string; 
  public get booleanVariable() {
    return this.getStringAttribute('boolean_variable');
  }
  public set booleanVariable(value: string) {
    this._booleanVariable = value;
  }
  public resetBooleanVariable() {
    this._booleanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanVariableInput() {
    return this._booleanVariable;
  }

  // group_tracks_ids - computed: false, optional: true, required: false
  private _groupTracksIds = new CiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsList(this, "group_tracks_ids", false);
  public get groupTracksIds() {
    return this._groupTracksIds;
  }
  public putGroupTracksIds(value: CiscoSystemFeatureTemplateObjectTrackersGroupTracksIds[] | cdktf.IResolvable) {
    this._groupTracksIds.internalValue = value;
  }
  public resetGroupTracksIds() {
    this._groupTracksIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTracksIdsInput() {
    return this._groupTracksIds.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_variable - computed: false, optional: true, required: false
  private _interfaceVariable?: string; 
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }
  public set interfaceVariable(value: string) {
    this._interfaceVariable = value;
  }
  public resetInterfaceVariable() {
    this._interfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVariableInput() {
    return this._interfaceVariable;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_variable - computed: false, optional: true, required: false
  private _ipVariable?: string; 
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }
  public set ipVariable(value: string) {
    this._ipVariable = value;
  }
  public resetIpVariable() {
    this._ipVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVariableInput() {
    return this._ipVariable;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // mask_variable - computed: false, optional: true, required: false
  private _maskVariable?: string; 
  public get maskVariable() {
    return this.getStringAttribute('mask_variable');
  }
  public set maskVariable(value: string) {
    this._maskVariable = value;
  }
  public resetMaskVariable() {
    this._maskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskVariableInput() {
    return this._maskVariable;
  }

  // object_number - computed: false, optional: true, required: false
  private _objectNumber?: number; 
  public get objectNumber() {
    return this.getNumberAttribute('object_number');
  }
  public set objectNumber(value: number) {
    this._objectNumber = value;
  }
  public resetObjectNumber() {
    this._objectNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNumberInput() {
    return this._objectNumber;
  }

  // object_number_variable - computed: false, optional: true, required: false
  private _objectNumberVariable?: string; 
  public get objectNumberVariable() {
    return this.getStringAttribute('object_number_variable');
  }
  public set objectNumberVariable(value: string) {
    this._objectNumberVariable = value;
  }
  public resetObjectNumberVariable() {
    this._objectNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNumberVariableInput() {
    return this._objectNumberVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // sig - computed: false, optional: true, required: false
  private _sig?: string; 
  public get sig() {
    return this.getStringAttribute('sig');
  }
  public set sig(value: string) {
    this._sig = value;
  }
  public resetSig() {
    this._sig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigInput() {
    return this._sig;
  }

  // sig_variable - computed: false, optional: true, required: false
  private _sigVariable?: string; 
  public get sigVariable() {
    return this.getStringAttribute('sig_variable');
  }
  public set sigVariable(value: string) {
    this._sigVariable = value;
  }
  public resetSigVariable() {
    this._sigVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigVariableInput() {
    return this._sigVariable;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CiscoSystemFeatureTemplateObjectTrackersList extends cdktf.ComplexList {
  public internalValue? : CiscoSystemFeatureTemplateObjectTrackers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSystemFeatureTemplateObjectTrackersOutputReference {
    return new CiscoSystemFeatureTemplateObjectTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSystemFeatureTemplateTrackers {
  /**
  * Type of grouping to be performed for tracker group
  *   - Choices: `or`, `and`
  *   - Default value: `or`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#boolean CiscoSystemFeatureTemplate#boolean}
  */
  readonly boolean?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#boolean_variable CiscoSystemFeatureTemplate#boolean_variable}
  */
  readonly booleanVariable?: string;
  /**
  * Tracker member names separated by space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#elements CiscoSystemFeatureTemplate#elements}
  */
  readonly elements?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#elements_variable CiscoSystemFeatureTemplate#elements_variable}
  */
  readonly elementsVariable?: string;
  /**
  * API url of endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#endpoint_api_url CiscoSystemFeatureTemplate#endpoint_api_url}
  */
  readonly endpointApiUrl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#endpoint_api_url_variable CiscoSystemFeatureTemplate#endpoint_api_url_variable}
  */
  readonly endpointApiUrlVariable?: string;
  /**
  * DNS name of endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#endpoint_dns_name CiscoSystemFeatureTemplate#endpoint_dns_name}
  */
  readonly endpointDnsName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#endpoint_dns_name_variable CiscoSystemFeatureTemplate#endpoint_dns_name_variable}
  */
  readonly endpointDnsNameVariable?: string;
  /**
  * IP address of endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#endpoint_ip CiscoSystemFeatureTemplate#endpoint_ip}
  */
  readonly endpointIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#endpoint_ip_variable CiscoSystemFeatureTemplate#endpoint_ip_variable}
  */
  readonly endpointIpVariable?: string;
  /**
  * Probe interval <10..600> seconds
  *   - Range: `20`-`600`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#interval CiscoSystemFeatureTemplate#interval}
  */
  readonly interval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#interval_variable CiscoSystemFeatureTemplate#interval_variable}
  */
  readonly intervalVariable?: string;
  /**
  * Probe failure multiplier <1..10> failed attempts
  *   - Range: `1`-`10`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#multiplier CiscoSystemFeatureTemplate#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#multiplier_variable CiscoSystemFeatureTemplate#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * Tracker name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#name CiscoSystemFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#name_variable CiscoSystemFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#optional CiscoSystemFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Probe Timeout threshold <100..1000> milliseconds
  *   - Range: `100`-`1000`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#threshold CiscoSystemFeatureTemplate#threshold}
  */
  readonly threshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#threshold_variable CiscoSystemFeatureTemplate#threshold_variable}
  */
  readonly thresholdVariable?: string;
  /**
  * Default(Interface)
  *   - Choices: `tracker-group`, `interface`, `static-route`
  *   - Default value: `interface`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#type CiscoSystemFeatureTemplate#type}
  */
  readonly type?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#type_variable CiscoSystemFeatureTemplate#type_variable}
  */
  readonly typeVariable?: string;
}

export function ciscoSystemFeatureTemplateTrackersToTerraform(struct?: CiscoSystemFeatureTemplateTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.stringToTerraform(struct!.boolean),
    boolean_variable: cdktf.stringToTerraform(struct!.booleanVariable),
    elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.elements),
    elements_variable: cdktf.stringToTerraform(struct!.elementsVariable),
    endpoint_api_url: cdktf.stringToTerraform(struct!.endpointApiUrl),
    endpoint_api_url_variable: cdktf.stringToTerraform(struct!.endpointApiUrlVariable),
    endpoint_dns_name: cdktf.stringToTerraform(struct!.endpointDnsName),
    endpoint_dns_name_variable: cdktf.stringToTerraform(struct!.endpointDnsNameVariable),
    endpoint_ip: cdktf.stringToTerraform(struct!.endpointIp),
    endpoint_ip_variable: cdktf.stringToTerraform(struct!.endpointIpVariable),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_variable: cdktf.stringToTerraform(struct!.intervalVariable),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    multiplier_variable: cdktf.stringToTerraform(struct!.multiplierVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_variable: cdktf.stringToTerraform(struct!.thresholdVariable),
    type: cdktf.stringToTerraform(struct!.type),
    type_variable: cdktf.stringToTerraform(struct!.typeVariable),
  }
}


export function ciscoSystemFeatureTemplateTrackersToHclTerraform(struct?: CiscoSystemFeatureTemplateTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.stringToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boolean_variable: {
      value: cdktf.stringToHclTerraform(struct!.booleanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.elements),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    elements_variable: {
      value: cdktf.stringToHclTerraform(struct!.elementsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_api_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointApiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_api_url_variable: {
      value: cdktf.stringToHclTerraform(struct!.endpointApiUrlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_dns_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.endpointDnsNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.endpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.endpointIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.intervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier_variable: {
      value: cdktf.stringToHclTerraform(struct!.multiplierVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.thresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_variable: {
      value: cdktf.stringToHclTerraform(struct!.typeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSystemFeatureTemplateTrackersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSystemFeatureTemplateTrackers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._booleanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanVariable = this._booleanVariable;
    }
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._elementsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementsVariable = this._elementsVariable;
    }
    if (this._endpointApiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointApiUrl = this._endpointApiUrl;
    }
    if (this._endpointApiUrlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointApiUrlVariable = this._endpointApiUrlVariable;
    }
    if (this._endpointDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointDnsName = this._endpointDnsName;
    }
    if (this._endpointDnsNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointDnsNameVariable = this._endpointDnsNameVariable;
    }
    if (this._endpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIp = this._endpointIp;
    }
    if (this._endpointIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpVariable = this._endpointIpVariable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalVariable = this._intervalVariable;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._multiplierVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplierVariable = this._multiplierVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVariable = this._thresholdVariable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVariable = this._typeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSystemFeatureTemplateTrackers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._booleanVariable = undefined;
      this._elements = undefined;
      this._elementsVariable = undefined;
      this._endpointApiUrl = undefined;
      this._endpointApiUrlVariable = undefined;
      this._endpointDnsName = undefined;
      this._endpointDnsNameVariable = undefined;
      this._endpointIp = undefined;
      this._endpointIpVariable = undefined;
      this._interval = undefined;
      this._intervalVariable = undefined;
      this._multiplier = undefined;
      this._multiplierVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._threshold = undefined;
      this._thresholdVariable = undefined;
      this._type = undefined;
      this._typeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._booleanVariable = value.booleanVariable;
      this._elements = value.elements;
      this._elementsVariable = value.elementsVariable;
      this._endpointApiUrl = value.endpointApiUrl;
      this._endpointApiUrlVariable = value.endpointApiUrlVariable;
      this._endpointDnsName = value.endpointDnsName;
      this._endpointDnsNameVariable = value.endpointDnsNameVariable;
      this._endpointIp = value.endpointIp;
      this._endpointIpVariable = value.endpointIpVariable;
      this._interval = value.interval;
      this._intervalVariable = value.intervalVariable;
      this._multiplier = value.multiplier;
      this._multiplierVariable = value.multiplierVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._threshold = value.threshold;
      this._thresholdVariable = value.thresholdVariable;
      this._type = value.type;
      this._typeVariable = value.typeVariable;
    }
  }

  // boolean - computed: false, optional: true, required: false
  private _boolean?: string; 
  public get boolean() {
    return this.getStringAttribute('boolean');
  }
  public set boolean(value: string) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // boolean_variable - computed: false, optional: true, required: false
  private _booleanVariable?: string; 
  public get booleanVariable() {
    return this.getStringAttribute('boolean_variable');
  }
  public set booleanVariable(value: string) {
    this._booleanVariable = value;
  }
  public resetBooleanVariable() {
    this._booleanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanVariableInput() {
    return this._booleanVariable;
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: string[]; 
  public get elements() {
    return cdktf.Fn.tolist(this.getListAttribute('elements'));
  }
  public set elements(value: string[]) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
  }

  // elements_variable - computed: false, optional: true, required: false
  private _elementsVariable?: string; 
  public get elementsVariable() {
    return this.getStringAttribute('elements_variable');
  }
  public set elementsVariable(value: string) {
    this._elementsVariable = value;
  }
  public resetElementsVariable() {
    this._elementsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsVariableInput() {
    return this._elementsVariable;
  }

  // endpoint_api_url - computed: false, optional: true, required: false
  private _endpointApiUrl?: string; 
  public get endpointApiUrl() {
    return this.getStringAttribute('endpoint_api_url');
  }
  public set endpointApiUrl(value: string) {
    this._endpointApiUrl = value;
  }
  public resetEndpointApiUrl() {
    this._endpointApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointApiUrlInput() {
    return this._endpointApiUrl;
  }

  // endpoint_api_url_variable - computed: false, optional: true, required: false
  private _endpointApiUrlVariable?: string; 
  public get endpointApiUrlVariable() {
    return this.getStringAttribute('endpoint_api_url_variable');
  }
  public set endpointApiUrlVariable(value: string) {
    this._endpointApiUrlVariable = value;
  }
  public resetEndpointApiUrlVariable() {
    this._endpointApiUrlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointApiUrlVariableInput() {
    return this._endpointApiUrlVariable;
  }

  // endpoint_dns_name - computed: false, optional: true, required: false
  private _endpointDnsName?: string; 
  public get endpointDnsName() {
    return this.getStringAttribute('endpoint_dns_name');
  }
  public set endpointDnsName(value: string) {
    this._endpointDnsName = value;
  }
  public resetEndpointDnsName() {
    this._endpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDnsNameInput() {
    return this._endpointDnsName;
  }

  // endpoint_dns_name_variable - computed: false, optional: true, required: false
  private _endpointDnsNameVariable?: string; 
  public get endpointDnsNameVariable() {
    return this.getStringAttribute('endpoint_dns_name_variable');
  }
  public set endpointDnsNameVariable(value: string) {
    this._endpointDnsNameVariable = value;
  }
  public resetEndpointDnsNameVariable() {
    this._endpointDnsNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDnsNameVariableInput() {
    return this._endpointDnsNameVariable;
  }

  // endpoint_ip - computed: false, optional: true, required: false
  private _endpointIp?: string; 
  public get endpointIp() {
    return this.getStringAttribute('endpoint_ip');
  }
  public set endpointIp(value: string) {
    this._endpointIp = value;
  }
  public resetEndpointIp() {
    this._endpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpInput() {
    return this._endpointIp;
  }

  // endpoint_ip_variable - computed: false, optional: true, required: false
  private _endpointIpVariable?: string; 
  public get endpointIpVariable() {
    return this.getStringAttribute('endpoint_ip_variable');
  }
  public set endpointIpVariable(value: string) {
    this._endpointIpVariable = value;
  }
  public resetEndpointIpVariable() {
    this._endpointIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpVariableInput() {
    return this._endpointIpVariable;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_variable - computed: false, optional: true, required: false
  private _intervalVariable?: string; 
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }
  public set intervalVariable(value: string) {
    this._intervalVariable = value;
  }
  public resetIntervalVariable() {
    this._intervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalVariableInput() {
    return this._intervalVariable;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // multiplier_variable - computed: false, optional: true, required: false
  private _multiplierVariable?: string; 
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }
  public set multiplierVariable(value: string) {
    this._multiplierVariable = value;
  }
  public resetMultiplierVariable() {
    this._multiplierVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierVariableInput() {
    return this._multiplierVariable;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_variable - computed: false, optional: true, required: false
  private _thresholdVariable?: string; 
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }
  public set thresholdVariable(value: string) {
    this._thresholdVariable = value;
  }
  public resetThresholdVariable() {
    this._thresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVariableInput() {
    return this._thresholdVariable;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_variable - computed: false, optional: true, required: false
  private _typeVariable?: string; 
  public get typeVariable() {
    return this.getStringAttribute('type_variable');
  }
  public set typeVariable(value: string) {
    this._typeVariable = value;
  }
  public resetTypeVariable() {
    this._typeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVariableInput() {
    return this._typeVariable;
  }
}

export class CiscoSystemFeatureTemplateTrackersList extends cdktf.ComplexList {
  public internalValue? : CiscoSystemFeatureTemplateTrackers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSystemFeatureTemplateTrackersOutputReference {
    return new CiscoSystemFeatureTemplateTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template sdwan_cisco_system_feature_template}
*/
export class CiscoSystemFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_system_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoSystemFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoSystemFeatureTemplate to import
  * @param importFromId The id of the existing CiscoSystemFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoSystemFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_system_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_system_feature_template sdwan_cisco_system_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoSystemFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoSystemFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_system_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminTechOnFailure = config.adminTechOnFailure;
    this._adminTechOnFailureVariable = config.adminTechOnFailureVariable;
    this._affinityGroupNumber = config.affinityGroupNumber;
    this._affinityGroupNumberVariable = config.affinityGroupNumberVariable;
    this._affinityGroupPreference = config.affinityGroupPreference;
    this._affinityGroupPreferenceVariable = config.affinityGroupPreferenceVariable;
    this._consoleBaudRate = config.consoleBaudRate;
    this._consoleBaudRateVariable = config.consoleBaudRateVariable;
    this._controlSessionPps = config.controlSessionPps;
    this._controlSessionPpsVariable = config.controlSessionPpsVariable;
    this._controllerGroupList = config.controllerGroupList;
    this._controllerGroupListVariable = config.controllerGroupListVariable;
    this._description = config.description;
    this._deviceGroups = config.deviceGroups;
    this._deviceGroupsVariable = config.deviceGroupsVariable;
    this._deviceTypes = config.deviceTypes;
    this._enableMrfMigration = config.enableMrfMigration;
    this._enhancedAppAwareRouting = config.enhancedAppAwareRouting;
    this._enhancedAppAwareRoutingVariable = config.enhancedAppAwareRoutingVariable;
    this._geoFencing = config.geoFencing;
    this._geoFencingRange = config.geoFencingRange;
    this._geoFencingRangeVariable = config.geoFencingRangeVariable;
    this._geoFencingSms = config.geoFencingSms;
    this._geoFencingSmsPhoneNumbers.internalValue = config.geoFencingSmsPhoneNumbers;
    this._hostname = config.hostname;
    this._hostnameVariable = config.hostnameVariable;
    this._idleTimeout = config.idleTimeout;
    this._idleTimeoutVariable = config.idleTimeoutVariable;
    this._latitude = config.latitude;
    this._latitudeVariable = config.latitudeVariable;
    this._location = config.location;
    this._locationVariable = config.locationVariable;
    this._longitude = config.longitude;
    this._longitudeVariable = config.longitudeVariable;
    this._maxOmpSessions = config.maxOmpSessions;
    this._maxOmpSessionsVariable = config.maxOmpSessionsVariable;
    this._migrationBgpCommunity = config.migrationBgpCommunity;
    this._multiTenant = config.multiTenant;
    this._multiTenantVariable = config.multiTenantVariable;
    this._name = config.name;
    this._objectTrackers.internalValue = config.objectTrackers;
    this._onDemandTunnel = config.onDemandTunnel;
    this._onDemandTunnelIdleTimeout = config.onDemandTunnelIdleTimeout;
    this._onDemandTunnelIdleTimeoutVariable = config.onDemandTunnelIdleTimeoutVariable;
    this._onDemandTunnelVariable = config.onDemandTunnelVariable;
    this._overlayId = config.overlayId;
    this._overlayIdVariable = config.overlayIdVariable;
    this._portHopping = config.portHopping;
    this._portHoppingVariable = config.portHoppingVariable;
    this._portOffset = config.portOffset;
    this._portOffsetVariable = config.portOffsetVariable;
    this._regionId = config.regionId;
    this._regionIdVariable = config.regionIdVariable;
    this._role = config.role;
    this._roleVariable = config.roleVariable;
    this._secondaryRegionId = config.secondaryRegionId;
    this._secondaryRegionIdVariable = config.secondaryRegionIdVariable;
    this._siteId = config.siteId;
    this._siteIdVariable = config.siteIdVariable;
    this._systemDescription = config.systemDescription;
    this._systemDescriptionVariable = config.systemDescriptionVariable;
    this._systemIp = config.systemIp;
    this._systemIpVariable = config.systemIpVariable;
    this._timezone = config.timezone;
    this._timezoneVariable = config.timezoneVariable;
    this._trackDefaultGateway = config.trackDefaultGateway;
    this._trackDefaultGatewayVariable = config.trackDefaultGatewayVariable;
    this._trackInterfaceTag = config.trackInterfaceTag;
    this._trackInterfaceTagVariable = config.trackInterfaceTagVariable;
    this._trackTransport = config.trackTransport;
    this._trackTransportVariable = config.trackTransportVariable;
    this._trackers.internalValue = config.trackers;
    this._transportGateway = config.transportGateway;
    this._transportGatewayVariable = config.transportGatewayVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_tech_on_failure - computed: false, optional: true, required: false
  private _adminTechOnFailure?: boolean | cdktf.IResolvable; 
  public get adminTechOnFailure() {
    return this.getBooleanAttribute('admin_tech_on_failure');
  }
  public set adminTechOnFailure(value: boolean | cdktf.IResolvable) {
    this._adminTechOnFailure = value;
  }
  public resetAdminTechOnFailure() {
    this._adminTechOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTechOnFailureInput() {
    return this._adminTechOnFailure;
  }

  // admin_tech_on_failure_variable - computed: false, optional: true, required: false
  private _adminTechOnFailureVariable?: string; 
  public get adminTechOnFailureVariable() {
    return this.getStringAttribute('admin_tech_on_failure_variable');
  }
  public set adminTechOnFailureVariable(value: string) {
    this._adminTechOnFailureVariable = value;
  }
  public resetAdminTechOnFailureVariable() {
    this._adminTechOnFailureVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTechOnFailureVariableInput() {
    return this._adminTechOnFailureVariable;
  }

  // affinity_group_number - computed: false, optional: true, required: false
  private _affinityGroupNumber?: number; 
  public get affinityGroupNumber() {
    return this.getNumberAttribute('affinity_group_number');
  }
  public set affinityGroupNumber(value: number) {
    this._affinityGroupNumber = value;
  }
  public resetAffinityGroupNumber() {
    this._affinityGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupNumberInput() {
    return this._affinityGroupNumber;
  }

  // affinity_group_number_variable - computed: false, optional: true, required: false
  private _affinityGroupNumberVariable?: string; 
  public get affinityGroupNumberVariable() {
    return this.getStringAttribute('affinity_group_number_variable');
  }
  public set affinityGroupNumberVariable(value: string) {
    this._affinityGroupNumberVariable = value;
  }
  public resetAffinityGroupNumberVariable() {
    this._affinityGroupNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupNumberVariableInput() {
    return this._affinityGroupNumberVariable;
  }

  // affinity_group_preference - computed: false, optional: true, required: false
  private _affinityGroupPreference?: number[]; 
  public get affinityGroupPreference() {
    return this.getNumberListAttribute('affinity_group_preference');
  }
  public set affinityGroupPreference(value: number[]) {
    this._affinityGroupPreference = value;
  }
  public resetAffinityGroupPreference() {
    this._affinityGroupPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupPreferenceInput() {
    return this._affinityGroupPreference;
  }

  // affinity_group_preference_variable - computed: false, optional: true, required: false
  private _affinityGroupPreferenceVariable?: string; 
  public get affinityGroupPreferenceVariable() {
    return this.getStringAttribute('affinity_group_preference_variable');
  }
  public set affinityGroupPreferenceVariable(value: string) {
    this._affinityGroupPreferenceVariable = value;
  }
  public resetAffinityGroupPreferenceVariable() {
    this._affinityGroupPreferenceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupPreferenceVariableInput() {
    return this._affinityGroupPreferenceVariable;
  }

  // console_baud_rate - computed: false, optional: true, required: false
  private _consoleBaudRate?: string; 
  public get consoleBaudRate() {
    return this.getStringAttribute('console_baud_rate');
  }
  public set consoleBaudRate(value: string) {
    this._consoleBaudRate = value;
  }
  public resetConsoleBaudRate() {
    this._consoleBaudRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleBaudRateInput() {
    return this._consoleBaudRate;
  }

  // console_baud_rate_variable - computed: false, optional: true, required: false
  private _consoleBaudRateVariable?: string; 
  public get consoleBaudRateVariable() {
    return this.getStringAttribute('console_baud_rate_variable');
  }
  public set consoleBaudRateVariable(value: string) {
    this._consoleBaudRateVariable = value;
  }
  public resetConsoleBaudRateVariable() {
    this._consoleBaudRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleBaudRateVariableInput() {
    return this._consoleBaudRateVariable;
  }

  // control_session_pps - computed: false, optional: true, required: false
  private _controlSessionPps?: number; 
  public get controlSessionPps() {
    return this.getNumberAttribute('control_session_pps');
  }
  public set controlSessionPps(value: number) {
    this._controlSessionPps = value;
  }
  public resetControlSessionPps() {
    this._controlSessionPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSessionPpsInput() {
    return this._controlSessionPps;
  }

  // control_session_pps_variable - computed: false, optional: true, required: false
  private _controlSessionPpsVariable?: string; 
  public get controlSessionPpsVariable() {
    return this.getStringAttribute('control_session_pps_variable');
  }
  public set controlSessionPpsVariable(value: string) {
    this._controlSessionPpsVariable = value;
  }
  public resetControlSessionPpsVariable() {
    this._controlSessionPpsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSessionPpsVariableInput() {
    return this._controlSessionPpsVariable;
  }

  // controller_group_list - computed: false, optional: true, required: false
  private _controllerGroupList?: number[]; 
  public get controllerGroupList() {
    return this.getNumberListAttribute('controller_group_list');
  }
  public set controllerGroupList(value: number[]) {
    this._controllerGroupList = value;
  }
  public resetControllerGroupList() {
    this._controllerGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerGroupListInput() {
    return this._controllerGroupList;
  }

  // controller_group_list_variable - computed: false, optional: true, required: false
  private _controllerGroupListVariable?: string; 
  public get controllerGroupListVariable() {
    return this.getStringAttribute('controller_group_list_variable');
  }
  public set controllerGroupListVariable(value: string) {
    this._controllerGroupListVariable = value;
  }
  public resetControllerGroupListVariable() {
    this._controllerGroupListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerGroupListVariableInput() {
    return this._controllerGroupListVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups?: string[]; 
  public get deviceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('device_groups'));
  }
  public set deviceGroups(value: string[]) {
    this._deviceGroups = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups;
  }

  // device_groups_variable - computed: false, optional: true, required: false
  private _deviceGroupsVariable?: string; 
  public get deviceGroupsVariable() {
    return this.getStringAttribute('device_groups_variable');
  }
  public set deviceGroupsVariable(value: string) {
    this._deviceGroupsVariable = value;
  }
  public resetDeviceGroupsVariable() {
    this._deviceGroupsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsVariableInput() {
    return this._deviceGroupsVariable;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // enable_mrf_migration - computed: false, optional: true, required: false
  private _enableMrfMigration?: string; 
  public get enableMrfMigration() {
    return this.getStringAttribute('enable_mrf_migration');
  }
  public set enableMrfMigration(value: string) {
    this._enableMrfMigration = value;
  }
  public resetEnableMrfMigration() {
    this._enableMrfMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMrfMigrationInput() {
    return this._enableMrfMigration;
  }

  // enhanced_app_aware_routing - computed: false, optional: true, required: false
  private _enhancedAppAwareRouting?: string; 
  public get enhancedAppAwareRouting() {
    return this.getStringAttribute('enhanced_app_aware_routing');
  }
  public set enhancedAppAwareRouting(value: string) {
    this._enhancedAppAwareRouting = value;
  }
  public resetEnhancedAppAwareRouting() {
    this._enhancedAppAwareRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAppAwareRoutingInput() {
    return this._enhancedAppAwareRouting;
  }

  // enhanced_app_aware_routing_variable - computed: false, optional: true, required: false
  private _enhancedAppAwareRoutingVariable?: string; 
  public get enhancedAppAwareRoutingVariable() {
    return this.getStringAttribute('enhanced_app_aware_routing_variable');
  }
  public set enhancedAppAwareRoutingVariable(value: string) {
    this._enhancedAppAwareRoutingVariable = value;
  }
  public resetEnhancedAppAwareRoutingVariable() {
    this._enhancedAppAwareRoutingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAppAwareRoutingVariableInput() {
    return this._enhancedAppAwareRoutingVariable;
  }

  // geo_fencing - computed: false, optional: true, required: false
  private _geoFencing?: boolean | cdktf.IResolvable; 
  public get geoFencing() {
    return this.getBooleanAttribute('geo_fencing');
  }
  public set geoFencing(value: boolean | cdktf.IResolvable) {
    this._geoFencing = value;
  }
  public resetGeoFencing() {
    this._geoFencing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFencingInput() {
    return this._geoFencing;
  }

  // geo_fencing_range - computed: false, optional: true, required: false
  private _geoFencingRange?: number; 
  public get geoFencingRange() {
    return this.getNumberAttribute('geo_fencing_range');
  }
  public set geoFencingRange(value: number) {
    this._geoFencingRange = value;
  }
  public resetGeoFencingRange() {
    this._geoFencingRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFencingRangeInput() {
    return this._geoFencingRange;
  }

  // geo_fencing_range_variable - computed: false, optional: true, required: false
  private _geoFencingRangeVariable?: string; 
  public get geoFencingRangeVariable() {
    return this.getStringAttribute('geo_fencing_range_variable');
  }
  public set geoFencingRangeVariable(value: string) {
    this._geoFencingRangeVariable = value;
  }
  public resetGeoFencingRangeVariable() {
    this._geoFencingRangeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFencingRangeVariableInput() {
    return this._geoFencingRangeVariable;
  }

  // geo_fencing_sms - computed: false, optional: true, required: false
  private _geoFencingSms?: boolean | cdktf.IResolvable; 
  public get geoFencingSms() {
    return this.getBooleanAttribute('geo_fencing_sms');
  }
  public set geoFencingSms(value: boolean | cdktf.IResolvable) {
    this._geoFencingSms = value;
  }
  public resetGeoFencingSms() {
    this._geoFencingSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFencingSmsInput() {
    return this._geoFencingSms;
  }

  // geo_fencing_sms_phone_numbers - computed: false, optional: true, required: false
  private _geoFencingSmsPhoneNumbers = new CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersList(this, "geo_fencing_sms_phone_numbers", false);
  public get geoFencingSmsPhoneNumbers() {
    return this._geoFencingSmsPhoneNumbers;
  }
  public putGeoFencingSmsPhoneNumbers(value: CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers[] | cdktf.IResolvable) {
    this._geoFencingSmsPhoneNumbers.internalValue = value;
  }
  public resetGeoFencingSmsPhoneNumbers() {
    this._geoFencingSmsPhoneNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFencingSmsPhoneNumbersInput() {
    return this._geoFencingSmsPhoneNumbers.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hostname_variable - computed: false, optional: true, required: false
  private _hostnameVariable?: string; 
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
  }
  public set hostnameVariable(value: string) {
    this._hostnameVariable = value;
  }
  public resetHostnameVariable() {
    this._hostnameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVariableInput() {
    return this._hostnameVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // idle_timeout_variable - computed: false, optional: true, required: false
  private _idleTimeoutVariable?: string; 
  public get idleTimeoutVariable() {
    return this.getStringAttribute('idle_timeout_variable');
  }
  public set idleTimeoutVariable(value: string) {
    this._idleTimeoutVariable = value;
  }
  public resetIdleTimeoutVariable() {
    this._idleTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutVariableInput() {
    return this._idleTimeoutVariable;
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // latitude_variable - computed: false, optional: true, required: false
  private _latitudeVariable?: string; 
  public get latitudeVariable() {
    return this.getStringAttribute('latitude_variable');
  }
  public set latitudeVariable(value: string) {
    this._latitudeVariable = value;
  }
  public resetLatitudeVariable() {
    this._latitudeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeVariableInput() {
    return this._latitudeVariable;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_variable - computed: false, optional: true, required: false
  private _locationVariable?: string; 
  public get locationVariable() {
    return this.getStringAttribute('location_variable');
  }
  public set locationVariable(value: string) {
    this._locationVariable = value;
  }
  public resetLocationVariable() {
    this._locationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationVariableInput() {
    return this._locationVariable;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // longitude_variable - computed: false, optional: true, required: false
  private _longitudeVariable?: string; 
  public get longitudeVariable() {
    return this.getStringAttribute('longitude_variable');
  }
  public set longitudeVariable(value: string) {
    this._longitudeVariable = value;
  }
  public resetLongitudeVariable() {
    this._longitudeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeVariableInput() {
    return this._longitudeVariable;
  }

  // max_omp_sessions - computed: false, optional: true, required: false
  private _maxOmpSessions?: number; 
  public get maxOmpSessions() {
    return this.getNumberAttribute('max_omp_sessions');
  }
  public set maxOmpSessions(value: number) {
    this._maxOmpSessions = value;
  }
  public resetMaxOmpSessions() {
    this._maxOmpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOmpSessionsInput() {
    return this._maxOmpSessions;
  }

  // max_omp_sessions_variable - computed: false, optional: true, required: false
  private _maxOmpSessionsVariable?: string; 
  public get maxOmpSessionsVariable() {
    return this.getStringAttribute('max_omp_sessions_variable');
  }
  public set maxOmpSessionsVariable(value: string) {
    this._maxOmpSessionsVariable = value;
  }
  public resetMaxOmpSessionsVariable() {
    this._maxOmpSessionsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOmpSessionsVariableInput() {
    return this._maxOmpSessionsVariable;
  }

  // migration_bgp_community - computed: false, optional: true, required: false
  private _migrationBgpCommunity?: number; 
  public get migrationBgpCommunity() {
    return this.getNumberAttribute('migration_bgp_community');
  }
  public set migrationBgpCommunity(value: number) {
    this._migrationBgpCommunity = value;
  }
  public resetMigrationBgpCommunity() {
    this._migrationBgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationBgpCommunityInput() {
    return this._migrationBgpCommunity;
  }

  // multi_tenant - computed: false, optional: true, required: false
  private _multiTenant?: boolean | cdktf.IResolvable; 
  public get multiTenant() {
    return this.getBooleanAttribute('multi_tenant');
  }
  public set multiTenant(value: boolean | cdktf.IResolvable) {
    this._multiTenant = value;
  }
  public resetMultiTenant() {
    this._multiTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantInput() {
    return this._multiTenant;
  }

  // multi_tenant_variable - computed: false, optional: true, required: false
  private _multiTenantVariable?: string; 
  public get multiTenantVariable() {
    return this.getStringAttribute('multi_tenant_variable');
  }
  public set multiTenantVariable(value: string) {
    this._multiTenantVariable = value;
  }
  public resetMultiTenantVariable() {
    this._multiTenantVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantVariableInput() {
    return this._multiTenantVariable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_trackers - computed: false, optional: true, required: false
  private _objectTrackers = new CiscoSystemFeatureTemplateObjectTrackersList(this, "object_trackers", false);
  public get objectTrackers() {
    return this._objectTrackers;
  }
  public putObjectTrackers(value: CiscoSystemFeatureTemplateObjectTrackers[] | cdktf.IResolvable) {
    this._objectTrackers.internalValue = value;
  }
  public resetObjectTrackers() {
    this._objectTrackers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackersInput() {
    return this._objectTrackers.internalValue;
  }

  // on_demand_tunnel - computed: false, optional: true, required: false
  private _onDemandTunnel?: boolean | cdktf.IResolvable; 
  public get onDemandTunnel() {
    return this.getBooleanAttribute('on_demand_tunnel');
  }
  public set onDemandTunnel(value: boolean | cdktf.IResolvable) {
    this._onDemandTunnel = value;
  }
  public resetOnDemandTunnel() {
    this._onDemandTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTunnelInput() {
    return this._onDemandTunnel;
  }

  // on_demand_tunnel_idle_timeout - computed: false, optional: true, required: false
  private _onDemandTunnelIdleTimeout?: number; 
  public get onDemandTunnelIdleTimeout() {
    return this.getNumberAttribute('on_demand_tunnel_idle_timeout');
  }
  public set onDemandTunnelIdleTimeout(value: number) {
    this._onDemandTunnelIdleTimeout = value;
  }
  public resetOnDemandTunnelIdleTimeout() {
    this._onDemandTunnelIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTunnelIdleTimeoutInput() {
    return this._onDemandTunnelIdleTimeout;
  }

  // on_demand_tunnel_idle_timeout_variable - computed: false, optional: true, required: false
  private _onDemandTunnelIdleTimeoutVariable?: string; 
  public get onDemandTunnelIdleTimeoutVariable() {
    return this.getStringAttribute('on_demand_tunnel_idle_timeout_variable');
  }
  public set onDemandTunnelIdleTimeoutVariable(value: string) {
    this._onDemandTunnelIdleTimeoutVariable = value;
  }
  public resetOnDemandTunnelIdleTimeoutVariable() {
    this._onDemandTunnelIdleTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTunnelIdleTimeoutVariableInput() {
    return this._onDemandTunnelIdleTimeoutVariable;
  }

  // on_demand_tunnel_variable - computed: false, optional: true, required: false
  private _onDemandTunnelVariable?: string; 
  public get onDemandTunnelVariable() {
    return this.getStringAttribute('on_demand_tunnel_variable');
  }
  public set onDemandTunnelVariable(value: string) {
    this._onDemandTunnelVariable = value;
  }
  public resetOnDemandTunnelVariable() {
    this._onDemandTunnelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTunnelVariableInput() {
    return this._onDemandTunnelVariable;
  }

  // overlay_id - computed: false, optional: true, required: false
  private _overlayId?: number; 
  public get overlayId() {
    return this.getNumberAttribute('overlay_id');
  }
  public set overlayId(value: number) {
    this._overlayId = value;
  }
  public resetOverlayId() {
    this._overlayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayIdInput() {
    return this._overlayId;
  }

  // overlay_id_variable - computed: false, optional: true, required: false
  private _overlayIdVariable?: string; 
  public get overlayIdVariable() {
    return this.getStringAttribute('overlay_id_variable');
  }
  public set overlayIdVariable(value: string) {
    this._overlayIdVariable = value;
  }
  public resetOverlayIdVariable() {
    this._overlayIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayIdVariableInput() {
    return this._overlayIdVariable;
  }

  // port_hopping - computed: false, optional: true, required: false
  private _portHopping?: boolean | cdktf.IResolvable; 
  public get portHopping() {
    return this.getBooleanAttribute('port_hopping');
  }
  public set portHopping(value: boolean | cdktf.IResolvable) {
    this._portHopping = value;
  }
  public resetPortHopping() {
    this._portHopping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHoppingInput() {
    return this._portHopping;
  }

  // port_hopping_variable - computed: false, optional: true, required: false
  private _portHoppingVariable?: string; 
  public get portHoppingVariable() {
    return this.getStringAttribute('port_hopping_variable');
  }
  public set portHoppingVariable(value: string) {
    this._portHoppingVariable = value;
  }
  public resetPortHoppingVariable() {
    this._portHoppingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHoppingVariableInput() {
    return this._portHoppingVariable;
  }

  // port_offset - computed: false, optional: true, required: false
  private _portOffset?: number; 
  public get portOffset() {
    return this.getNumberAttribute('port_offset');
  }
  public set portOffset(value: number) {
    this._portOffset = value;
  }
  public resetPortOffset() {
    this._portOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOffsetInput() {
    return this._portOffset;
  }

  // port_offset_variable - computed: false, optional: true, required: false
  private _portOffsetVariable?: string; 
  public get portOffsetVariable() {
    return this.getStringAttribute('port_offset_variable');
  }
  public set portOffsetVariable(value: string) {
    this._portOffsetVariable = value;
  }
  public resetPortOffsetVariable() {
    this._portOffsetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOffsetVariableInput() {
    return this._portOffsetVariable;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_id_variable - computed: false, optional: true, required: false
  private _regionIdVariable?: string; 
  public get regionIdVariable() {
    return this.getStringAttribute('region_id_variable');
  }
  public set regionIdVariable(value: string) {
    this._regionIdVariable = value;
  }
  public resetRegionIdVariable() {
    this._regionIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdVariableInput() {
    return this._regionIdVariable;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_variable - computed: false, optional: true, required: false
  private _roleVariable?: string; 
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }
  public set roleVariable(value: string) {
    this._roleVariable = value;
  }
  public resetRoleVariable() {
    this._roleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleVariableInput() {
    return this._roleVariable;
  }

  // secondary_region_id - computed: false, optional: true, required: false
  private _secondaryRegionId?: number; 
  public get secondaryRegionId() {
    return this.getNumberAttribute('secondary_region_id');
  }
  public set secondaryRegionId(value: number) {
    this._secondaryRegionId = value;
  }
  public resetSecondaryRegionId() {
    this._secondaryRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRegionIdInput() {
    return this._secondaryRegionId;
  }

  // secondary_region_id_variable - computed: false, optional: true, required: false
  private _secondaryRegionIdVariable?: string; 
  public get secondaryRegionIdVariable() {
    return this.getStringAttribute('secondary_region_id_variable');
  }
  public set secondaryRegionIdVariable(value: string) {
    this._secondaryRegionIdVariable = value;
  }
  public resetSecondaryRegionIdVariable() {
    this._secondaryRegionIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRegionIdVariableInput() {
    return this._secondaryRegionIdVariable;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_id_variable - computed: false, optional: true, required: false
  private _siteIdVariable?: string; 
  public get siteIdVariable() {
    return this.getStringAttribute('site_id_variable');
  }
  public set siteIdVariable(value: string) {
    this._siteIdVariable = value;
  }
  public resetSiteIdVariable() {
    this._siteIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdVariableInput() {
    return this._siteIdVariable;
  }

  // system_description - computed: false, optional: true, required: false
  private _systemDescription?: string; 
  public get systemDescription() {
    return this.getStringAttribute('system_description');
  }
  public set systemDescription(value: string) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // system_description_variable - computed: false, optional: true, required: false
  private _systemDescriptionVariable?: string; 
  public get systemDescriptionVariable() {
    return this.getStringAttribute('system_description_variable');
  }
  public set systemDescriptionVariable(value: string) {
    this._systemDescriptionVariable = value;
  }
  public resetSystemDescriptionVariable() {
    this._systemDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionVariableInput() {
    return this._systemDescriptionVariable;
  }

  // system_ip - computed: false, optional: true, required: false
  private _systemIp?: string; 
  public get systemIp() {
    return this.getStringAttribute('system_ip');
  }
  public set systemIp(value: string) {
    this._systemIp = value;
  }
  public resetSystemIp() {
    this._systemIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIpInput() {
    return this._systemIp;
  }

  // system_ip_variable - computed: false, optional: true, required: false
  private _systemIpVariable?: string; 
  public get systemIpVariable() {
    return this.getStringAttribute('system_ip_variable');
  }
  public set systemIpVariable(value: string) {
    this._systemIpVariable = value;
  }
  public resetSystemIpVariable() {
    this._systemIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIpVariableInput() {
    return this._systemIpVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timezone_variable - computed: false, optional: true, required: false
  private _timezoneVariable?: string; 
  public get timezoneVariable() {
    return this.getStringAttribute('timezone_variable');
  }
  public set timezoneVariable(value: string) {
    this._timezoneVariable = value;
  }
  public resetTimezoneVariable() {
    this._timezoneVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneVariableInput() {
    return this._timezoneVariable;
  }

  // track_default_gateway - computed: false, optional: true, required: false
  private _trackDefaultGateway?: boolean | cdktf.IResolvable; 
  public get trackDefaultGateway() {
    return this.getBooleanAttribute('track_default_gateway');
  }
  public set trackDefaultGateway(value: boolean | cdktf.IResolvable) {
    this._trackDefaultGateway = value;
  }
  public resetTrackDefaultGateway() {
    this._trackDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackDefaultGatewayInput() {
    return this._trackDefaultGateway;
  }

  // track_default_gateway_variable - computed: false, optional: true, required: false
  private _trackDefaultGatewayVariable?: string; 
  public get trackDefaultGatewayVariable() {
    return this.getStringAttribute('track_default_gateway_variable');
  }
  public set trackDefaultGatewayVariable(value: string) {
    this._trackDefaultGatewayVariable = value;
  }
  public resetTrackDefaultGatewayVariable() {
    this._trackDefaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackDefaultGatewayVariableInput() {
    return this._trackDefaultGatewayVariable;
  }

  // track_interface_tag - computed: false, optional: true, required: false
  private _trackInterfaceTag?: number; 
  public get trackInterfaceTag() {
    return this.getNumberAttribute('track_interface_tag');
  }
  public set trackInterfaceTag(value: number) {
    this._trackInterfaceTag = value;
  }
  public resetTrackInterfaceTag() {
    this._trackInterfaceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfaceTagInput() {
    return this._trackInterfaceTag;
  }

  // track_interface_tag_variable - computed: false, optional: true, required: false
  private _trackInterfaceTagVariable?: string; 
  public get trackInterfaceTagVariable() {
    return this.getStringAttribute('track_interface_tag_variable');
  }
  public set trackInterfaceTagVariable(value: string) {
    this._trackInterfaceTagVariable = value;
  }
  public resetTrackInterfaceTagVariable() {
    this._trackInterfaceTagVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfaceTagVariableInput() {
    return this._trackInterfaceTagVariable;
  }

  // track_transport - computed: false, optional: true, required: false
  private _trackTransport?: boolean | cdktf.IResolvable; 
  public get trackTransport() {
    return this.getBooleanAttribute('track_transport');
  }
  public set trackTransport(value: boolean | cdktf.IResolvable) {
    this._trackTransport = value;
  }
  public resetTrackTransport() {
    this._trackTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTransportInput() {
    return this._trackTransport;
  }

  // track_transport_variable - computed: false, optional: true, required: false
  private _trackTransportVariable?: string; 
  public get trackTransportVariable() {
    return this.getStringAttribute('track_transport_variable');
  }
  public set trackTransportVariable(value: string) {
    this._trackTransportVariable = value;
  }
  public resetTrackTransportVariable() {
    this._trackTransportVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTransportVariableInput() {
    return this._trackTransportVariable;
  }

  // trackers - computed: false, optional: true, required: false
  private _trackers = new CiscoSystemFeatureTemplateTrackersList(this, "trackers", false);
  public get trackers() {
    return this._trackers;
  }
  public putTrackers(value: CiscoSystemFeatureTemplateTrackers[] | cdktf.IResolvable) {
    this._trackers.internalValue = value;
  }
  public resetTrackers() {
    this._trackers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackersInput() {
    return this._trackers.internalValue;
  }

  // transport_gateway - computed: false, optional: true, required: false
  private _transportGateway?: boolean | cdktf.IResolvable; 
  public get transportGateway() {
    return this.getBooleanAttribute('transport_gateway');
  }
  public set transportGateway(value: boolean | cdktf.IResolvable) {
    this._transportGateway = value;
  }
  public resetTransportGateway() {
    this._transportGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayInput() {
    return this._transportGateway;
  }

  // transport_gateway_variable - computed: false, optional: true, required: false
  private _transportGatewayVariable?: string; 
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
  }
  public set transportGatewayVariable(value: string) {
    this._transportGatewayVariable = value;
  }
  public resetTransportGatewayVariable() {
    this._transportGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayVariableInput() {
    return this._transportGatewayVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_tech_on_failure: cdktf.booleanToTerraform(this._adminTechOnFailure),
      admin_tech_on_failure_variable: cdktf.stringToTerraform(this._adminTechOnFailureVariable),
      affinity_group_number: cdktf.numberToTerraform(this._affinityGroupNumber),
      affinity_group_number_variable: cdktf.stringToTerraform(this._affinityGroupNumberVariable),
      affinity_group_preference: cdktf.listMapper(cdktf.numberToTerraform, false)(this._affinityGroupPreference),
      affinity_group_preference_variable: cdktf.stringToTerraform(this._affinityGroupPreferenceVariable),
      console_baud_rate: cdktf.stringToTerraform(this._consoleBaudRate),
      console_baud_rate_variable: cdktf.stringToTerraform(this._consoleBaudRateVariable),
      control_session_pps: cdktf.numberToTerraform(this._controlSessionPps),
      control_session_pps_variable: cdktf.stringToTerraform(this._controlSessionPpsVariable),
      controller_group_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._controllerGroupList),
      controller_group_list_variable: cdktf.stringToTerraform(this._controllerGroupListVariable),
      description: cdktf.stringToTerraform(this._description),
      device_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceGroups),
      device_groups_variable: cdktf.stringToTerraform(this._deviceGroupsVariable),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      enable_mrf_migration: cdktf.stringToTerraform(this._enableMrfMigration),
      enhanced_app_aware_routing: cdktf.stringToTerraform(this._enhancedAppAwareRouting),
      enhanced_app_aware_routing_variable: cdktf.stringToTerraform(this._enhancedAppAwareRoutingVariable),
      geo_fencing: cdktf.booleanToTerraform(this._geoFencing),
      geo_fencing_range: cdktf.numberToTerraform(this._geoFencingRange),
      geo_fencing_range_variable: cdktf.stringToTerraform(this._geoFencingRangeVariable),
      geo_fencing_sms: cdktf.booleanToTerraform(this._geoFencingSms),
      geo_fencing_sms_phone_numbers: cdktf.listMapper(ciscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersToTerraform, false)(this._geoFencingSmsPhoneNumbers.internalValue),
      hostname: cdktf.stringToTerraform(this._hostname),
      hostname_variable: cdktf.stringToTerraform(this._hostnameVariable),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      idle_timeout_variable: cdktf.stringToTerraform(this._idleTimeoutVariable),
      latitude: cdktf.numberToTerraform(this._latitude),
      latitude_variable: cdktf.stringToTerraform(this._latitudeVariable),
      location: cdktf.stringToTerraform(this._location),
      location_variable: cdktf.stringToTerraform(this._locationVariable),
      longitude: cdktf.numberToTerraform(this._longitude),
      longitude_variable: cdktf.stringToTerraform(this._longitudeVariable),
      max_omp_sessions: cdktf.numberToTerraform(this._maxOmpSessions),
      max_omp_sessions_variable: cdktf.stringToTerraform(this._maxOmpSessionsVariable),
      migration_bgp_community: cdktf.numberToTerraform(this._migrationBgpCommunity),
      multi_tenant: cdktf.booleanToTerraform(this._multiTenant),
      multi_tenant_variable: cdktf.stringToTerraform(this._multiTenantVariable),
      name: cdktf.stringToTerraform(this._name),
      object_trackers: cdktf.listMapper(ciscoSystemFeatureTemplateObjectTrackersToTerraform, false)(this._objectTrackers.internalValue),
      on_demand_tunnel: cdktf.booleanToTerraform(this._onDemandTunnel),
      on_demand_tunnel_idle_timeout: cdktf.numberToTerraform(this._onDemandTunnelIdleTimeout),
      on_demand_tunnel_idle_timeout_variable: cdktf.stringToTerraform(this._onDemandTunnelIdleTimeoutVariable),
      on_demand_tunnel_variable: cdktf.stringToTerraform(this._onDemandTunnelVariable),
      overlay_id: cdktf.numberToTerraform(this._overlayId),
      overlay_id_variable: cdktf.stringToTerraform(this._overlayIdVariable),
      port_hopping: cdktf.booleanToTerraform(this._portHopping),
      port_hopping_variable: cdktf.stringToTerraform(this._portHoppingVariable),
      port_offset: cdktf.numberToTerraform(this._portOffset),
      port_offset_variable: cdktf.stringToTerraform(this._portOffsetVariable),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_id_variable: cdktf.stringToTerraform(this._regionIdVariable),
      role: cdktf.stringToTerraform(this._role),
      role_variable: cdktf.stringToTerraform(this._roleVariable),
      secondary_region_id: cdktf.numberToTerraform(this._secondaryRegionId),
      secondary_region_id_variable: cdktf.stringToTerraform(this._secondaryRegionIdVariable),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_id_variable: cdktf.stringToTerraform(this._siteIdVariable),
      system_description: cdktf.stringToTerraform(this._systemDescription),
      system_description_variable: cdktf.stringToTerraform(this._systemDescriptionVariable),
      system_ip: cdktf.stringToTerraform(this._systemIp),
      system_ip_variable: cdktf.stringToTerraform(this._systemIpVariable),
      timezone: cdktf.stringToTerraform(this._timezone),
      timezone_variable: cdktf.stringToTerraform(this._timezoneVariable),
      track_default_gateway: cdktf.booleanToTerraform(this._trackDefaultGateway),
      track_default_gateway_variable: cdktf.stringToTerraform(this._trackDefaultGatewayVariable),
      track_interface_tag: cdktf.numberToTerraform(this._trackInterfaceTag),
      track_interface_tag_variable: cdktf.stringToTerraform(this._trackInterfaceTagVariable),
      track_transport: cdktf.booleanToTerraform(this._trackTransport),
      track_transport_variable: cdktf.stringToTerraform(this._trackTransportVariable),
      trackers: cdktf.listMapper(ciscoSystemFeatureTemplateTrackersToTerraform, false)(this._trackers.internalValue),
      transport_gateway: cdktf.booleanToTerraform(this._transportGateway),
      transport_gateway_variable: cdktf.stringToTerraform(this._transportGatewayVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_tech_on_failure: {
        value: cdktf.booleanToHclTerraform(this._adminTechOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_tech_on_failure_variable: {
        value: cdktf.stringToHclTerraform(this._adminTechOnFailureVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity_group_number: {
        value: cdktf.numberToHclTerraform(this._affinityGroupNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      affinity_group_number_variable: {
        value: cdktf.stringToHclTerraform(this._affinityGroupNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity_group_preference: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._affinityGroupPreference),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      affinity_group_preference_variable: {
        value: cdktf.stringToHclTerraform(this._affinityGroupPreferenceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_baud_rate: {
        value: cdktf.stringToHclTerraform(this._consoleBaudRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_baud_rate_variable: {
        value: cdktf.stringToHclTerraform(this._consoleBaudRateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_session_pps: {
        value: cdktf.numberToHclTerraform(this._controlSessionPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_session_pps_variable: {
        value: cdktf.stringToHclTerraform(this._controlSessionPpsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_group_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._controllerGroupList),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      controller_group_list_variable: {
        value: cdktf.stringToHclTerraform(this._controllerGroupListVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_groups_variable: {
        value: cdktf.stringToHclTerraform(this._deviceGroupsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_mrf_migration: {
        value: cdktf.stringToHclTerraform(this._enableMrfMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_app_aware_routing: {
        value: cdktf.stringToHclTerraform(this._enhancedAppAwareRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_app_aware_routing_variable: {
        value: cdktf.stringToHclTerraform(this._enhancedAppAwareRoutingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_fencing: {
        value: cdktf.booleanToHclTerraform(this._geoFencing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      geo_fencing_range: {
        value: cdktf.numberToHclTerraform(this._geoFencingRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_fencing_range_variable: {
        value: cdktf.stringToHclTerraform(this._geoFencingRangeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_fencing_sms: {
        value: cdktf.booleanToHclTerraform(this._geoFencingSms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      geo_fencing_sms_phone_numbers: {
        value: cdktf.listMapperHcl(ciscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersToHclTerraform, false)(this._geoFencingSmsPhoneNumbers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_variable: {
        value: cdktf.stringToHclTerraform(this._hostnameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._idleTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latitude_variable: {
        value: cdktf.stringToHclTerraform(this._latitudeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_variable: {
        value: cdktf.stringToHclTerraform(this._locationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude_variable: {
        value: cdktf.stringToHclTerraform(this._longitudeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_omp_sessions: {
        value: cdktf.numberToHclTerraform(this._maxOmpSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_omp_sessions_variable: {
        value: cdktf.stringToHclTerraform(this._maxOmpSessionsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_bgp_community: {
        value: cdktf.numberToHclTerraform(this._migrationBgpCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_tenant: {
        value: cdktf.booleanToHclTerraform(this._multiTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_tenant_variable: {
        value: cdktf.stringToHclTerraform(this._multiTenantVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_trackers: {
        value: cdktf.listMapperHcl(ciscoSystemFeatureTemplateObjectTrackersToHclTerraform, false)(this._objectTrackers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSystemFeatureTemplateObjectTrackersList",
      },
      on_demand_tunnel: {
        value: cdktf.booleanToHclTerraform(this._onDemandTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_demand_tunnel_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._onDemandTunnelIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_demand_tunnel_idle_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._onDemandTunnelIdleTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_tunnel_variable: {
        value: cdktf.stringToHclTerraform(this._onDemandTunnelVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_id: {
        value: cdktf.numberToHclTerraform(this._overlayId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overlay_id_variable: {
        value: cdktf.stringToHclTerraform(this._overlayIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_hopping: {
        value: cdktf.booleanToHclTerraform(this._portHopping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_hopping_variable: {
        value: cdktf.stringToHclTerraform(this._portHoppingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_offset: {
        value: cdktf.numberToHclTerraform(this._portOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_offset_variable: {
        value: cdktf.stringToHclTerraform(this._portOffsetVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_id_variable: {
        value: cdktf.stringToHclTerraform(this._regionIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_variable: {
        value: cdktf.stringToHclTerraform(this._roleVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_region_id: {
        value: cdktf.numberToHclTerraform(this._secondaryRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_region_id_variable: {
        value: cdktf.stringToHclTerraform(this._secondaryRegionIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id_variable: {
        value: cdktf.stringToHclTerraform(this._siteIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_description: {
        value: cdktf.stringToHclTerraform(this._systemDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_description_variable: {
        value: cdktf.stringToHclTerraform(this._systemDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_ip: {
        value: cdktf.stringToHclTerraform(this._systemIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_ip_variable: {
        value: cdktf.stringToHclTerraform(this._systemIpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone_variable: {
        value: cdktf.stringToHclTerraform(this._timezoneVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_default_gateway: {
        value: cdktf.booleanToHclTerraform(this._trackDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_default_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._trackDefaultGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_interface_tag: {
        value: cdktf.numberToHclTerraform(this._trackInterfaceTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_interface_tag_variable: {
        value: cdktf.stringToHclTerraform(this._trackInterfaceTagVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_transport: {
        value: cdktf.booleanToHclTerraform(this._trackTransport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_transport_variable: {
        value: cdktf.stringToHclTerraform(this._trackTransportVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trackers: {
        value: cdktf.listMapperHcl(ciscoSystemFeatureTemplateTrackersToHclTerraform, false)(this._trackers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSystemFeatureTemplateTrackersList",
      },
      transport_gateway: {
        value: cdktf.booleanToHclTerraform(this._transportGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._transportGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
