// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntRolesDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls visibility of sensitive data in Terraform state. When 'false', role details are omitted from state to prevent sensitive data exposure. When 'true', all role details are returned in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#authenticate DataSaviyntRolesDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * Filter roles by confidentiality level. Valid values: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'. When specified, returns only roles with this confidentiality level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#confidentiality DataSaviyntRolesDatasource#confidentiality}
  */
  readonly confidentiality?: string;
  /**
  * Custom property 1 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property1 DataSaviyntRolesDatasource#custom_property1}
  */
  readonly customProperty1?: string;
  /**
  * Custom property 10 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property10 DataSaviyntRolesDatasource#custom_property10}
  */
  readonly customProperty10?: string;
  /**
  * Custom property 11 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property11 DataSaviyntRolesDatasource#custom_property11}
  */
  readonly customProperty11?: string;
  /**
  * Custom property 12 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property12 DataSaviyntRolesDatasource#custom_property12}
  */
  readonly customProperty12?: string;
  /**
  * Custom property 13 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property13 DataSaviyntRolesDatasource#custom_property13}
  */
  readonly customProperty13?: string;
  /**
  * Custom property 14 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property14 DataSaviyntRolesDatasource#custom_property14}
  */
  readonly customProperty14?: string;
  /**
  * Custom property 15 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property15 DataSaviyntRolesDatasource#custom_property15}
  */
  readonly customProperty15?: string;
  /**
  * Custom property 16 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property16 DataSaviyntRolesDatasource#custom_property16}
  */
  readonly customProperty16?: string;
  /**
  * Custom property 17 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property17 DataSaviyntRolesDatasource#custom_property17}
  */
  readonly customProperty17?: string;
  /**
  * Custom property 18 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property18 DataSaviyntRolesDatasource#custom_property18}
  */
  readonly customProperty18?: string;
  /**
  * Custom property 19 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property19 DataSaviyntRolesDatasource#custom_property19}
  */
  readonly customProperty19?: string;
  /**
  * Custom property 2 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property2 DataSaviyntRolesDatasource#custom_property2}
  */
  readonly customProperty2?: string;
  /**
  * Custom property 20 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property20 DataSaviyntRolesDatasource#custom_property20}
  */
  readonly customProperty20?: string;
  /**
  * Custom property 21 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property21 DataSaviyntRolesDatasource#custom_property21}
  */
  readonly customProperty21?: string;
  /**
  * Custom property 22 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property22 DataSaviyntRolesDatasource#custom_property22}
  */
  readonly customProperty22?: string;
  /**
  * Custom property 23 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property23 DataSaviyntRolesDatasource#custom_property23}
  */
  readonly customProperty23?: string;
  /**
  * Custom property 24 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property24 DataSaviyntRolesDatasource#custom_property24}
  */
  readonly customProperty24?: string;
  /**
  * Custom property 25 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property25 DataSaviyntRolesDatasource#custom_property25}
  */
  readonly customProperty25?: string;
  /**
  * Custom property 26 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property26 DataSaviyntRolesDatasource#custom_property26}
  */
  readonly customProperty26?: string;
  /**
  * Custom property 27 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property27 DataSaviyntRolesDatasource#custom_property27}
  */
  readonly customProperty27?: string;
  /**
  * Custom property 28 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property28 DataSaviyntRolesDatasource#custom_property28}
  */
  readonly customProperty28?: string;
  /**
  * Custom property 29 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property29 DataSaviyntRolesDatasource#custom_property29}
  */
  readonly customProperty29?: string;
  /**
  * Custom property 3 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property3 DataSaviyntRolesDatasource#custom_property3}
  */
  readonly customProperty3?: string;
  /**
  * Custom property 30 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property30 DataSaviyntRolesDatasource#custom_property30}
  */
  readonly customProperty30?: string;
  /**
  * Custom property 31 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property31 DataSaviyntRolesDatasource#custom_property31}
  */
  readonly customProperty31?: string;
  /**
  * Custom property 32 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property32 DataSaviyntRolesDatasource#custom_property32}
  */
  readonly customProperty32?: string;
  /**
  * Custom property 33 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property33 DataSaviyntRolesDatasource#custom_property33}
  */
  readonly customProperty33?: string;
  /**
  * Custom property 34 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property34 DataSaviyntRolesDatasource#custom_property34}
  */
  readonly customProperty34?: string;
  /**
  * Custom property 35 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property35 DataSaviyntRolesDatasource#custom_property35}
  */
  readonly customProperty35?: string;
  /**
  * Custom property 36 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property36 DataSaviyntRolesDatasource#custom_property36}
  */
  readonly customProperty36?: string;
  /**
  * Custom property 37 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property37 DataSaviyntRolesDatasource#custom_property37}
  */
  readonly customProperty37?: string;
  /**
  * Custom property 38 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property38 DataSaviyntRolesDatasource#custom_property38}
  */
  readonly customProperty38?: string;
  /**
  * Custom property 39 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property39 DataSaviyntRolesDatasource#custom_property39}
  */
  readonly customProperty39?: string;
  /**
  * Custom property 4 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property4 DataSaviyntRolesDatasource#custom_property4}
  */
  readonly customProperty4?: string;
  /**
  * Custom property 40 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property40 DataSaviyntRolesDatasource#custom_property40}
  */
  readonly customProperty40?: string;
  /**
  * Custom property 41 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property41 DataSaviyntRolesDatasource#custom_property41}
  */
  readonly customProperty41?: string;
  /**
  * Custom property 42 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property42 DataSaviyntRolesDatasource#custom_property42}
  */
  readonly customProperty42?: string;
  /**
  * Custom property 43 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property43 DataSaviyntRolesDatasource#custom_property43}
  */
  readonly customProperty43?: string;
  /**
  * Custom property 44 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property44 DataSaviyntRolesDatasource#custom_property44}
  */
  readonly customProperty44?: string;
  /**
  * Custom property 45 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property45 DataSaviyntRolesDatasource#custom_property45}
  */
  readonly customProperty45?: string;
  /**
  * Custom property 46 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property46 DataSaviyntRolesDatasource#custom_property46}
  */
  readonly customProperty46?: string;
  /**
  * Custom property 47 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property47 DataSaviyntRolesDatasource#custom_property47}
  */
  readonly customProperty47?: string;
  /**
  * Custom property 48 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property48 DataSaviyntRolesDatasource#custom_property48}
  */
  readonly customProperty48?: string;
  /**
  * Custom property 49 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property49 DataSaviyntRolesDatasource#custom_property49}
  */
  readonly customProperty49?: string;
  /**
  * Custom property 5 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property5 DataSaviyntRolesDatasource#custom_property5}
  */
  readonly customProperty5?: string;
  /**
  * Custom property 50 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property50 DataSaviyntRolesDatasource#custom_property50}
  */
  readonly customProperty50?: string;
  /**
  * Custom property 51 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property51 DataSaviyntRolesDatasource#custom_property51}
  */
  readonly customProperty51?: string;
  /**
  * Custom property 52 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property52 DataSaviyntRolesDatasource#custom_property52}
  */
  readonly customProperty52?: string;
  /**
  * Custom property 53 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property53 DataSaviyntRolesDatasource#custom_property53}
  */
  readonly customProperty53?: string;
  /**
  * Custom property 54 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property54 DataSaviyntRolesDatasource#custom_property54}
  */
  readonly customProperty54?: string;
  /**
  * Custom property 55 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property55 DataSaviyntRolesDatasource#custom_property55}
  */
  readonly customProperty55?: string;
  /**
  * Custom property 56 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property56 DataSaviyntRolesDatasource#custom_property56}
  */
  readonly customProperty56?: string;
  /**
  * Custom property 57 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property57 DataSaviyntRolesDatasource#custom_property57}
  */
  readonly customProperty57?: string;
  /**
  * Custom property 58 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property58 DataSaviyntRolesDatasource#custom_property58}
  */
  readonly customProperty58?: string;
  /**
  * Custom property 59 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property59 DataSaviyntRolesDatasource#custom_property59}
  */
  readonly customProperty59?: string;
  /**
  * Custom property 6 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property6 DataSaviyntRolesDatasource#custom_property6}
  */
  readonly customProperty6?: string;
  /**
  * Custom property 60 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property60 DataSaviyntRolesDatasource#custom_property60}
  */
  readonly customProperty60?: string;
  /**
  * Custom property 7 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property7 DataSaviyntRolesDatasource#custom_property7}
  */
  readonly customProperty7?: string;
  /**
  * Custom property 8 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property8 DataSaviyntRolesDatasource#custom_property8}
  */
  readonly customProperty8?: string;
  /**
  * Custom property 9 for additional metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#custom_property9 DataSaviyntRolesDatasource#custom_property9}
  */
  readonly customProperty9?: string;
  /**
  * Filter roles by description. When specified, returns only roles that match this description text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#description DataSaviyntRolesDatasource#description}
  */
  readonly description?: string;
  /**
  * Filter roles by display name. When specified, returns only roles that match this display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#display_name DataSaviyntRolesDatasource#display_name}
  */
  readonly displayName?: string;
  /**
  * Filter roles by glossary information. When specified, returns only roles that match this glossary text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#glossary DataSaviyntRolesDatasource#glossary}
  */
  readonly glossary?: string;
  /**
  * Hide blank values (e.g., true or false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#hide_blank_values DataSaviyntRolesDatasource#hide_blank_values}
  */
  readonly hideBlankValues?: string;
  /**
  * Filter roles by hierarchy level. When specified, returns only roles with this hierarchy level in the organizational structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#level DataSaviyntRolesDatasource#level}
  */
  readonly level?: string;
  /**
  * Maximum number of records to return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#max DataSaviyntRolesDatasource#max}
  */
  readonly max?: string;
  /**
  * Filter roles by mining instance name. When specified, returns only roles associated with this mining instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#mining_instance DataSaviyntRolesDatasource#mining_instance}
  */
  readonly miningInstance?: string;
  /**
  * Offset for pagination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#offset DataSaviyntRolesDatasource#offset}
  */
  readonly offset?: string;
  /**
  * Filter roles by privileged criticality. Valid values: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'. When specified, returns only roles with this privileged criticality level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#privileged DataSaviyntRolesDatasource#privileged}
  */
  readonly privileged?: string;
  /**
  * Filter roles by requestable status. Valid values: 'true' (show only requestable roles), 'false' (show only non-requestable roles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#requestable DataSaviyntRolesDatasource#requestable}
  */
  readonly requestable?: string;
  /**
  * Request body parameter that contains users and/or entitlement_values. Use comma-separated values like 'entitlement' to specify what objects to include in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#requested_object DataSaviyntRolesDatasource#requested_object}
  */
  readonly requestedObject?: string;
  /**
  * Filter roles by risk level. Valid values: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'. When specified, returns only roles with this risk level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#risk DataSaviyntRolesDatasource#risk}
  */
  readonly risk?: string;
  /**
  * Filter roles by role name. When specified, returns only roles that match this exact role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#role_name DataSaviyntRolesDatasource#role_name}
  */
  readonly roleName?: string;
  /**
  * SQL-like query to filter roles (e.g., 'r.role_name = 'Admin'')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#role_query DataSaviyntRolesDatasource#role_query}
  */
  readonly roleQuery?: string;
  /**
  * Filter roles by type. Valid values: 'ENABLER', 'TRANSACTIONAL', 'FIREFIGHTER', 'ENTERPRISE', 'APPLICATION', 'ENTITLEMENT'. Use the human-readable names to filter results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#role_type DataSaviyntRolesDatasource#role_type}
  */
  readonly roleType?: string;
  /**
  * Filter roles by SOX criticality. Valid values: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'. When specified, returns only roles with this SOX criticality level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#sox_critical DataSaviyntRolesDatasource#sox_critical}
  */
  readonly soxCritical?: string;
  /**
  * Filter roles by status. Valid values: 'Active', 'Inactive'. Use string values to filter results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#status DataSaviyntRolesDatasource#status}
  */
  readonly status?: string;
  /**
  * Filter roles by SYS criticality. Valid values: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'. When specified, returns only roles with this SYS criticality level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#sys_critical DataSaviyntRolesDatasource#sys_critical}
  */
  readonly sysCritical?: string;
  /**
  * Filter roles by system ID. When specified, returns only roles associated with this system identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#system_id DataSaviyntRolesDatasource#system_id}
  */
  readonly systemId?: string;
  /**
  * Filter roles by the user ID who last updated the role. When specified, returns only roles last modified by this user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#update_user DataSaviyntRolesDatasource#update_user}
  */
  readonly updateUser?: string;
  /**
  * Filter roles by username. When specified, returns only roles associated with this specific user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#username DataSaviyntRolesDatasource#username}
  */
  readonly username?: string;
}
export interface DataSaviyntRolesDatasourceRoledetailsEntitlementDetails {
}

export function dataSaviyntRolesDatasourceRoledetailsEntitlementDetailsToTerraform(struct?: DataSaviyntRolesDatasourceRoledetailsEntitlementDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntRolesDatasourceRoledetailsEntitlementDetailsToHclTerraform(struct?: DataSaviyntRolesDatasourceRoledetailsEntitlementDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntRolesDatasourceRoledetailsEntitlementDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSaviyntRolesDatasourceRoledetailsEntitlementDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntRolesDatasourceRoledetailsEntitlementDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // entitlement_type_name - computed: true, optional: false, required: false
  public get entitlementTypeName() {
    return this.getStringAttribute('entitlement_type_name');
  }

  // entitlement_value - computed: true, optional: false, required: false
  public get entitlementValue() {
    return this.getStringAttribute('entitlement_value');
  }
}

export class DataSaviyntRolesDatasourceRoledetailsEntitlementDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntRolesDatasourceRoledetailsEntitlementDetailsOutputReference {
    return new DataSaviyntRolesDatasourceRoledetailsEntitlementDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSaviyntRolesDatasourceRoledetailsOwners {
}

export function dataSaviyntRolesDatasourceRoledetailsOwnersToTerraform(struct?: DataSaviyntRolesDatasourceRoledetailsOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntRolesDatasourceRoledetailsOwnersToHclTerraform(struct?: DataSaviyntRolesDatasourceRoledetailsOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntRolesDatasourceRoledetailsOwnersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSaviyntRolesDatasourceRoledetailsOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntRolesDatasourceRoledetailsOwners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner_name - computed: true, optional: false, required: false
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getStringAttribute('rank');
  }
}

export class DataSaviyntRolesDatasourceRoledetailsOwnersList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntRolesDatasourceRoledetailsOwnersOutputReference {
    return new DataSaviyntRolesDatasourceRoledetailsOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSaviyntRolesDatasourceRoledetailsUserDetails {
}

export function dataSaviyntRolesDatasourceRoledetailsUserDetailsToTerraform(struct?: DataSaviyntRolesDatasourceRoledetailsUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntRolesDatasourceRoledetailsUserDetailsToHclTerraform(struct?: DataSaviyntRolesDatasourceRoledetailsUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntRolesDatasourceRoledetailsUserDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSaviyntRolesDatasourceRoledetailsUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntRolesDatasourceRoledetailsUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataSaviyntRolesDatasourceRoledetailsUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntRolesDatasourceRoledetailsUserDetailsOutputReference {
    return new DataSaviyntRolesDatasourceRoledetailsUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSaviyntRolesDatasourceRoledetails {
}

export function dataSaviyntRolesDatasourceRoledetailsToTerraform(struct?: DataSaviyntRolesDatasourceRoledetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntRolesDatasourceRoledetailsToHclTerraform(struct?: DataSaviyntRolesDatasourceRoledetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntRolesDatasourceRoledetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSaviyntRolesDatasourceRoledetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntRolesDatasourceRoledetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidentiality - computed: true, optional: false, required: false
  public get confidentiality() {
    return this.getStringAttribute('confidentiality');
  }

  // custom_property1 - computed: true, optional: false, required: false
  public get customProperty1() {
    return this.getStringAttribute('custom_property1');
  }

  // custom_property10 - computed: true, optional: false, required: false
  public get customProperty10() {
    return this.getStringAttribute('custom_property10');
  }

  // custom_property11 - computed: true, optional: false, required: false
  public get customProperty11() {
    return this.getStringAttribute('custom_property11');
  }

  // custom_property12 - computed: true, optional: false, required: false
  public get customProperty12() {
    return this.getStringAttribute('custom_property12');
  }

  // custom_property13 - computed: true, optional: false, required: false
  public get customProperty13() {
    return this.getStringAttribute('custom_property13');
  }

  // custom_property14 - computed: true, optional: false, required: false
  public get customProperty14() {
    return this.getStringAttribute('custom_property14');
  }

  // custom_property15 - computed: true, optional: false, required: false
  public get customProperty15() {
    return this.getStringAttribute('custom_property15');
  }

  // custom_property16 - computed: true, optional: false, required: false
  public get customProperty16() {
    return this.getStringAttribute('custom_property16');
  }

  // custom_property17 - computed: true, optional: false, required: false
  public get customProperty17() {
    return this.getStringAttribute('custom_property17');
  }

  // custom_property18 - computed: true, optional: false, required: false
  public get customProperty18() {
    return this.getStringAttribute('custom_property18');
  }

  // custom_property19 - computed: true, optional: false, required: false
  public get customProperty19() {
    return this.getStringAttribute('custom_property19');
  }

  // custom_property2 - computed: true, optional: false, required: false
  public get customProperty2() {
    return this.getStringAttribute('custom_property2');
  }

  // custom_property20 - computed: true, optional: false, required: false
  public get customProperty20() {
    return this.getStringAttribute('custom_property20');
  }

  // custom_property21 - computed: true, optional: false, required: false
  public get customProperty21() {
    return this.getStringAttribute('custom_property21');
  }

  // custom_property22 - computed: true, optional: false, required: false
  public get customProperty22() {
    return this.getStringAttribute('custom_property22');
  }

  // custom_property23 - computed: true, optional: false, required: false
  public get customProperty23() {
    return this.getStringAttribute('custom_property23');
  }

  // custom_property24 - computed: true, optional: false, required: false
  public get customProperty24() {
    return this.getStringAttribute('custom_property24');
  }

  // custom_property25 - computed: true, optional: false, required: false
  public get customProperty25() {
    return this.getStringAttribute('custom_property25');
  }

  // custom_property26 - computed: true, optional: false, required: false
  public get customProperty26() {
    return this.getStringAttribute('custom_property26');
  }

  // custom_property27 - computed: true, optional: false, required: false
  public get customProperty27() {
    return this.getStringAttribute('custom_property27');
  }

  // custom_property28 - computed: true, optional: false, required: false
  public get customProperty28() {
    return this.getStringAttribute('custom_property28');
  }

  // custom_property29 - computed: true, optional: false, required: false
  public get customProperty29() {
    return this.getStringAttribute('custom_property29');
  }

  // custom_property3 - computed: true, optional: false, required: false
  public get customProperty3() {
    return this.getStringAttribute('custom_property3');
  }

  // custom_property30 - computed: true, optional: false, required: false
  public get customProperty30() {
    return this.getStringAttribute('custom_property30');
  }

  // custom_property31 - computed: true, optional: false, required: false
  public get customProperty31() {
    return this.getStringAttribute('custom_property31');
  }

  // custom_property32 - computed: true, optional: false, required: false
  public get customProperty32() {
    return this.getStringAttribute('custom_property32');
  }

  // custom_property33 - computed: true, optional: false, required: false
  public get customProperty33() {
    return this.getStringAttribute('custom_property33');
  }

  // custom_property34 - computed: true, optional: false, required: false
  public get customProperty34() {
    return this.getStringAttribute('custom_property34');
  }

  // custom_property35 - computed: true, optional: false, required: false
  public get customProperty35() {
    return this.getStringAttribute('custom_property35');
  }

  // custom_property36 - computed: true, optional: false, required: false
  public get customProperty36() {
    return this.getStringAttribute('custom_property36');
  }

  // custom_property37 - computed: true, optional: false, required: false
  public get customProperty37() {
    return this.getStringAttribute('custom_property37');
  }

  // custom_property38 - computed: true, optional: false, required: false
  public get customProperty38() {
    return this.getStringAttribute('custom_property38');
  }

  // custom_property39 - computed: true, optional: false, required: false
  public get customProperty39() {
    return this.getStringAttribute('custom_property39');
  }

  // custom_property4 - computed: true, optional: false, required: false
  public get customProperty4() {
    return this.getStringAttribute('custom_property4');
  }

  // custom_property40 - computed: true, optional: false, required: false
  public get customProperty40() {
    return this.getStringAttribute('custom_property40');
  }

  // custom_property41 - computed: true, optional: false, required: false
  public get customProperty41() {
    return this.getStringAttribute('custom_property41');
  }

  // custom_property42 - computed: true, optional: false, required: false
  public get customProperty42() {
    return this.getStringAttribute('custom_property42');
  }

  // custom_property43 - computed: true, optional: false, required: false
  public get customProperty43() {
    return this.getStringAttribute('custom_property43');
  }

  // custom_property44 - computed: true, optional: false, required: false
  public get customProperty44() {
    return this.getStringAttribute('custom_property44');
  }

  // custom_property45 - computed: true, optional: false, required: false
  public get customProperty45() {
    return this.getStringAttribute('custom_property45');
  }

  // custom_property46 - computed: true, optional: false, required: false
  public get customProperty46() {
    return this.getStringAttribute('custom_property46');
  }

  // custom_property47 - computed: true, optional: false, required: false
  public get customProperty47() {
    return this.getStringAttribute('custom_property47');
  }

  // custom_property48 - computed: true, optional: false, required: false
  public get customProperty48() {
    return this.getStringAttribute('custom_property48');
  }

  // custom_property49 - computed: true, optional: false, required: false
  public get customProperty49() {
    return this.getStringAttribute('custom_property49');
  }

  // custom_property5 - computed: true, optional: false, required: false
  public get customProperty5() {
    return this.getStringAttribute('custom_property5');
  }

  // custom_property50 - computed: true, optional: false, required: false
  public get customProperty50() {
    return this.getStringAttribute('custom_property50');
  }

  // custom_property51 - computed: true, optional: false, required: false
  public get customProperty51() {
    return this.getStringAttribute('custom_property51');
  }

  // custom_property52 - computed: true, optional: false, required: false
  public get customProperty52() {
    return this.getStringAttribute('custom_property52');
  }

  // custom_property53 - computed: true, optional: false, required: false
  public get customProperty53() {
    return this.getStringAttribute('custom_property53');
  }

  // custom_property54 - computed: true, optional: false, required: false
  public get customProperty54() {
    return this.getStringAttribute('custom_property54');
  }

  // custom_property55 - computed: true, optional: false, required: false
  public get customProperty55() {
    return this.getStringAttribute('custom_property55');
  }

  // custom_property56 - computed: true, optional: false, required: false
  public get customProperty56() {
    return this.getStringAttribute('custom_property56');
  }

  // custom_property57 - computed: true, optional: false, required: false
  public get customProperty57() {
    return this.getStringAttribute('custom_property57');
  }

  // custom_property58 - computed: true, optional: false, required: false
  public get customProperty58() {
    return this.getStringAttribute('custom_property58');
  }

  // custom_property59 - computed: true, optional: false, required: false
  public get customProperty59() {
    return this.getStringAttribute('custom_property59');
  }

  // custom_property6 - computed: true, optional: false, required: false
  public get customProperty6() {
    return this.getStringAttribute('custom_property6');
  }

  // custom_property60 - computed: true, optional: false, required: false
  public get customProperty60() {
    return this.getStringAttribute('custom_property60');
  }

  // custom_property7 - computed: true, optional: false, required: false
  public get customProperty7() {
    return this.getStringAttribute('custom_property7');
  }

  // custom_property8 - computed: true, optional: false, required: false
  public get customProperty8() {
    return this.getStringAttribute('custom_property8');
  }

  // custom_property9 - computed: true, optional: false, required: false
  public get customProperty9() {
    return this.getStringAttribute('custom_property9');
  }

  // default_time_frame_hrs - computed: true, optional: false, required: false
  public get defaultTimeFrameHrs() {
    return this.getStringAttribute('default_time_frame_hrs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoint_key - computed: true, optional: false, required: false
  public get endpointKey() {
    return this.getStringAttribute('endpoint_key');
  }

  // entitlement_details - computed: true, optional: false, required: false
  private _entitlementDetails = new DataSaviyntRolesDatasourceRoledetailsEntitlementDetailsList(this, "entitlement_details", false);
  public get entitlementDetails() {
    return this._entitlementDetails;
  }

  // entitlement_value_key - computed: true, optional: false, required: false
  public get entitlementValueKey() {
    return this.getStringAttribute('entitlement_value_key');
  }

  // glossary - computed: true, optional: false, required: false
  public get glossary() {
    return this.getStringAttribute('glossary');
  }

  // last_reviewed_by - computed: true, optional: false, required: false
  public get lastReviewedBy() {
    return this.getStringAttribute('last_reviewed_by');
  }

  // last_reviewed_campaign_name - computed: true, optional: false, required: false
  public get lastReviewedCampaignName() {
    return this.getStringAttribute('last_reviewed_campaign_name');
  }

  // max_time_frame_hrs - computed: true, optional: false, required: false
  public get maxTimeFrameHrs() {
    return this.getStringAttribute('max_time_frame_hrs');
  }

  // owners - computed: true, optional: false, required: false
  private _owners = new DataSaviyntRolesDatasourceRoledetailsOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getStringAttribute('privileged');
  }

  // requestable - computed: true, optional: false, required: false
  public get requestable() {
    return this.getStringAttribute('requestable');
  }

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // role_key - computed: true, optional: false, required: false
  public get roleKey() {
    return this.getNumberAttribute('role_key');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // role_state - computed: true, optional: false, required: false
  public get roleState() {
    return this.getStringAttribute('role_state');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }

  // show_dynamic_attrs - computed: true, optional: false, required: false
  public get showDynamicAttrs() {
    return this.getStringAttribute('show_dynamic_attrs');
  }

  // sox_critical - computed: true, optional: false, required: false
  public get soxCritical() {
    return this.getStringAttribute('sox_critical');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sys_critical - computed: true, optional: false, required: false
  public get sysCritical() {
    return this.getStringAttribute('sys_critical');
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }

  // update_user - computed: true, optional: false, required: false
  public get updateUser() {
    return this.getStringAttribute('update_user');
  }

  // user_details - computed: true, optional: false, required: false
  private _userDetails = new DataSaviyntRolesDatasourceRoledetailsUserDetailsList(this, "user_details", false);
  public get userDetails() {
    return this._userDetails;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataSaviyntRolesDatasourceRoledetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntRolesDatasourceRoledetailsOutputReference {
    return new DataSaviyntRolesDatasourceRoledetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource saviynt_roles_datasource}
*/
export class DataSaviyntRolesDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_roles_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntRolesDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntRolesDatasource to import
  * @param importFromId The id of the existing DataSaviyntRolesDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntRolesDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_roles_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/roles_datasource saviynt_roles_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntRolesDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntRolesDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_roles_datasource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticate = config.authenticate;
    this._confidentiality = config.confidentiality;
    this._customProperty1 = config.customProperty1;
    this._customProperty10 = config.customProperty10;
    this._customProperty11 = config.customProperty11;
    this._customProperty12 = config.customProperty12;
    this._customProperty13 = config.customProperty13;
    this._customProperty14 = config.customProperty14;
    this._customProperty15 = config.customProperty15;
    this._customProperty16 = config.customProperty16;
    this._customProperty17 = config.customProperty17;
    this._customProperty18 = config.customProperty18;
    this._customProperty19 = config.customProperty19;
    this._customProperty2 = config.customProperty2;
    this._customProperty20 = config.customProperty20;
    this._customProperty21 = config.customProperty21;
    this._customProperty22 = config.customProperty22;
    this._customProperty23 = config.customProperty23;
    this._customProperty24 = config.customProperty24;
    this._customProperty25 = config.customProperty25;
    this._customProperty26 = config.customProperty26;
    this._customProperty27 = config.customProperty27;
    this._customProperty28 = config.customProperty28;
    this._customProperty29 = config.customProperty29;
    this._customProperty3 = config.customProperty3;
    this._customProperty30 = config.customProperty30;
    this._customProperty31 = config.customProperty31;
    this._customProperty32 = config.customProperty32;
    this._customProperty33 = config.customProperty33;
    this._customProperty34 = config.customProperty34;
    this._customProperty35 = config.customProperty35;
    this._customProperty36 = config.customProperty36;
    this._customProperty37 = config.customProperty37;
    this._customProperty38 = config.customProperty38;
    this._customProperty39 = config.customProperty39;
    this._customProperty4 = config.customProperty4;
    this._customProperty40 = config.customProperty40;
    this._customProperty41 = config.customProperty41;
    this._customProperty42 = config.customProperty42;
    this._customProperty43 = config.customProperty43;
    this._customProperty44 = config.customProperty44;
    this._customProperty45 = config.customProperty45;
    this._customProperty46 = config.customProperty46;
    this._customProperty47 = config.customProperty47;
    this._customProperty48 = config.customProperty48;
    this._customProperty49 = config.customProperty49;
    this._customProperty5 = config.customProperty5;
    this._customProperty50 = config.customProperty50;
    this._customProperty51 = config.customProperty51;
    this._customProperty52 = config.customProperty52;
    this._customProperty53 = config.customProperty53;
    this._customProperty54 = config.customProperty54;
    this._customProperty55 = config.customProperty55;
    this._customProperty56 = config.customProperty56;
    this._customProperty57 = config.customProperty57;
    this._customProperty58 = config.customProperty58;
    this._customProperty59 = config.customProperty59;
    this._customProperty6 = config.customProperty6;
    this._customProperty60 = config.customProperty60;
    this._customProperty7 = config.customProperty7;
    this._customProperty8 = config.customProperty8;
    this._customProperty9 = config.customProperty9;
    this._description = config.description;
    this._displayName = config.displayName;
    this._glossary = config.glossary;
    this._hideBlankValues = config.hideBlankValues;
    this._level = config.level;
    this._max = config.max;
    this._miningInstance = config.miningInstance;
    this._offset = config.offset;
    this._privileged = config.privileged;
    this._requestable = config.requestable;
    this._requestedObject = config.requestedObject;
    this._risk = config.risk;
    this._roleName = config.roleName;
    this._roleQuery = config.roleQuery;
    this._roleType = config.roleType;
    this._soxCritical = config.soxCritical;
    this._status = config.status;
    this._sysCritical = config.sysCritical;
    this._systemId = config.systemId;
    this._updateUser = config.updateUser;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticate - computed: false, optional: false, required: true
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // confidentiality - computed: false, optional: true, required: false
  private _confidentiality?: string; 
  public get confidentiality() {
    return this.getStringAttribute('confidentiality');
  }
  public set confidentiality(value: string) {
    this._confidentiality = value;
  }
  public resetConfidentiality() {
    this._confidentiality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialityInput() {
    return this._confidentiality;
  }

  // custom_property1 - computed: false, optional: true, required: false
  private _customProperty1?: string; 
  public get customProperty1() {
    return this.getStringAttribute('custom_property1');
  }
  public set customProperty1(value: string) {
    this._customProperty1 = value;
  }
  public resetCustomProperty1() {
    this._customProperty1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty1Input() {
    return this._customProperty1;
  }

  // custom_property10 - computed: false, optional: true, required: false
  private _customProperty10?: string; 
  public get customProperty10() {
    return this.getStringAttribute('custom_property10');
  }
  public set customProperty10(value: string) {
    this._customProperty10 = value;
  }
  public resetCustomProperty10() {
    this._customProperty10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty10Input() {
    return this._customProperty10;
  }

  // custom_property11 - computed: false, optional: true, required: false
  private _customProperty11?: string; 
  public get customProperty11() {
    return this.getStringAttribute('custom_property11');
  }
  public set customProperty11(value: string) {
    this._customProperty11 = value;
  }
  public resetCustomProperty11() {
    this._customProperty11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty11Input() {
    return this._customProperty11;
  }

  // custom_property12 - computed: false, optional: true, required: false
  private _customProperty12?: string; 
  public get customProperty12() {
    return this.getStringAttribute('custom_property12');
  }
  public set customProperty12(value: string) {
    this._customProperty12 = value;
  }
  public resetCustomProperty12() {
    this._customProperty12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty12Input() {
    return this._customProperty12;
  }

  // custom_property13 - computed: false, optional: true, required: false
  private _customProperty13?: string; 
  public get customProperty13() {
    return this.getStringAttribute('custom_property13');
  }
  public set customProperty13(value: string) {
    this._customProperty13 = value;
  }
  public resetCustomProperty13() {
    this._customProperty13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty13Input() {
    return this._customProperty13;
  }

  // custom_property14 - computed: false, optional: true, required: false
  private _customProperty14?: string; 
  public get customProperty14() {
    return this.getStringAttribute('custom_property14');
  }
  public set customProperty14(value: string) {
    this._customProperty14 = value;
  }
  public resetCustomProperty14() {
    this._customProperty14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty14Input() {
    return this._customProperty14;
  }

  // custom_property15 - computed: false, optional: true, required: false
  private _customProperty15?: string; 
  public get customProperty15() {
    return this.getStringAttribute('custom_property15');
  }
  public set customProperty15(value: string) {
    this._customProperty15 = value;
  }
  public resetCustomProperty15() {
    this._customProperty15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty15Input() {
    return this._customProperty15;
  }

  // custom_property16 - computed: false, optional: true, required: false
  private _customProperty16?: string; 
  public get customProperty16() {
    return this.getStringAttribute('custom_property16');
  }
  public set customProperty16(value: string) {
    this._customProperty16 = value;
  }
  public resetCustomProperty16() {
    this._customProperty16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty16Input() {
    return this._customProperty16;
  }

  // custom_property17 - computed: false, optional: true, required: false
  private _customProperty17?: string; 
  public get customProperty17() {
    return this.getStringAttribute('custom_property17');
  }
  public set customProperty17(value: string) {
    this._customProperty17 = value;
  }
  public resetCustomProperty17() {
    this._customProperty17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty17Input() {
    return this._customProperty17;
  }

  // custom_property18 - computed: false, optional: true, required: false
  private _customProperty18?: string; 
  public get customProperty18() {
    return this.getStringAttribute('custom_property18');
  }
  public set customProperty18(value: string) {
    this._customProperty18 = value;
  }
  public resetCustomProperty18() {
    this._customProperty18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty18Input() {
    return this._customProperty18;
  }

  // custom_property19 - computed: false, optional: true, required: false
  private _customProperty19?: string; 
  public get customProperty19() {
    return this.getStringAttribute('custom_property19');
  }
  public set customProperty19(value: string) {
    this._customProperty19 = value;
  }
  public resetCustomProperty19() {
    this._customProperty19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty19Input() {
    return this._customProperty19;
  }

  // custom_property2 - computed: false, optional: true, required: false
  private _customProperty2?: string; 
  public get customProperty2() {
    return this.getStringAttribute('custom_property2');
  }
  public set customProperty2(value: string) {
    this._customProperty2 = value;
  }
  public resetCustomProperty2() {
    this._customProperty2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty2Input() {
    return this._customProperty2;
  }

  // custom_property20 - computed: false, optional: true, required: false
  private _customProperty20?: string; 
  public get customProperty20() {
    return this.getStringAttribute('custom_property20');
  }
  public set customProperty20(value: string) {
    this._customProperty20 = value;
  }
  public resetCustomProperty20() {
    this._customProperty20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty20Input() {
    return this._customProperty20;
  }

  // custom_property21 - computed: false, optional: true, required: false
  private _customProperty21?: string; 
  public get customProperty21() {
    return this.getStringAttribute('custom_property21');
  }
  public set customProperty21(value: string) {
    this._customProperty21 = value;
  }
  public resetCustomProperty21() {
    this._customProperty21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty21Input() {
    return this._customProperty21;
  }

  // custom_property22 - computed: false, optional: true, required: false
  private _customProperty22?: string; 
  public get customProperty22() {
    return this.getStringAttribute('custom_property22');
  }
  public set customProperty22(value: string) {
    this._customProperty22 = value;
  }
  public resetCustomProperty22() {
    this._customProperty22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty22Input() {
    return this._customProperty22;
  }

  // custom_property23 - computed: false, optional: true, required: false
  private _customProperty23?: string; 
  public get customProperty23() {
    return this.getStringAttribute('custom_property23');
  }
  public set customProperty23(value: string) {
    this._customProperty23 = value;
  }
  public resetCustomProperty23() {
    this._customProperty23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty23Input() {
    return this._customProperty23;
  }

  // custom_property24 - computed: false, optional: true, required: false
  private _customProperty24?: string; 
  public get customProperty24() {
    return this.getStringAttribute('custom_property24');
  }
  public set customProperty24(value: string) {
    this._customProperty24 = value;
  }
  public resetCustomProperty24() {
    this._customProperty24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty24Input() {
    return this._customProperty24;
  }

  // custom_property25 - computed: false, optional: true, required: false
  private _customProperty25?: string; 
  public get customProperty25() {
    return this.getStringAttribute('custom_property25');
  }
  public set customProperty25(value: string) {
    this._customProperty25 = value;
  }
  public resetCustomProperty25() {
    this._customProperty25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty25Input() {
    return this._customProperty25;
  }

  // custom_property26 - computed: false, optional: true, required: false
  private _customProperty26?: string; 
  public get customProperty26() {
    return this.getStringAttribute('custom_property26');
  }
  public set customProperty26(value: string) {
    this._customProperty26 = value;
  }
  public resetCustomProperty26() {
    this._customProperty26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty26Input() {
    return this._customProperty26;
  }

  // custom_property27 - computed: false, optional: true, required: false
  private _customProperty27?: string; 
  public get customProperty27() {
    return this.getStringAttribute('custom_property27');
  }
  public set customProperty27(value: string) {
    this._customProperty27 = value;
  }
  public resetCustomProperty27() {
    this._customProperty27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty27Input() {
    return this._customProperty27;
  }

  // custom_property28 - computed: false, optional: true, required: false
  private _customProperty28?: string; 
  public get customProperty28() {
    return this.getStringAttribute('custom_property28');
  }
  public set customProperty28(value: string) {
    this._customProperty28 = value;
  }
  public resetCustomProperty28() {
    this._customProperty28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty28Input() {
    return this._customProperty28;
  }

  // custom_property29 - computed: false, optional: true, required: false
  private _customProperty29?: string; 
  public get customProperty29() {
    return this.getStringAttribute('custom_property29');
  }
  public set customProperty29(value: string) {
    this._customProperty29 = value;
  }
  public resetCustomProperty29() {
    this._customProperty29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty29Input() {
    return this._customProperty29;
  }

  // custom_property3 - computed: false, optional: true, required: false
  private _customProperty3?: string; 
  public get customProperty3() {
    return this.getStringAttribute('custom_property3');
  }
  public set customProperty3(value: string) {
    this._customProperty3 = value;
  }
  public resetCustomProperty3() {
    this._customProperty3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty3Input() {
    return this._customProperty3;
  }

  // custom_property30 - computed: false, optional: true, required: false
  private _customProperty30?: string; 
  public get customProperty30() {
    return this.getStringAttribute('custom_property30');
  }
  public set customProperty30(value: string) {
    this._customProperty30 = value;
  }
  public resetCustomProperty30() {
    this._customProperty30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty30Input() {
    return this._customProperty30;
  }

  // custom_property31 - computed: false, optional: true, required: false
  private _customProperty31?: string; 
  public get customProperty31() {
    return this.getStringAttribute('custom_property31');
  }
  public set customProperty31(value: string) {
    this._customProperty31 = value;
  }
  public resetCustomProperty31() {
    this._customProperty31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty31Input() {
    return this._customProperty31;
  }

  // custom_property32 - computed: false, optional: true, required: false
  private _customProperty32?: string; 
  public get customProperty32() {
    return this.getStringAttribute('custom_property32');
  }
  public set customProperty32(value: string) {
    this._customProperty32 = value;
  }
  public resetCustomProperty32() {
    this._customProperty32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty32Input() {
    return this._customProperty32;
  }

  // custom_property33 - computed: false, optional: true, required: false
  private _customProperty33?: string; 
  public get customProperty33() {
    return this.getStringAttribute('custom_property33');
  }
  public set customProperty33(value: string) {
    this._customProperty33 = value;
  }
  public resetCustomProperty33() {
    this._customProperty33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty33Input() {
    return this._customProperty33;
  }

  // custom_property34 - computed: false, optional: true, required: false
  private _customProperty34?: string; 
  public get customProperty34() {
    return this.getStringAttribute('custom_property34');
  }
  public set customProperty34(value: string) {
    this._customProperty34 = value;
  }
  public resetCustomProperty34() {
    this._customProperty34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty34Input() {
    return this._customProperty34;
  }

  // custom_property35 - computed: false, optional: true, required: false
  private _customProperty35?: string; 
  public get customProperty35() {
    return this.getStringAttribute('custom_property35');
  }
  public set customProperty35(value: string) {
    this._customProperty35 = value;
  }
  public resetCustomProperty35() {
    this._customProperty35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty35Input() {
    return this._customProperty35;
  }

  // custom_property36 - computed: false, optional: true, required: false
  private _customProperty36?: string; 
  public get customProperty36() {
    return this.getStringAttribute('custom_property36');
  }
  public set customProperty36(value: string) {
    this._customProperty36 = value;
  }
  public resetCustomProperty36() {
    this._customProperty36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty36Input() {
    return this._customProperty36;
  }

  // custom_property37 - computed: false, optional: true, required: false
  private _customProperty37?: string; 
  public get customProperty37() {
    return this.getStringAttribute('custom_property37');
  }
  public set customProperty37(value: string) {
    this._customProperty37 = value;
  }
  public resetCustomProperty37() {
    this._customProperty37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty37Input() {
    return this._customProperty37;
  }

  // custom_property38 - computed: false, optional: true, required: false
  private _customProperty38?: string; 
  public get customProperty38() {
    return this.getStringAttribute('custom_property38');
  }
  public set customProperty38(value: string) {
    this._customProperty38 = value;
  }
  public resetCustomProperty38() {
    this._customProperty38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty38Input() {
    return this._customProperty38;
  }

  // custom_property39 - computed: false, optional: true, required: false
  private _customProperty39?: string; 
  public get customProperty39() {
    return this.getStringAttribute('custom_property39');
  }
  public set customProperty39(value: string) {
    this._customProperty39 = value;
  }
  public resetCustomProperty39() {
    this._customProperty39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty39Input() {
    return this._customProperty39;
  }

  // custom_property4 - computed: false, optional: true, required: false
  private _customProperty4?: string; 
  public get customProperty4() {
    return this.getStringAttribute('custom_property4');
  }
  public set customProperty4(value: string) {
    this._customProperty4 = value;
  }
  public resetCustomProperty4() {
    this._customProperty4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty4Input() {
    return this._customProperty4;
  }

  // custom_property40 - computed: false, optional: true, required: false
  private _customProperty40?: string; 
  public get customProperty40() {
    return this.getStringAttribute('custom_property40');
  }
  public set customProperty40(value: string) {
    this._customProperty40 = value;
  }
  public resetCustomProperty40() {
    this._customProperty40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty40Input() {
    return this._customProperty40;
  }

  // custom_property41 - computed: false, optional: true, required: false
  private _customProperty41?: string; 
  public get customProperty41() {
    return this.getStringAttribute('custom_property41');
  }
  public set customProperty41(value: string) {
    this._customProperty41 = value;
  }
  public resetCustomProperty41() {
    this._customProperty41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty41Input() {
    return this._customProperty41;
  }

  // custom_property42 - computed: false, optional: true, required: false
  private _customProperty42?: string; 
  public get customProperty42() {
    return this.getStringAttribute('custom_property42');
  }
  public set customProperty42(value: string) {
    this._customProperty42 = value;
  }
  public resetCustomProperty42() {
    this._customProperty42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty42Input() {
    return this._customProperty42;
  }

  // custom_property43 - computed: false, optional: true, required: false
  private _customProperty43?: string; 
  public get customProperty43() {
    return this.getStringAttribute('custom_property43');
  }
  public set customProperty43(value: string) {
    this._customProperty43 = value;
  }
  public resetCustomProperty43() {
    this._customProperty43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty43Input() {
    return this._customProperty43;
  }

  // custom_property44 - computed: false, optional: true, required: false
  private _customProperty44?: string; 
  public get customProperty44() {
    return this.getStringAttribute('custom_property44');
  }
  public set customProperty44(value: string) {
    this._customProperty44 = value;
  }
  public resetCustomProperty44() {
    this._customProperty44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty44Input() {
    return this._customProperty44;
  }

  // custom_property45 - computed: false, optional: true, required: false
  private _customProperty45?: string; 
  public get customProperty45() {
    return this.getStringAttribute('custom_property45');
  }
  public set customProperty45(value: string) {
    this._customProperty45 = value;
  }
  public resetCustomProperty45() {
    this._customProperty45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty45Input() {
    return this._customProperty45;
  }

  // custom_property46 - computed: false, optional: true, required: false
  private _customProperty46?: string; 
  public get customProperty46() {
    return this.getStringAttribute('custom_property46');
  }
  public set customProperty46(value: string) {
    this._customProperty46 = value;
  }
  public resetCustomProperty46() {
    this._customProperty46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty46Input() {
    return this._customProperty46;
  }

  // custom_property47 - computed: false, optional: true, required: false
  private _customProperty47?: string; 
  public get customProperty47() {
    return this.getStringAttribute('custom_property47');
  }
  public set customProperty47(value: string) {
    this._customProperty47 = value;
  }
  public resetCustomProperty47() {
    this._customProperty47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty47Input() {
    return this._customProperty47;
  }

  // custom_property48 - computed: false, optional: true, required: false
  private _customProperty48?: string; 
  public get customProperty48() {
    return this.getStringAttribute('custom_property48');
  }
  public set customProperty48(value: string) {
    this._customProperty48 = value;
  }
  public resetCustomProperty48() {
    this._customProperty48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty48Input() {
    return this._customProperty48;
  }

  // custom_property49 - computed: false, optional: true, required: false
  private _customProperty49?: string; 
  public get customProperty49() {
    return this.getStringAttribute('custom_property49');
  }
  public set customProperty49(value: string) {
    this._customProperty49 = value;
  }
  public resetCustomProperty49() {
    this._customProperty49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty49Input() {
    return this._customProperty49;
  }

  // custom_property5 - computed: false, optional: true, required: false
  private _customProperty5?: string; 
  public get customProperty5() {
    return this.getStringAttribute('custom_property5');
  }
  public set customProperty5(value: string) {
    this._customProperty5 = value;
  }
  public resetCustomProperty5() {
    this._customProperty5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty5Input() {
    return this._customProperty5;
  }

  // custom_property50 - computed: false, optional: true, required: false
  private _customProperty50?: string; 
  public get customProperty50() {
    return this.getStringAttribute('custom_property50');
  }
  public set customProperty50(value: string) {
    this._customProperty50 = value;
  }
  public resetCustomProperty50() {
    this._customProperty50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty50Input() {
    return this._customProperty50;
  }

  // custom_property51 - computed: false, optional: true, required: false
  private _customProperty51?: string; 
  public get customProperty51() {
    return this.getStringAttribute('custom_property51');
  }
  public set customProperty51(value: string) {
    this._customProperty51 = value;
  }
  public resetCustomProperty51() {
    this._customProperty51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty51Input() {
    return this._customProperty51;
  }

  // custom_property52 - computed: false, optional: true, required: false
  private _customProperty52?: string; 
  public get customProperty52() {
    return this.getStringAttribute('custom_property52');
  }
  public set customProperty52(value: string) {
    this._customProperty52 = value;
  }
  public resetCustomProperty52() {
    this._customProperty52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty52Input() {
    return this._customProperty52;
  }

  // custom_property53 - computed: false, optional: true, required: false
  private _customProperty53?: string; 
  public get customProperty53() {
    return this.getStringAttribute('custom_property53');
  }
  public set customProperty53(value: string) {
    this._customProperty53 = value;
  }
  public resetCustomProperty53() {
    this._customProperty53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty53Input() {
    return this._customProperty53;
  }

  // custom_property54 - computed: false, optional: true, required: false
  private _customProperty54?: string; 
  public get customProperty54() {
    return this.getStringAttribute('custom_property54');
  }
  public set customProperty54(value: string) {
    this._customProperty54 = value;
  }
  public resetCustomProperty54() {
    this._customProperty54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty54Input() {
    return this._customProperty54;
  }

  // custom_property55 - computed: false, optional: true, required: false
  private _customProperty55?: string; 
  public get customProperty55() {
    return this.getStringAttribute('custom_property55');
  }
  public set customProperty55(value: string) {
    this._customProperty55 = value;
  }
  public resetCustomProperty55() {
    this._customProperty55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty55Input() {
    return this._customProperty55;
  }

  // custom_property56 - computed: false, optional: true, required: false
  private _customProperty56?: string; 
  public get customProperty56() {
    return this.getStringAttribute('custom_property56');
  }
  public set customProperty56(value: string) {
    this._customProperty56 = value;
  }
  public resetCustomProperty56() {
    this._customProperty56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty56Input() {
    return this._customProperty56;
  }

  // custom_property57 - computed: false, optional: true, required: false
  private _customProperty57?: string; 
  public get customProperty57() {
    return this.getStringAttribute('custom_property57');
  }
  public set customProperty57(value: string) {
    this._customProperty57 = value;
  }
  public resetCustomProperty57() {
    this._customProperty57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty57Input() {
    return this._customProperty57;
  }

  // custom_property58 - computed: false, optional: true, required: false
  private _customProperty58?: string; 
  public get customProperty58() {
    return this.getStringAttribute('custom_property58');
  }
  public set customProperty58(value: string) {
    this._customProperty58 = value;
  }
  public resetCustomProperty58() {
    this._customProperty58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty58Input() {
    return this._customProperty58;
  }

  // custom_property59 - computed: false, optional: true, required: false
  private _customProperty59?: string; 
  public get customProperty59() {
    return this.getStringAttribute('custom_property59');
  }
  public set customProperty59(value: string) {
    this._customProperty59 = value;
  }
  public resetCustomProperty59() {
    this._customProperty59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty59Input() {
    return this._customProperty59;
  }

  // custom_property6 - computed: false, optional: true, required: false
  private _customProperty6?: string; 
  public get customProperty6() {
    return this.getStringAttribute('custom_property6');
  }
  public set customProperty6(value: string) {
    this._customProperty6 = value;
  }
  public resetCustomProperty6() {
    this._customProperty6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty6Input() {
    return this._customProperty6;
  }

  // custom_property60 - computed: false, optional: true, required: false
  private _customProperty60?: string; 
  public get customProperty60() {
    return this.getStringAttribute('custom_property60');
  }
  public set customProperty60(value: string) {
    this._customProperty60 = value;
  }
  public resetCustomProperty60() {
    this._customProperty60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty60Input() {
    return this._customProperty60;
  }

  // custom_property7 - computed: false, optional: true, required: false
  private _customProperty7?: string; 
  public get customProperty7() {
    return this.getStringAttribute('custom_property7');
  }
  public set customProperty7(value: string) {
    this._customProperty7 = value;
  }
  public resetCustomProperty7() {
    this._customProperty7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty7Input() {
    return this._customProperty7;
  }

  // custom_property8 - computed: false, optional: true, required: false
  private _customProperty8?: string; 
  public get customProperty8() {
    return this.getStringAttribute('custom_property8');
  }
  public set customProperty8(value: string) {
    this._customProperty8 = value;
  }
  public resetCustomProperty8() {
    this._customProperty8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty8Input() {
    return this._customProperty8;
  }

  // custom_property9 - computed: false, optional: true, required: false
  private _customProperty9?: string; 
  public get customProperty9() {
    return this.getStringAttribute('custom_property9');
  }
  public set customProperty9(value: string) {
    this._customProperty9 = value;
  }
  public resetCustomProperty9() {
    this._customProperty9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty9Input() {
    return this._customProperty9;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_count - computed: true, optional: false, required: false
  public get displayCount() {
    return this.getNumberAttribute('display_count');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // glossary - computed: false, optional: true, required: false
  private _glossary?: string; 
  public get glossary() {
    return this.getStringAttribute('glossary');
  }
  public set glossary(value: string) {
    this._glossary = value;
  }
  public resetGlossary() {
    this._glossary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryInput() {
    return this._glossary;
  }

  // hide_blank_values - computed: false, optional: true, required: false
  private _hideBlankValues?: string; 
  public get hideBlankValues() {
    return this.getStringAttribute('hide_blank_values');
  }
  public set hideBlankValues(value: string) {
    this._hideBlankValues = value;
  }
  public resetHideBlankValues() {
    this._hideBlankValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideBlankValuesInput() {
    return this._hideBlankValues;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // mining_instance - computed: false, optional: true, required: false
  private _miningInstance?: string; 
  public get miningInstance() {
    return this.getStringAttribute('mining_instance');
  }
  public set miningInstance(value: string) {
    this._miningInstance = value;
  }
  public resetMiningInstance() {
    this._miningInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miningInstanceInput() {
    return this._miningInstance;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: string; 
  public get privileged() {
    return this.getStringAttribute('privileged');
  }
  public set privileged(value: string) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // requestable - computed: false, optional: true, required: false
  private _requestable?: string; 
  public get requestable() {
    return this.getStringAttribute('requestable');
  }
  public set requestable(value: string) {
    this._requestable = value;
  }
  public resetRequestable() {
    this._requestable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableInput() {
    return this._requestable;
  }

  // requested_object - computed: false, optional: true, required: false
  private _requestedObject?: string; 
  public get requestedObject() {
    return this.getStringAttribute('requested_object');
  }
  public set requestedObject(value: string) {
    this._requestedObject = value;
  }
  public resetRequestedObject() {
    this._requestedObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedObjectInput() {
    return this._requestedObject;
  }

  // risk - computed: false, optional: true, required: false
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_query - computed: false, optional: true, required: false
  private _roleQuery?: string; 
  public get roleQuery() {
    return this.getStringAttribute('role_query');
  }
  public set roleQuery(value: string) {
    this._roleQuery = value;
  }
  public resetRoleQuery() {
    this._roleQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleQueryInput() {
    return this._roleQuery;
  }

  // role_type - computed: false, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // roledetails - computed: true, optional: false, required: false
  private _roledetails = new DataSaviyntRolesDatasourceRoledetailsList(this, "roledetails", false);
  public get roledetails() {
    return this._roledetails;
  }

  // sox_critical - computed: false, optional: true, required: false
  private _soxCritical?: string; 
  public get soxCritical() {
    return this.getStringAttribute('sox_critical');
  }
  public set soxCritical(value: string) {
    this._soxCritical = value;
  }
  public resetSoxCritical() {
    this._soxCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soxCriticalInput() {
    return this._soxCritical;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sys_critical - computed: false, optional: true, required: false
  private _sysCritical?: string; 
  public get sysCritical() {
    return this.getStringAttribute('sys_critical');
  }
  public set sysCritical(value: string) {
    this._sysCritical = value;
  }
  public resetSysCritical() {
    this._sysCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysCriticalInput() {
    return this._sysCritical;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // update_user - computed: false, optional: true, required: false
  private _updateUser?: string; 
  public get updateUser() {
    return this.getStringAttribute('update_user');
  }
  public set updateUser(value: string) {
    this._updateUser = value;
  }
  public resetUpdateUser() {
    this._updateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserInput() {
    return this._updateUser;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      confidentiality: cdktf.stringToTerraform(this._confidentiality),
      custom_property1: cdktf.stringToTerraform(this._customProperty1),
      custom_property10: cdktf.stringToTerraform(this._customProperty10),
      custom_property11: cdktf.stringToTerraform(this._customProperty11),
      custom_property12: cdktf.stringToTerraform(this._customProperty12),
      custom_property13: cdktf.stringToTerraform(this._customProperty13),
      custom_property14: cdktf.stringToTerraform(this._customProperty14),
      custom_property15: cdktf.stringToTerraform(this._customProperty15),
      custom_property16: cdktf.stringToTerraform(this._customProperty16),
      custom_property17: cdktf.stringToTerraform(this._customProperty17),
      custom_property18: cdktf.stringToTerraform(this._customProperty18),
      custom_property19: cdktf.stringToTerraform(this._customProperty19),
      custom_property2: cdktf.stringToTerraform(this._customProperty2),
      custom_property20: cdktf.stringToTerraform(this._customProperty20),
      custom_property21: cdktf.stringToTerraform(this._customProperty21),
      custom_property22: cdktf.stringToTerraform(this._customProperty22),
      custom_property23: cdktf.stringToTerraform(this._customProperty23),
      custom_property24: cdktf.stringToTerraform(this._customProperty24),
      custom_property25: cdktf.stringToTerraform(this._customProperty25),
      custom_property26: cdktf.stringToTerraform(this._customProperty26),
      custom_property27: cdktf.stringToTerraform(this._customProperty27),
      custom_property28: cdktf.stringToTerraform(this._customProperty28),
      custom_property29: cdktf.stringToTerraform(this._customProperty29),
      custom_property3: cdktf.stringToTerraform(this._customProperty3),
      custom_property30: cdktf.stringToTerraform(this._customProperty30),
      custom_property31: cdktf.stringToTerraform(this._customProperty31),
      custom_property32: cdktf.stringToTerraform(this._customProperty32),
      custom_property33: cdktf.stringToTerraform(this._customProperty33),
      custom_property34: cdktf.stringToTerraform(this._customProperty34),
      custom_property35: cdktf.stringToTerraform(this._customProperty35),
      custom_property36: cdktf.stringToTerraform(this._customProperty36),
      custom_property37: cdktf.stringToTerraform(this._customProperty37),
      custom_property38: cdktf.stringToTerraform(this._customProperty38),
      custom_property39: cdktf.stringToTerraform(this._customProperty39),
      custom_property4: cdktf.stringToTerraform(this._customProperty4),
      custom_property40: cdktf.stringToTerraform(this._customProperty40),
      custom_property41: cdktf.stringToTerraform(this._customProperty41),
      custom_property42: cdktf.stringToTerraform(this._customProperty42),
      custom_property43: cdktf.stringToTerraform(this._customProperty43),
      custom_property44: cdktf.stringToTerraform(this._customProperty44),
      custom_property45: cdktf.stringToTerraform(this._customProperty45),
      custom_property46: cdktf.stringToTerraform(this._customProperty46),
      custom_property47: cdktf.stringToTerraform(this._customProperty47),
      custom_property48: cdktf.stringToTerraform(this._customProperty48),
      custom_property49: cdktf.stringToTerraform(this._customProperty49),
      custom_property5: cdktf.stringToTerraform(this._customProperty5),
      custom_property50: cdktf.stringToTerraform(this._customProperty50),
      custom_property51: cdktf.stringToTerraform(this._customProperty51),
      custom_property52: cdktf.stringToTerraform(this._customProperty52),
      custom_property53: cdktf.stringToTerraform(this._customProperty53),
      custom_property54: cdktf.stringToTerraform(this._customProperty54),
      custom_property55: cdktf.stringToTerraform(this._customProperty55),
      custom_property56: cdktf.stringToTerraform(this._customProperty56),
      custom_property57: cdktf.stringToTerraform(this._customProperty57),
      custom_property58: cdktf.stringToTerraform(this._customProperty58),
      custom_property59: cdktf.stringToTerraform(this._customProperty59),
      custom_property6: cdktf.stringToTerraform(this._customProperty6),
      custom_property60: cdktf.stringToTerraform(this._customProperty60),
      custom_property7: cdktf.stringToTerraform(this._customProperty7),
      custom_property8: cdktf.stringToTerraform(this._customProperty8),
      custom_property9: cdktf.stringToTerraform(this._customProperty9),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      glossary: cdktf.stringToTerraform(this._glossary),
      hide_blank_values: cdktf.stringToTerraform(this._hideBlankValues),
      level: cdktf.stringToTerraform(this._level),
      max: cdktf.stringToTerraform(this._max),
      mining_instance: cdktf.stringToTerraform(this._miningInstance),
      offset: cdktf.stringToTerraform(this._offset),
      privileged: cdktf.stringToTerraform(this._privileged),
      requestable: cdktf.stringToTerraform(this._requestable),
      requested_object: cdktf.stringToTerraform(this._requestedObject),
      risk: cdktf.stringToTerraform(this._risk),
      role_name: cdktf.stringToTerraform(this._roleName),
      role_query: cdktf.stringToTerraform(this._roleQuery),
      role_type: cdktf.stringToTerraform(this._roleType),
      sox_critical: cdktf.stringToTerraform(this._soxCritical),
      status: cdktf.stringToTerraform(this._status),
      sys_critical: cdktf.stringToTerraform(this._sysCritical),
      system_id: cdktf.stringToTerraform(this._systemId),
      update_user: cdktf.stringToTerraform(this._updateUser),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      confidentiality: {
        value: cdktf.stringToHclTerraform(this._confidentiality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property1: {
        value: cdktf.stringToHclTerraform(this._customProperty1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property10: {
        value: cdktf.stringToHclTerraform(this._customProperty10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property11: {
        value: cdktf.stringToHclTerraform(this._customProperty11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property12: {
        value: cdktf.stringToHclTerraform(this._customProperty12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property13: {
        value: cdktf.stringToHclTerraform(this._customProperty13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property14: {
        value: cdktf.stringToHclTerraform(this._customProperty14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property15: {
        value: cdktf.stringToHclTerraform(this._customProperty15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property16: {
        value: cdktf.stringToHclTerraform(this._customProperty16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property17: {
        value: cdktf.stringToHclTerraform(this._customProperty17),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property18: {
        value: cdktf.stringToHclTerraform(this._customProperty18),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property19: {
        value: cdktf.stringToHclTerraform(this._customProperty19),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property2: {
        value: cdktf.stringToHclTerraform(this._customProperty2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property20: {
        value: cdktf.stringToHclTerraform(this._customProperty20),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property21: {
        value: cdktf.stringToHclTerraform(this._customProperty21),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property22: {
        value: cdktf.stringToHclTerraform(this._customProperty22),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property23: {
        value: cdktf.stringToHclTerraform(this._customProperty23),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property24: {
        value: cdktf.stringToHclTerraform(this._customProperty24),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property25: {
        value: cdktf.stringToHclTerraform(this._customProperty25),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property26: {
        value: cdktf.stringToHclTerraform(this._customProperty26),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property27: {
        value: cdktf.stringToHclTerraform(this._customProperty27),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property28: {
        value: cdktf.stringToHclTerraform(this._customProperty28),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property29: {
        value: cdktf.stringToHclTerraform(this._customProperty29),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property3: {
        value: cdktf.stringToHclTerraform(this._customProperty3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property30: {
        value: cdktf.stringToHclTerraform(this._customProperty30),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property31: {
        value: cdktf.stringToHclTerraform(this._customProperty31),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property32: {
        value: cdktf.stringToHclTerraform(this._customProperty32),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property33: {
        value: cdktf.stringToHclTerraform(this._customProperty33),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property34: {
        value: cdktf.stringToHclTerraform(this._customProperty34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property35: {
        value: cdktf.stringToHclTerraform(this._customProperty35),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property36: {
        value: cdktf.stringToHclTerraform(this._customProperty36),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property37: {
        value: cdktf.stringToHclTerraform(this._customProperty37),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property38: {
        value: cdktf.stringToHclTerraform(this._customProperty38),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property39: {
        value: cdktf.stringToHclTerraform(this._customProperty39),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property4: {
        value: cdktf.stringToHclTerraform(this._customProperty4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property40: {
        value: cdktf.stringToHclTerraform(this._customProperty40),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property41: {
        value: cdktf.stringToHclTerraform(this._customProperty41),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property42: {
        value: cdktf.stringToHclTerraform(this._customProperty42),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property43: {
        value: cdktf.stringToHclTerraform(this._customProperty43),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property44: {
        value: cdktf.stringToHclTerraform(this._customProperty44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property45: {
        value: cdktf.stringToHclTerraform(this._customProperty45),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property46: {
        value: cdktf.stringToHclTerraform(this._customProperty46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property47: {
        value: cdktf.stringToHclTerraform(this._customProperty47),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property48: {
        value: cdktf.stringToHclTerraform(this._customProperty48),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property49: {
        value: cdktf.stringToHclTerraform(this._customProperty49),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property5: {
        value: cdktf.stringToHclTerraform(this._customProperty5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property50: {
        value: cdktf.stringToHclTerraform(this._customProperty50),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property51: {
        value: cdktf.stringToHclTerraform(this._customProperty51),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property52: {
        value: cdktf.stringToHclTerraform(this._customProperty52),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property53: {
        value: cdktf.stringToHclTerraform(this._customProperty53),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property54: {
        value: cdktf.stringToHclTerraform(this._customProperty54),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property55: {
        value: cdktf.stringToHclTerraform(this._customProperty55),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property56: {
        value: cdktf.stringToHclTerraform(this._customProperty56),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property57: {
        value: cdktf.stringToHclTerraform(this._customProperty57),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property58: {
        value: cdktf.stringToHclTerraform(this._customProperty58),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property59: {
        value: cdktf.stringToHclTerraform(this._customProperty59),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property6: {
        value: cdktf.stringToHclTerraform(this._customProperty6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property60: {
        value: cdktf.stringToHclTerraform(this._customProperty60),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property7: {
        value: cdktf.stringToHclTerraform(this._customProperty7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property8: {
        value: cdktf.stringToHclTerraform(this._customProperty8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property9: {
        value: cdktf.stringToHclTerraform(this._customProperty9),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glossary: {
        value: cdktf.stringToHclTerraform(this._glossary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_blank_values: {
        value: cdktf.stringToHclTerraform(this._hideBlankValues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max: {
        value: cdktf.stringToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mining_instance: {
        value: cdktf.stringToHclTerraform(this._miningInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.stringToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileged: {
        value: cdktf.stringToHclTerraform(this._privileged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestable: {
        value: cdktf.stringToHclTerraform(this._requestable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_object: {
        value: cdktf.stringToHclTerraform(this._requestedObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk: {
        value: cdktf.stringToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_query: {
        value: cdktf.stringToHclTerraform(this._roleQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_type: {
        value: cdktf.stringToHclTerraform(this._roleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sox_critical: {
        value: cdktf.stringToHclTerraform(this._soxCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_critical: {
        value: cdktf.stringToHclTerraform(this._sysCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user: {
        value: cdktf.stringToHclTerraform(this._updateUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
