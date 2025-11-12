// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntEndpointsDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store endpoints details in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#authenticate DataSaviyntEndpointsDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * Filter by connection type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#connection_type DataSaviyntEndpointsDatasource#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Filter by display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#displayname DataSaviyntEndpointsDatasource#displayname}
  */
  readonly displayname?: string;
  /**
  * List of endpoint keys to filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#endpointkey DataSaviyntEndpointsDatasource#endpointkey}
  */
  readonly endpointkey?: string[];
  /**
  * Filter by endpoint name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#endpointname DataSaviyntEndpointsDatasource#endpointname}
  */
  readonly endpointname?: string;
  /**
  * Filter criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#filter_criteria DataSaviyntEndpointsDatasource#filter_criteria}
  */
  readonly filterCriteria?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#max DataSaviyntEndpointsDatasource#max}
  */
  readonly max?: string;
  /**
  * Filter by owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#owner DataSaviyntEndpointsDatasource#owner}
  */
  readonly owner?: string;
}
export interface DataSaviyntEndpointsDatasourceResults {
  /**
  * Label for account custom property 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_10_label DataSaviyntEndpointsDatasource#account_custom_property_10_label}
  */
  readonly accountCustomProperty10Label?: string;
  /**
  * Label for account custom property 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_11_label DataSaviyntEndpointsDatasource#account_custom_property_11_label}
  */
  readonly accountCustomProperty11Label?: string;
  /**
  * Label for account custom property 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_12_label DataSaviyntEndpointsDatasource#account_custom_property_12_label}
  */
  readonly accountCustomProperty12Label?: string;
  /**
  * Label for account custom property 13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_13_label DataSaviyntEndpointsDatasource#account_custom_property_13_label}
  */
  readonly accountCustomProperty13Label?: string;
  /**
  * Label for account custom property 14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_14_label DataSaviyntEndpointsDatasource#account_custom_property_14_label}
  */
  readonly accountCustomProperty14Label?: string;
  /**
  * Label for account custom property 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_15_label DataSaviyntEndpointsDatasource#account_custom_property_15_label}
  */
  readonly accountCustomProperty15Label?: string;
  /**
  * Label for account custom property 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_16_label DataSaviyntEndpointsDatasource#account_custom_property_16_label}
  */
  readonly accountCustomProperty16Label?: string;
  /**
  * Label for account custom property 17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_17_label DataSaviyntEndpointsDatasource#account_custom_property_17_label}
  */
  readonly accountCustomProperty17Label?: string;
  /**
  * Label for account custom property 18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_18_label DataSaviyntEndpointsDatasource#account_custom_property_18_label}
  */
  readonly accountCustomProperty18Label?: string;
  /**
  * Label for account custom property 19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_19_label DataSaviyntEndpointsDatasource#account_custom_property_19_label}
  */
  readonly accountCustomProperty19Label?: string;
  /**
  * Label for account custom property 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_1_label DataSaviyntEndpointsDatasource#account_custom_property_1_label}
  */
  readonly accountCustomProperty1Label?: string;
  /**
  * Label for account custom property 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_20_label DataSaviyntEndpointsDatasource#account_custom_property_20_label}
  */
  readonly accountCustomProperty20Label?: string;
  /**
  * Label for account custom property 21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_21_label DataSaviyntEndpointsDatasource#account_custom_property_21_label}
  */
  readonly accountCustomProperty21Label?: string;
  /**
  * Label for account custom property 22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_22_label DataSaviyntEndpointsDatasource#account_custom_property_22_label}
  */
  readonly accountCustomProperty22Label?: string;
  /**
  * Label for account custom property 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_23_label DataSaviyntEndpointsDatasource#account_custom_property_23_label}
  */
  readonly accountCustomProperty23Label?: string;
  /**
  * Label for account custom property 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_24_label DataSaviyntEndpointsDatasource#account_custom_property_24_label}
  */
  readonly accountCustomProperty24Label?: string;
  /**
  * Label for account custom property 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_25_label DataSaviyntEndpointsDatasource#account_custom_property_25_label}
  */
  readonly accountCustomProperty25Label?: string;
  /**
  * Label for account custom property 26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_26_label DataSaviyntEndpointsDatasource#account_custom_property_26_label}
  */
  readonly accountCustomProperty26Label?: string;
  /**
  * Label for account custom property 27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_27_label DataSaviyntEndpointsDatasource#account_custom_property_27_label}
  */
  readonly accountCustomProperty27Label?: string;
  /**
  * Label for account custom property 28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_28_label DataSaviyntEndpointsDatasource#account_custom_property_28_label}
  */
  readonly accountCustomProperty28Label?: string;
  /**
  * Label for account custom property 29.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_29_label DataSaviyntEndpointsDatasource#account_custom_property_29_label}
  */
  readonly accountCustomProperty29Label?: string;
  /**
  * Label for account custom property 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_2_label DataSaviyntEndpointsDatasource#account_custom_property_2_label}
  */
  readonly accountCustomProperty2Label?: string;
  /**
  * Label for account custom property 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_30_label DataSaviyntEndpointsDatasource#account_custom_property_30_label}
  */
  readonly accountCustomProperty30Label?: string;
  /**
  * Label for account custom property 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_3_label DataSaviyntEndpointsDatasource#account_custom_property_3_label}
  */
  readonly accountCustomProperty3Label?: string;
  /**
  * Label for account custom property 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_4_label DataSaviyntEndpointsDatasource#account_custom_property_4_label}
  */
  readonly accountCustomProperty4Label?: string;
  /**
  * Label for account custom property 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_5_label DataSaviyntEndpointsDatasource#account_custom_property_5_label}
  */
  readonly accountCustomProperty5Label?: string;
  /**
  * Label for account custom property 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_6_label DataSaviyntEndpointsDatasource#account_custom_property_6_label}
  */
  readonly accountCustomProperty6Label?: string;
  /**
  * Label for account custom property 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_7_label DataSaviyntEndpointsDatasource#account_custom_property_7_label}
  */
  readonly accountCustomProperty7Label?: string;
  /**
  * Label for account custom property 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_8_label DataSaviyntEndpointsDatasource#account_custom_property_8_label}
  */
  readonly accountCustomProperty8Label?: string;
  /**
  * Label for account custom property 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#account_custom_property_9_label DataSaviyntEndpointsDatasource#account_custom_property_9_label}
  */
  readonly accountCustomProperty9Label?: string;
  /**
  * Label for custom property 31 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property31_label DataSaviyntEndpointsDatasource#custom_property31_label}
  */
  readonly customProperty31Label?: string;
  /**
  * Label for custom property 32 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property32_label DataSaviyntEndpointsDatasource#custom_property32_label}
  */
  readonly customProperty32Label?: string;
  /**
  * Label for custom property 33 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property33_label DataSaviyntEndpointsDatasource#custom_property33_label}
  */
  readonly customProperty33Label?: string;
  /**
  * Label for custom property 34 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property34_label DataSaviyntEndpointsDatasource#custom_property34_label}
  */
  readonly customProperty34Label?: string;
  /**
  * Label for custom property 35 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property35_label DataSaviyntEndpointsDatasource#custom_property35_label}
  */
  readonly customProperty35Label?: string;
  /**
  * Label for custom property 36 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property36_label DataSaviyntEndpointsDatasource#custom_property36_label}
  */
  readonly customProperty36Label?: string;
  /**
  * Label for custom property 37 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property37_label DataSaviyntEndpointsDatasource#custom_property37_label}
  */
  readonly customProperty37Label?: string;
  /**
  * Label for custom property 38 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property38_label DataSaviyntEndpointsDatasource#custom_property38_label}
  */
  readonly customProperty38Label?: string;
  /**
  * Label for custom property 39 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property39_label DataSaviyntEndpointsDatasource#custom_property39_label}
  */
  readonly customProperty39Label?: string;
  /**
  * Label for custom property 40 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property40_label DataSaviyntEndpointsDatasource#custom_property40_label}
  */
  readonly customProperty40Label?: string;
  /**
  * Label for custom property 41 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property41_label DataSaviyntEndpointsDatasource#custom_property41_label}
  */
  readonly customProperty41Label?: string;
  /**
  * Label for custom property 42 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property42_label DataSaviyntEndpointsDatasource#custom_property42_label}
  */
  readonly customProperty42Label?: string;
  /**
  * Label for custom property 43 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property43_label DataSaviyntEndpointsDatasource#custom_property43_label}
  */
  readonly customProperty43Label?: string;
  /**
  * Label for custom property 44 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property44_label DataSaviyntEndpointsDatasource#custom_property44_label}
  */
  readonly customProperty44Label?: string;
  /**
  * Label for custom property 45 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property45_label DataSaviyntEndpointsDatasource#custom_property45_label}
  */
  readonly customProperty45Label?: string;
  /**
  * Label for custom property 46 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property46_label DataSaviyntEndpointsDatasource#custom_property46_label}
  */
  readonly customProperty46Label?: string;
  /**
  * Label for custom property 47 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property47_label DataSaviyntEndpointsDatasource#custom_property47_label}
  */
  readonly customProperty47Label?: string;
  /**
  * Label for custom property 48 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property48_label DataSaviyntEndpointsDatasource#custom_property48_label}
  */
  readonly customProperty48Label?: string;
  /**
  * Label for custom property 49 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property49_label DataSaviyntEndpointsDatasource#custom_property49_label}
  */
  readonly customProperty49Label?: string;
  /**
  * Label for custom property 50 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property50_label DataSaviyntEndpointsDatasource#custom_property50_label}
  */
  readonly customProperty50Label?: string;
  /**
  * Label for custom property 51 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property51_label DataSaviyntEndpointsDatasource#custom_property51_label}
  */
  readonly customProperty51Label?: string;
  /**
  * Label for custom property 52 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property52_label DataSaviyntEndpointsDatasource#custom_property52_label}
  */
  readonly customProperty52Label?: string;
  /**
  * Label for custom property 53 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property53_label DataSaviyntEndpointsDatasource#custom_property53_label}
  */
  readonly customProperty53Label?: string;
  /**
  * Label for custom property 54 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property54_label DataSaviyntEndpointsDatasource#custom_property54_label}
  */
  readonly customProperty54Label?: string;
  /**
  * Label for custom property 55 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property55_label DataSaviyntEndpointsDatasource#custom_property55_label}
  */
  readonly customProperty55Label?: string;
  /**
  * Label for custom property 56 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property56_label DataSaviyntEndpointsDatasource#custom_property56_label}
  */
  readonly customProperty56Label?: string;
  /**
  * Label for custom property 57 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property57_label DataSaviyntEndpointsDatasource#custom_property57_label}
  */
  readonly customProperty57Label?: string;
  /**
  * Label for custom property 58 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property58_label DataSaviyntEndpointsDatasource#custom_property58_label}
  */
  readonly customProperty58Label?: string;
  /**
  * Label for custom property 59 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property59_label DataSaviyntEndpointsDatasource#custom_property59_label}
  */
  readonly customProperty59Label?: string;
  /**
  * Label for custom property 60 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#custom_property60_label DataSaviyntEndpointsDatasource#custom_property60_label}
  */
  readonly customProperty60Label?: string;
}

export function dataSaviyntEndpointsDatasourceResultsToTerraform(struct?: DataSaviyntEndpointsDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_custom_property_10_label: cdktf.stringToTerraform(struct!.accountCustomProperty10Label),
    account_custom_property_11_label: cdktf.stringToTerraform(struct!.accountCustomProperty11Label),
    account_custom_property_12_label: cdktf.stringToTerraform(struct!.accountCustomProperty12Label),
    account_custom_property_13_label: cdktf.stringToTerraform(struct!.accountCustomProperty13Label),
    account_custom_property_14_label: cdktf.stringToTerraform(struct!.accountCustomProperty14Label),
    account_custom_property_15_label: cdktf.stringToTerraform(struct!.accountCustomProperty15Label),
    account_custom_property_16_label: cdktf.stringToTerraform(struct!.accountCustomProperty16Label),
    account_custom_property_17_label: cdktf.stringToTerraform(struct!.accountCustomProperty17Label),
    account_custom_property_18_label: cdktf.stringToTerraform(struct!.accountCustomProperty18Label),
    account_custom_property_19_label: cdktf.stringToTerraform(struct!.accountCustomProperty19Label),
    account_custom_property_1_label: cdktf.stringToTerraform(struct!.accountCustomProperty1Label),
    account_custom_property_20_label: cdktf.stringToTerraform(struct!.accountCustomProperty20Label),
    account_custom_property_21_label: cdktf.stringToTerraform(struct!.accountCustomProperty21Label),
    account_custom_property_22_label: cdktf.stringToTerraform(struct!.accountCustomProperty22Label),
    account_custom_property_23_label: cdktf.stringToTerraform(struct!.accountCustomProperty23Label),
    account_custom_property_24_label: cdktf.stringToTerraform(struct!.accountCustomProperty24Label),
    account_custom_property_25_label: cdktf.stringToTerraform(struct!.accountCustomProperty25Label),
    account_custom_property_26_label: cdktf.stringToTerraform(struct!.accountCustomProperty26Label),
    account_custom_property_27_label: cdktf.stringToTerraform(struct!.accountCustomProperty27Label),
    account_custom_property_28_label: cdktf.stringToTerraform(struct!.accountCustomProperty28Label),
    account_custom_property_29_label: cdktf.stringToTerraform(struct!.accountCustomProperty29Label),
    account_custom_property_2_label: cdktf.stringToTerraform(struct!.accountCustomProperty2Label),
    account_custom_property_30_label: cdktf.stringToTerraform(struct!.accountCustomProperty30Label),
    account_custom_property_3_label: cdktf.stringToTerraform(struct!.accountCustomProperty3Label),
    account_custom_property_4_label: cdktf.stringToTerraform(struct!.accountCustomProperty4Label),
    account_custom_property_5_label: cdktf.stringToTerraform(struct!.accountCustomProperty5Label),
    account_custom_property_6_label: cdktf.stringToTerraform(struct!.accountCustomProperty6Label),
    account_custom_property_7_label: cdktf.stringToTerraform(struct!.accountCustomProperty7Label),
    account_custom_property_8_label: cdktf.stringToTerraform(struct!.accountCustomProperty8Label),
    account_custom_property_9_label: cdktf.stringToTerraform(struct!.accountCustomProperty9Label),
    custom_property31_label: cdktf.stringToTerraform(struct!.customProperty31Label),
    custom_property32_label: cdktf.stringToTerraform(struct!.customProperty32Label),
    custom_property33_label: cdktf.stringToTerraform(struct!.customProperty33Label),
    custom_property34_label: cdktf.stringToTerraform(struct!.customProperty34Label),
    custom_property35_label: cdktf.stringToTerraform(struct!.customProperty35Label),
    custom_property36_label: cdktf.stringToTerraform(struct!.customProperty36Label),
    custom_property37_label: cdktf.stringToTerraform(struct!.customProperty37Label),
    custom_property38_label: cdktf.stringToTerraform(struct!.customProperty38Label),
    custom_property39_label: cdktf.stringToTerraform(struct!.customProperty39Label),
    custom_property40_label: cdktf.stringToTerraform(struct!.customProperty40Label),
    custom_property41_label: cdktf.stringToTerraform(struct!.customProperty41Label),
    custom_property42_label: cdktf.stringToTerraform(struct!.customProperty42Label),
    custom_property43_label: cdktf.stringToTerraform(struct!.customProperty43Label),
    custom_property44_label: cdktf.stringToTerraform(struct!.customProperty44Label),
    custom_property45_label: cdktf.stringToTerraform(struct!.customProperty45Label),
    custom_property46_label: cdktf.stringToTerraform(struct!.customProperty46Label),
    custom_property47_label: cdktf.stringToTerraform(struct!.customProperty47Label),
    custom_property48_label: cdktf.stringToTerraform(struct!.customProperty48Label),
    custom_property49_label: cdktf.stringToTerraform(struct!.customProperty49Label),
    custom_property50_label: cdktf.stringToTerraform(struct!.customProperty50Label),
    custom_property51_label: cdktf.stringToTerraform(struct!.customProperty51Label),
    custom_property52_label: cdktf.stringToTerraform(struct!.customProperty52Label),
    custom_property53_label: cdktf.stringToTerraform(struct!.customProperty53Label),
    custom_property54_label: cdktf.stringToTerraform(struct!.customProperty54Label),
    custom_property55_label: cdktf.stringToTerraform(struct!.customProperty55Label),
    custom_property56_label: cdktf.stringToTerraform(struct!.customProperty56Label),
    custom_property57_label: cdktf.stringToTerraform(struct!.customProperty57Label),
    custom_property58_label: cdktf.stringToTerraform(struct!.customProperty58Label),
    custom_property59_label: cdktf.stringToTerraform(struct!.customProperty59Label),
    custom_property60_label: cdktf.stringToTerraform(struct!.customProperty60Label),
  }
}


export function dataSaviyntEndpointsDatasourceResultsToHclTerraform(struct?: DataSaviyntEndpointsDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_custom_property_10_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty10Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_11_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty11Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_12_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty12Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_13_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty13Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_14_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty14Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_15_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty15Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_16_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty16Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_17_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty17Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_18_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty18Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_19_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty19Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_1_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty1Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_20_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty20Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_21_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty21Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_22_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty22Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_23_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty23Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_24_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty24Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_25_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty25Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_26_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty26Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_27_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty27Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_28_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty28Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_29_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty29Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_2_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty2Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_30_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty30Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_3_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty3Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_4_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty4Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_5_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty5Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_6_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty6Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_7_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty7Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_8_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty8Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_custom_property_9_label: {
      value: cdktf.stringToHclTerraform(struct!.accountCustomProperty9Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property31_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty31Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property32_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty32Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property33_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty33Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property34_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty34Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property35_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty35Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property36_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty36Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property37_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty37Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property38_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty38Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property39_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty39Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property40_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty40Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property41_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty41Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property42_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty42Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property43_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty43Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property44_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty44Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property45_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty45Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property46_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty46Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property47_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty47Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property48_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty48Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property49_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty49Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property50_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty50Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property51_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty51Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property52_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty52Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property53_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty53Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property54_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty54Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property55_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty55Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property56_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty56Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property57_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty57Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property58_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty58Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property59_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty59Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_property60_label: {
      value: cdktf.stringToHclTerraform(struct!.customProperty60Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSaviyntEndpointsDatasourceResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSaviyntEndpointsDatasourceResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountCustomProperty10Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty10Label = this._accountCustomProperty10Label;
    }
    if (this._accountCustomProperty11Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty11Label = this._accountCustomProperty11Label;
    }
    if (this._accountCustomProperty12Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty12Label = this._accountCustomProperty12Label;
    }
    if (this._accountCustomProperty13Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty13Label = this._accountCustomProperty13Label;
    }
    if (this._accountCustomProperty14Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty14Label = this._accountCustomProperty14Label;
    }
    if (this._accountCustomProperty15Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty15Label = this._accountCustomProperty15Label;
    }
    if (this._accountCustomProperty16Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty16Label = this._accountCustomProperty16Label;
    }
    if (this._accountCustomProperty17Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty17Label = this._accountCustomProperty17Label;
    }
    if (this._accountCustomProperty18Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty18Label = this._accountCustomProperty18Label;
    }
    if (this._accountCustomProperty19Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty19Label = this._accountCustomProperty19Label;
    }
    if (this._accountCustomProperty1Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty1Label = this._accountCustomProperty1Label;
    }
    if (this._accountCustomProperty20Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty20Label = this._accountCustomProperty20Label;
    }
    if (this._accountCustomProperty21Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty21Label = this._accountCustomProperty21Label;
    }
    if (this._accountCustomProperty22Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty22Label = this._accountCustomProperty22Label;
    }
    if (this._accountCustomProperty23Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty23Label = this._accountCustomProperty23Label;
    }
    if (this._accountCustomProperty24Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty24Label = this._accountCustomProperty24Label;
    }
    if (this._accountCustomProperty25Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty25Label = this._accountCustomProperty25Label;
    }
    if (this._accountCustomProperty26Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty26Label = this._accountCustomProperty26Label;
    }
    if (this._accountCustomProperty27Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty27Label = this._accountCustomProperty27Label;
    }
    if (this._accountCustomProperty28Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty28Label = this._accountCustomProperty28Label;
    }
    if (this._accountCustomProperty29Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty29Label = this._accountCustomProperty29Label;
    }
    if (this._accountCustomProperty2Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty2Label = this._accountCustomProperty2Label;
    }
    if (this._accountCustomProperty30Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty30Label = this._accountCustomProperty30Label;
    }
    if (this._accountCustomProperty3Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty3Label = this._accountCustomProperty3Label;
    }
    if (this._accountCustomProperty4Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty4Label = this._accountCustomProperty4Label;
    }
    if (this._accountCustomProperty5Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty5Label = this._accountCustomProperty5Label;
    }
    if (this._accountCustomProperty6Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty6Label = this._accountCustomProperty6Label;
    }
    if (this._accountCustomProperty7Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty7Label = this._accountCustomProperty7Label;
    }
    if (this._accountCustomProperty8Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty8Label = this._accountCustomProperty8Label;
    }
    if (this._accountCustomProperty9Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountCustomProperty9Label = this._accountCustomProperty9Label;
    }
    if (this._customProperty31Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty31Label = this._customProperty31Label;
    }
    if (this._customProperty32Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty32Label = this._customProperty32Label;
    }
    if (this._customProperty33Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty33Label = this._customProperty33Label;
    }
    if (this._customProperty34Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty34Label = this._customProperty34Label;
    }
    if (this._customProperty35Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty35Label = this._customProperty35Label;
    }
    if (this._customProperty36Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty36Label = this._customProperty36Label;
    }
    if (this._customProperty37Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty37Label = this._customProperty37Label;
    }
    if (this._customProperty38Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty38Label = this._customProperty38Label;
    }
    if (this._customProperty39Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty39Label = this._customProperty39Label;
    }
    if (this._customProperty40Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty40Label = this._customProperty40Label;
    }
    if (this._customProperty41Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty41Label = this._customProperty41Label;
    }
    if (this._customProperty42Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty42Label = this._customProperty42Label;
    }
    if (this._customProperty43Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty43Label = this._customProperty43Label;
    }
    if (this._customProperty44Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty44Label = this._customProperty44Label;
    }
    if (this._customProperty45Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty45Label = this._customProperty45Label;
    }
    if (this._customProperty46Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty46Label = this._customProperty46Label;
    }
    if (this._customProperty47Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty47Label = this._customProperty47Label;
    }
    if (this._customProperty48Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty48Label = this._customProperty48Label;
    }
    if (this._customProperty49Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty49Label = this._customProperty49Label;
    }
    if (this._customProperty50Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty50Label = this._customProperty50Label;
    }
    if (this._customProperty51Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty51Label = this._customProperty51Label;
    }
    if (this._customProperty52Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty52Label = this._customProperty52Label;
    }
    if (this._customProperty53Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty53Label = this._customProperty53Label;
    }
    if (this._customProperty54Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty54Label = this._customProperty54Label;
    }
    if (this._customProperty55Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty55Label = this._customProperty55Label;
    }
    if (this._customProperty56Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty56Label = this._customProperty56Label;
    }
    if (this._customProperty57Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty57Label = this._customProperty57Label;
    }
    if (this._customProperty58Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty58Label = this._customProperty58Label;
    }
    if (this._customProperty59Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty59Label = this._customProperty59Label;
    }
    if (this._customProperty60Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperty60Label = this._customProperty60Label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntEndpointsDatasourceResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountCustomProperty10Label = undefined;
      this._accountCustomProperty11Label = undefined;
      this._accountCustomProperty12Label = undefined;
      this._accountCustomProperty13Label = undefined;
      this._accountCustomProperty14Label = undefined;
      this._accountCustomProperty15Label = undefined;
      this._accountCustomProperty16Label = undefined;
      this._accountCustomProperty17Label = undefined;
      this._accountCustomProperty18Label = undefined;
      this._accountCustomProperty19Label = undefined;
      this._accountCustomProperty1Label = undefined;
      this._accountCustomProperty20Label = undefined;
      this._accountCustomProperty21Label = undefined;
      this._accountCustomProperty22Label = undefined;
      this._accountCustomProperty23Label = undefined;
      this._accountCustomProperty24Label = undefined;
      this._accountCustomProperty25Label = undefined;
      this._accountCustomProperty26Label = undefined;
      this._accountCustomProperty27Label = undefined;
      this._accountCustomProperty28Label = undefined;
      this._accountCustomProperty29Label = undefined;
      this._accountCustomProperty2Label = undefined;
      this._accountCustomProperty30Label = undefined;
      this._accountCustomProperty3Label = undefined;
      this._accountCustomProperty4Label = undefined;
      this._accountCustomProperty5Label = undefined;
      this._accountCustomProperty6Label = undefined;
      this._accountCustomProperty7Label = undefined;
      this._accountCustomProperty8Label = undefined;
      this._accountCustomProperty9Label = undefined;
      this._customProperty31Label = undefined;
      this._customProperty32Label = undefined;
      this._customProperty33Label = undefined;
      this._customProperty34Label = undefined;
      this._customProperty35Label = undefined;
      this._customProperty36Label = undefined;
      this._customProperty37Label = undefined;
      this._customProperty38Label = undefined;
      this._customProperty39Label = undefined;
      this._customProperty40Label = undefined;
      this._customProperty41Label = undefined;
      this._customProperty42Label = undefined;
      this._customProperty43Label = undefined;
      this._customProperty44Label = undefined;
      this._customProperty45Label = undefined;
      this._customProperty46Label = undefined;
      this._customProperty47Label = undefined;
      this._customProperty48Label = undefined;
      this._customProperty49Label = undefined;
      this._customProperty50Label = undefined;
      this._customProperty51Label = undefined;
      this._customProperty52Label = undefined;
      this._customProperty53Label = undefined;
      this._customProperty54Label = undefined;
      this._customProperty55Label = undefined;
      this._customProperty56Label = undefined;
      this._customProperty57Label = undefined;
      this._customProperty58Label = undefined;
      this._customProperty59Label = undefined;
      this._customProperty60Label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountCustomProperty10Label = value.accountCustomProperty10Label;
      this._accountCustomProperty11Label = value.accountCustomProperty11Label;
      this._accountCustomProperty12Label = value.accountCustomProperty12Label;
      this._accountCustomProperty13Label = value.accountCustomProperty13Label;
      this._accountCustomProperty14Label = value.accountCustomProperty14Label;
      this._accountCustomProperty15Label = value.accountCustomProperty15Label;
      this._accountCustomProperty16Label = value.accountCustomProperty16Label;
      this._accountCustomProperty17Label = value.accountCustomProperty17Label;
      this._accountCustomProperty18Label = value.accountCustomProperty18Label;
      this._accountCustomProperty19Label = value.accountCustomProperty19Label;
      this._accountCustomProperty1Label = value.accountCustomProperty1Label;
      this._accountCustomProperty20Label = value.accountCustomProperty20Label;
      this._accountCustomProperty21Label = value.accountCustomProperty21Label;
      this._accountCustomProperty22Label = value.accountCustomProperty22Label;
      this._accountCustomProperty23Label = value.accountCustomProperty23Label;
      this._accountCustomProperty24Label = value.accountCustomProperty24Label;
      this._accountCustomProperty25Label = value.accountCustomProperty25Label;
      this._accountCustomProperty26Label = value.accountCustomProperty26Label;
      this._accountCustomProperty27Label = value.accountCustomProperty27Label;
      this._accountCustomProperty28Label = value.accountCustomProperty28Label;
      this._accountCustomProperty29Label = value.accountCustomProperty29Label;
      this._accountCustomProperty2Label = value.accountCustomProperty2Label;
      this._accountCustomProperty30Label = value.accountCustomProperty30Label;
      this._accountCustomProperty3Label = value.accountCustomProperty3Label;
      this._accountCustomProperty4Label = value.accountCustomProperty4Label;
      this._accountCustomProperty5Label = value.accountCustomProperty5Label;
      this._accountCustomProperty6Label = value.accountCustomProperty6Label;
      this._accountCustomProperty7Label = value.accountCustomProperty7Label;
      this._accountCustomProperty8Label = value.accountCustomProperty8Label;
      this._accountCustomProperty9Label = value.accountCustomProperty9Label;
      this._customProperty31Label = value.customProperty31Label;
      this._customProperty32Label = value.customProperty32Label;
      this._customProperty33Label = value.customProperty33Label;
      this._customProperty34Label = value.customProperty34Label;
      this._customProperty35Label = value.customProperty35Label;
      this._customProperty36Label = value.customProperty36Label;
      this._customProperty37Label = value.customProperty37Label;
      this._customProperty38Label = value.customProperty38Label;
      this._customProperty39Label = value.customProperty39Label;
      this._customProperty40Label = value.customProperty40Label;
      this._customProperty41Label = value.customProperty41Label;
      this._customProperty42Label = value.customProperty42Label;
      this._customProperty43Label = value.customProperty43Label;
      this._customProperty44Label = value.customProperty44Label;
      this._customProperty45Label = value.customProperty45Label;
      this._customProperty46Label = value.customProperty46Label;
      this._customProperty47Label = value.customProperty47Label;
      this._customProperty48Label = value.customProperty48Label;
      this._customProperty49Label = value.customProperty49Label;
      this._customProperty50Label = value.customProperty50Label;
      this._customProperty51Label = value.customProperty51Label;
      this._customProperty52Label = value.customProperty52Label;
      this._customProperty53Label = value.customProperty53Label;
      this._customProperty54Label = value.customProperty54Label;
      this._customProperty55Label = value.customProperty55Label;
      this._customProperty56Label = value.customProperty56Label;
      this._customProperty57Label = value.customProperty57Label;
      this._customProperty58Label = value.customProperty58Label;
      this._customProperty59Label = value.customProperty59Label;
      this._customProperty60Label = value.customProperty60Label;
    }
  }

  // accessquery - computed: true, optional: false, required: false
  public get accessquery() {
    return this.getStringAttribute('accessquery');
  }

  // account_custom_property_10_label - computed: true, optional: true, required: false
  private _accountCustomProperty10Label?: string; 
  public get accountCustomProperty10Label() {
    return this.getStringAttribute('account_custom_property_10_label');
  }
  public set accountCustomProperty10Label(value: string) {
    this._accountCustomProperty10Label = value;
  }
  public resetAccountCustomProperty10Label() {
    this._accountCustomProperty10Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty10LabelInput() {
    return this._accountCustomProperty10Label;
  }

  // account_custom_property_11_label - computed: true, optional: true, required: false
  private _accountCustomProperty11Label?: string; 
  public get accountCustomProperty11Label() {
    return this.getStringAttribute('account_custom_property_11_label');
  }
  public set accountCustomProperty11Label(value: string) {
    this._accountCustomProperty11Label = value;
  }
  public resetAccountCustomProperty11Label() {
    this._accountCustomProperty11Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty11LabelInput() {
    return this._accountCustomProperty11Label;
  }

  // account_custom_property_12_label - computed: true, optional: true, required: false
  private _accountCustomProperty12Label?: string; 
  public get accountCustomProperty12Label() {
    return this.getStringAttribute('account_custom_property_12_label');
  }
  public set accountCustomProperty12Label(value: string) {
    this._accountCustomProperty12Label = value;
  }
  public resetAccountCustomProperty12Label() {
    this._accountCustomProperty12Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty12LabelInput() {
    return this._accountCustomProperty12Label;
  }

  // account_custom_property_13_label - computed: true, optional: true, required: false
  private _accountCustomProperty13Label?: string; 
  public get accountCustomProperty13Label() {
    return this.getStringAttribute('account_custom_property_13_label');
  }
  public set accountCustomProperty13Label(value: string) {
    this._accountCustomProperty13Label = value;
  }
  public resetAccountCustomProperty13Label() {
    this._accountCustomProperty13Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty13LabelInput() {
    return this._accountCustomProperty13Label;
  }

  // account_custom_property_14_label - computed: true, optional: true, required: false
  private _accountCustomProperty14Label?: string; 
  public get accountCustomProperty14Label() {
    return this.getStringAttribute('account_custom_property_14_label');
  }
  public set accountCustomProperty14Label(value: string) {
    this._accountCustomProperty14Label = value;
  }
  public resetAccountCustomProperty14Label() {
    this._accountCustomProperty14Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty14LabelInput() {
    return this._accountCustomProperty14Label;
  }

  // account_custom_property_15_label - computed: true, optional: true, required: false
  private _accountCustomProperty15Label?: string; 
  public get accountCustomProperty15Label() {
    return this.getStringAttribute('account_custom_property_15_label');
  }
  public set accountCustomProperty15Label(value: string) {
    this._accountCustomProperty15Label = value;
  }
  public resetAccountCustomProperty15Label() {
    this._accountCustomProperty15Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty15LabelInput() {
    return this._accountCustomProperty15Label;
  }

  // account_custom_property_16_label - computed: true, optional: true, required: false
  private _accountCustomProperty16Label?: string; 
  public get accountCustomProperty16Label() {
    return this.getStringAttribute('account_custom_property_16_label');
  }
  public set accountCustomProperty16Label(value: string) {
    this._accountCustomProperty16Label = value;
  }
  public resetAccountCustomProperty16Label() {
    this._accountCustomProperty16Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty16LabelInput() {
    return this._accountCustomProperty16Label;
  }

  // account_custom_property_17_label - computed: true, optional: true, required: false
  private _accountCustomProperty17Label?: string; 
  public get accountCustomProperty17Label() {
    return this.getStringAttribute('account_custom_property_17_label');
  }
  public set accountCustomProperty17Label(value: string) {
    this._accountCustomProperty17Label = value;
  }
  public resetAccountCustomProperty17Label() {
    this._accountCustomProperty17Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty17LabelInput() {
    return this._accountCustomProperty17Label;
  }

  // account_custom_property_18_label - computed: true, optional: true, required: false
  private _accountCustomProperty18Label?: string; 
  public get accountCustomProperty18Label() {
    return this.getStringAttribute('account_custom_property_18_label');
  }
  public set accountCustomProperty18Label(value: string) {
    this._accountCustomProperty18Label = value;
  }
  public resetAccountCustomProperty18Label() {
    this._accountCustomProperty18Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty18LabelInput() {
    return this._accountCustomProperty18Label;
  }

  // account_custom_property_19_label - computed: true, optional: true, required: false
  private _accountCustomProperty19Label?: string; 
  public get accountCustomProperty19Label() {
    return this.getStringAttribute('account_custom_property_19_label');
  }
  public set accountCustomProperty19Label(value: string) {
    this._accountCustomProperty19Label = value;
  }
  public resetAccountCustomProperty19Label() {
    this._accountCustomProperty19Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty19LabelInput() {
    return this._accountCustomProperty19Label;
  }

  // account_custom_property_1_label - computed: true, optional: true, required: false
  private _accountCustomProperty1Label?: string; 
  public get accountCustomProperty1Label() {
    return this.getStringAttribute('account_custom_property_1_label');
  }
  public set accountCustomProperty1Label(value: string) {
    this._accountCustomProperty1Label = value;
  }
  public resetAccountCustomProperty1Label() {
    this._accountCustomProperty1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty1LabelInput() {
    return this._accountCustomProperty1Label;
  }

  // account_custom_property_20_label - computed: true, optional: true, required: false
  private _accountCustomProperty20Label?: string; 
  public get accountCustomProperty20Label() {
    return this.getStringAttribute('account_custom_property_20_label');
  }
  public set accountCustomProperty20Label(value: string) {
    this._accountCustomProperty20Label = value;
  }
  public resetAccountCustomProperty20Label() {
    this._accountCustomProperty20Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty20LabelInput() {
    return this._accountCustomProperty20Label;
  }

  // account_custom_property_21_label - computed: true, optional: true, required: false
  private _accountCustomProperty21Label?: string; 
  public get accountCustomProperty21Label() {
    return this.getStringAttribute('account_custom_property_21_label');
  }
  public set accountCustomProperty21Label(value: string) {
    this._accountCustomProperty21Label = value;
  }
  public resetAccountCustomProperty21Label() {
    this._accountCustomProperty21Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty21LabelInput() {
    return this._accountCustomProperty21Label;
  }

  // account_custom_property_22_label - computed: true, optional: true, required: false
  private _accountCustomProperty22Label?: string; 
  public get accountCustomProperty22Label() {
    return this.getStringAttribute('account_custom_property_22_label');
  }
  public set accountCustomProperty22Label(value: string) {
    this._accountCustomProperty22Label = value;
  }
  public resetAccountCustomProperty22Label() {
    this._accountCustomProperty22Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty22LabelInput() {
    return this._accountCustomProperty22Label;
  }

  // account_custom_property_23_label - computed: true, optional: true, required: false
  private _accountCustomProperty23Label?: string; 
  public get accountCustomProperty23Label() {
    return this.getStringAttribute('account_custom_property_23_label');
  }
  public set accountCustomProperty23Label(value: string) {
    this._accountCustomProperty23Label = value;
  }
  public resetAccountCustomProperty23Label() {
    this._accountCustomProperty23Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty23LabelInput() {
    return this._accountCustomProperty23Label;
  }

  // account_custom_property_24_label - computed: true, optional: true, required: false
  private _accountCustomProperty24Label?: string; 
  public get accountCustomProperty24Label() {
    return this.getStringAttribute('account_custom_property_24_label');
  }
  public set accountCustomProperty24Label(value: string) {
    this._accountCustomProperty24Label = value;
  }
  public resetAccountCustomProperty24Label() {
    this._accountCustomProperty24Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty24LabelInput() {
    return this._accountCustomProperty24Label;
  }

  // account_custom_property_25_label - computed: true, optional: true, required: false
  private _accountCustomProperty25Label?: string; 
  public get accountCustomProperty25Label() {
    return this.getStringAttribute('account_custom_property_25_label');
  }
  public set accountCustomProperty25Label(value: string) {
    this._accountCustomProperty25Label = value;
  }
  public resetAccountCustomProperty25Label() {
    this._accountCustomProperty25Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty25LabelInput() {
    return this._accountCustomProperty25Label;
  }

  // account_custom_property_26_label - computed: true, optional: true, required: false
  private _accountCustomProperty26Label?: string; 
  public get accountCustomProperty26Label() {
    return this.getStringAttribute('account_custom_property_26_label');
  }
  public set accountCustomProperty26Label(value: string) {
    this._accountCustomProperty26Label = value;
  }
  public resetAccountCustomProperty26Label() {
    this._accountCustomProperty26Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty26LabelInput() {
    return this._accountCustomProperty26Label;
  }

  // account_custom_property_27_label - computed: true, optional: true, required: false
  private _accountCustomProperty27Label?: string; 
  public get accountCustomProperty27Label() {
    return this.getStringAttribute('account_custom_property_27_label');
  }
  public set accountCustomProperty27Label(value: string) {
    this._accountCustomProperty27Label = value;
  }
  public resetAccountCustomProperty27Label() {
    this._accountCustomProperty27Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty27LabelInput() {
    return this._accountCustomProperty27Label;
  }

  // account_custom_property_28_label - computed: true, optional: true, required: false
  private _accountCustomProperty28Label?: string; 
  public get accountCustomProperty28Label() {
    return this.getStringAttribute('account_custom_property_28_label');
  }
  public set accountCustomProperty28Label(value: string) {
    this._accountCustomProperty28Label = value;
  }
  public resetAccountCustomProperty28Label() {
    this._accountCustomProperty28Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty28LabelInput() {
    return this._accountCustomProperty28Label;
  }

  // account_custom_property_29_label - computed: true, optional: true, required: false
  private _accountCustomProperty29Label?: string; 
  public get accountCustomProperty29Label() {
    return this.getStringAttribute('account_custom_property_29_label');
  }
  public set accountCustomProperty29Label(value: string) {
    this._accountCustomProperty29Label = value;
  }
  public resetAccountCustomProperty29Label() {
    this._accountCustomProperty29Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty29LabelInput() {
    return this._accountCustomProperty29Label;
  }

  // account_custom_property_2_label - computed: true, optional: true, required: false
  private _accountCustomProperty2Label?: string; 
  public get accountCustomProperty2Label() {
    return this.getStringAttribute('account_custom_property_2_label');
  }
  public set accountCustomProperty2Label(value: string) {
    this._accountCustomProperty2Label = value;
  }
  public resetAccountCustomProperty2Label() {
    this._accountCustomProperty2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty2LabelInput() {
    return this._accountCustomProperty2Label;
  }

  // account_custom_property_30_label - computed: true, optional: true, required: false
  private _accountCustomProperty30Label?: string; 
  public get accountCustomProperty30Label() {
    return this.getStringAttribute('account_custom_property_30_label');
  }
  public set accountCustomProperty30Label(value: string) {
    this._accountCustomProperty30Label = value;
  }
  public resetAccountCustomProperty30Label() {
    this._accountCustomProperty30Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty30LabelInput() {
    return this._accountCustomProperty30Label;
  }

  // account_custom_property_3_label - computed: true, optional: true, required: false
  private _accountCustomProperty3Label?: string; 
  public get accountCustomProperty3Label() {
    return this.getStringAttribute('account_custom_property_3_label');
  }
  public set accountCustomProperty3Label(value: string) {
    this._accountCustomProperty3Label = value;
  }
  public resetAccountCustomProperty3Label() {
    this._accountCustomProperty3Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty3LabelInput() {
    return this._accountCustomProperty3Label;
  }

  // account_custom_property_4_label - computed: true, optional: true, required: false
  private _accountCustomProperty4Label?: string; 
  public get accountCustomProperty4Label() {
    return this.getStringAttribute('account_custom_property_4_label');
  }
  public set accountCustomProperty4Label(value: string) {
    this._accountCustomProperty4Label = value;
  }
  public resetAccountCustomProperty4Label() {
    this._accountCustomProperty4Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty4LabelInput() {
    return this._accountCustomProperty4Label;
  }

  // account_custom_property_5_label - computed: true, optional: true, required: false
  private _accountCustomProperty5Label?: string; 
  public get accountCustomProperty5Label() {
    return this.getStringAttribute('account_custom_property_5_label');
  }
  public set accountCustomProperty5Label(value: string) {
    this._accountCustomProperty5Label = value;
  }
  public resetAccountCustomProperty5Label() {
    this._accountCustomProperty5Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty5LabelInput() {
    return this._accountCustomProperty5Label;
  }

  // account_custom_property_6_label - computed: true, optional: true, required: false
  private _accountCustomProperty6Label?: string; 
  public get accountCustomProperty6Label() {
    return this.getStringAttribute('account_custom_property_6_label');
  }
  public set accountCustomProperty6Label(value: string) {
    this._accountCustomProperty6Label = value;
  }
  public resetAccountCustomProperty6Label() {
    this._accountCustomProperty6Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty6LabelInput() {
    return this._accountCustomProperty6Label;
  }

  // account_custom_property_7_label - computed: true, optional: true, required: false
  private _accountCustomProperty7Label?: string; 
  public get accountCustomProperty7Label() {
    return this.getStringAttribute('account_custom_property_7_label');
  }
  public set accountCustomProperty7Label(value: string) {
    this._accountCustomProperty7Label = value;
  }
  public resetAccountCustomProperty7Label() {
    this._accountCustomProperty7Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty7LabelInput() {
    return this._accountCustomProperty7Label;
  }

  // account_custom_property_8_label - computed: true, optional: true, required: false
  private _accountCustomProperty8Label?: string; 
  public get accountCustomProperty8Label() {
    return this.getStringAttribute('account_custom_property_8_label');
  }
  public set accountCustomProperty8Label(value: string) {
    this._accountCustomProperty8Label = value;
  }
  public resetAccountCustomProperty8Label() {
    this._accountCustomProperty8Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty8LabelInput() {
    return this._accountCustomProperty8Label;
  }

  // account_custom_property_9_label - computed: true, optional: true, required: false
  private _accountCustomProperty9Label?: string; 
  public get accountCustomProperty9Label() {
    return this.getStringAttribute('account_custom_property_9_label');
  }
  public set accountCustomProperty9Label(value: string) {
    this._accountCustomProperty9Label = value;
  }
  public resetAccountCustomProperty9Label() {
    this._accountCustomProperty9Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty9LabelInput() {
    return this._accountCustomProperty9Label;
  }

  // account_name_rule - computed: true, optional: false, required: false
  public get accountNameRule() {
    return this.getStringAttribute('account_name_rule');
  }

  // account_name_validator_regex - computed: true, optional: false, required: false
  public get accountNameValidatorRegex() {
    return this.getStringAttribute('account_name_validator_regex');
  }

  // account_type_no_deprovision - computed: true, optional: false, required: false
  public get accountTypeNoDeprovision() {
    return this.getStringAttribute('account_type_no_deprovision');
  }

  // account_type_no_password_change - computed: true, optional: false, required: false
  public get accountTypeNoPasswordChange() {
    return this.getStringAttribute('account_type_no_password_change');
  }

  // allow_change_password_sqlquery - computed: true, optional: false, required: false
  public get allowChangePasswordSqlquery() {
    return this.getStringAttribute('allow_change_password_sqlquery');
  }

  // allow_remove_all_role_on_request - computed: true, optional: false, required: false
  public get allowRemoveAllRoleOnRequest() {
    return this.getStringAttribute('allow_remove_all_role_on_request');
  }

  // base_line_config - computed: true, optional: false, required: false
  public get baseLineConfig() {
    return this.getStringAttribute('base_line_config');
  }

  // change_password_access_query - computed: true, optional: false, required: false
  public get changePasswordAccessQuery() {
    return this.getStringAttribute('change_password_access_query');
  }

  // connectionconfig - computed: true, optional: false, required: false
  public get connectionconfig() {
    return this.getStringAttribute('connectionconfig');
  }

  // connectionconfig_as_json - computed: true, optional: false, required: false
  public get connectionconfigAsJson() {
    return this.getStringAttribute('connectionconfig_as_json');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // create_ent_taskfor_remove_acc - computed: true, optional: false, required: false
  public get createEntTaskforRemoveAcc() {
    return this.getStringAttribute('create_ent_taskfor_remove_acc');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_from - computed: true, optional: false, required: false
  public get createdFrom() {
    return this.getStringAttribute('created_from');
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

  // custom_property31_label - computed: true, optional: true, required: false
  private _customProperty31Label?: string; 
  public get customProperty31Label() {
    return this.getStringAttribute('custom_property31_label');
  }
  public set customProperty31Label(value: string) {
    this._customProperty31Label = value;
  }
  public resetCustomProperty31Label() {
    this._customProperty31Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty31LabelInput() {
    return this._customProperty31Label;
  }

  // custom_property32 - computed: true, optional: false, required: false
  public get customProperty32() {
    return this.getStringAttribute('custom_property32');
  }

  // custom_property32_label - computed: true, optional: true, required: false
  private _customProperty32Label?: string; 
  public get customProperty32Label() {
    return this.getStringAttribute('custom_property32_label');
  }
  public set customProperty32Label(value: string) {
    this._customProperty32Label = value;
  }
  public resetCustomProperty32Label() {
    this._customProperty32Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty32LabelInput() {
    return this._customProperty32Label;
  }

  // custom_property33 - computed: true, optional: false, required: false
  public get customProperty33() {
    return this.getStringAttribute('custom_property33');
  }

  // custom_property33_label - computed: true, optional: true, required: false
  private _customProperty33Label?: string; 
  public get customProperty33Label() {
    return this.getStringAttribute('custom_property33_label');
  }
  public set customProperty33Label(value: string) {
    this._customProperty33Label = value;
  }
  public resetCustomProperty33Label() {
    this._customProperty33Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty33LabelInput() {
    return this._customProperty33Label;
  }

  // custom_property34 - computed: true, optional: false, required: false
  public get customProperty34() {
    return this.getStringAttribute('custom_property34');
  }

  // custom_property34_label - computed: true, optional: true, required: false
  private _customProperty34Label?: string; 
  public get customProperty34Label() {
    return this.getStringAttribute('custom_property34_label');
  }
  public set customProperty34Label(value: string) {
    this._customProperty34Label = value;
  }
  public resetCustomProperty34Label() {
    this._customProperty34Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty34LabelInput() {
    return this._customProperty34Label;
  }

  // custom_property35 - computed: true, optional: false, required: false
  public get customProperty35() {
    return this.getStringAttribute('custom_property35');
  }

  // custom_property35_label - computed: true, optional: true, required: false
  private _customProperty35Label?: string; 
  public get customProperty35Label() {
    return this.getStringAttribute('custom_property35_label');
  }
  public set customProperty35Label(value: string) {
    this._customProperty35Label = value;
  }
  public resetCustomProperty35Label() {
    this._customProperty35Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty35LabelInput() {
    return this._customProperty35Label;
  }

  // custom_property36 - computed: true, optional: false, required: false
  public get customProperty36() {
    return this.getStringAttribute('custom_property36');
  }

  // custom_property36_label - computed: true, optional: true, required: false
  private _customProperty36Label?: string; 
  public get customProperty36Label() {
    return this.getStringAttribute('custom_property36_label');
  }
  public set customProperty36Label(value: string) {
    this._customProperty36Label = value;
  }
  public resetCustomProperty36Label() {
    this._customProperty36Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty36LabelInput() {
    return this._customProperty36Label;
  }

  // custom_property37 - computed: true, optional: false, required: false
  public get customProperty37() {
    return this.getStringAttribute('custom_property37');
  }

  // custom_property37_label - computed: true, optional: true, required: false
  private _customProperty37Label?: string; 
  public get customProperty37Label() {
    return this.getStringAttribute('custom_property37_label');
  }
  public set customProperty37Label(value: string) {
    this._customProperty37Label = value;
  }
  public resetCustomProperty37Label() {
    this._customProperty37Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty37LabelInput() {
    return this._customProperty37Label;
  }

  // custom_property38 - computed: true, optional: false, required: false
  public get customProperty38() {
    return this.getStringAttribute('custom_property38');
  }

  // custom_property38_label - computed: true, optional: true, required: false
  private _customProperty38Label?: string; 
  public get customProperty38Label() {
    return this.getStringAttribute('custom_property38_label');
  }
  public set customProperty38Label(value: string) {
    this._customProperty38Label = value;
  }
  public resetCustomProperty38Label() {
    this._customProperty38Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty38LabelInput() {
    return this._customProperty38Label;
  }

  // custom_property39 - computed: true, optional: false, required: false
  public get customProperty39() {
    return this.getStringAttribute('custom_property39');
  }

  // custom_property39_label - computed: true, optional: true, required: false
  private _customProperty39Label?: string; 
  public get customProperty39Label() {
    return this.getStringAttribute('custom_property39_label');
  }
  public set customProperty39Label(value: string) {
    this._customProperty39Label = value;
  }
  public resetCustomProperty39Label() {
    this._customProperty39Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty39LabelInput() {
    return this._customProperty39Label;
  }

  // custom_property4 - computed: true, optional: false, required: false
  public get customProperty4() {
    return this.getStringAttribute('custom_property4');
  }

  // custom_property40 - computed: true, optional: false, required: false
  public get customProperty40() {
    return this.getStringAttribute('custom_property40');
  }

  // custom_property40_label - computed: true, optional: true, required: false
  private _customProperty40Label?: string; 
  public get customProperty40Label() {
    return this.getStringAttribute('custom_property40_label');
  }
  public set customProperty40Label(value: string) {
    this._customProperty40Label = value;
  }
  public resetCustomProperty40Label() {
    this._customProperty40Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty40LabelInput() {
    return this._customProperty40Label;
  }

  // custom_property41 - computed: true, optional: false, required: false
  public get customProperty41() {
    return this.getStringAttribute('custom_property41');
  }

  // custom_property41_label - computed: true, optional: true, required: false
  private _customProperty41Label?: string; 
  public get customProperty41Label() {
    return this.getStringAttribute('custom_property41_label');
  }
  public set customProperty41Label(value: string) {
    this._customProperty41Label = value;
  }
  public resetCustomProperty41Label() {
    this._customProperty41Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty41LabelInput() {
    return this._customProperty41Label;
  }

  // custom_property42 - computed: true, optional: false, required: false
  public get customProperty42() {
    return this.getStringAttribute('custom_property42');
  }

  // custom_property42_label - computed: true, optional: true, required: false
  private _customProperty42Label?: string; 
  public get customProperty42Label() {
    return this.getStringAttribute('custom_property42_label');
  }
  public set customProperty42Label(value: string) {
    this._customProperty42Label = value;
  }
  public resetCustomProperty42Label() {
    this._customProperty42Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty42LabelInput() {
    return this._customProperty42Label;
  }

  // custom_property43 - computed: true, optional: false, required: false
  public get customProperty43() {
    return this.getStringAttribute('custom_property43');
  }

  // custom_property43_label - computed: true, optional: true, required: false
  private _customProperty43Label?: string; 
  public get customProperty43Label() {
    return this.getStringAttribute('custom_property43_label');
  }
  public set customProperty43Label(value: string) {
    this._customProperty43Label = value;
  }
  public resetCustomProperty43Label() {
    this._customProperty43Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty43LabelInput() {
    return this._customProperty43Label;
  }

  // custom_property44 - computed: true, optional: false, required: false
  public get customProperty44() {
    return this.getStringAttribute('custom_property44');
  }

  // custom_property44_label - computed: true, optional: true, required: false
  private _customProperty44Label?: string; 
  public get customProperty44Label() {
    return this.getStringAttribute('custom_property44_label');
  }
  public set customProperty44Label(value: string) {
    this._customProperty44Label = value;
  }
  public resetCustomProperty44Label() {
    this._customProperty44Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty44LabelInput() {
    return this._customProperty44Label;
  }

  // custom_property45 - computed: true, optional: false, required: false
  public get customProperty45() {
    return this.getStringAttribute('custom_property45');
  }

  // custom_property45_label - computed: true, optional: true, required: false
  private _customProperty45Label?: string; 
  public get customProperty45Label() {
    return this.getStringAttribute('custom_property45_label');
  }
  public set customProperty45Label(value: string) {
    this._customProperty45Label = value;
  }
  public resetCustomProperty45Label() {
    this._customProperty45Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty45LabelInput() {
    return this._customProperty45Label;
  }

  // custom_property46_label - computed: true, optional: true, required: false
  private _customProperty46Label?: string; 
  public get customProperty46Label() {
    return this.getStringAttribute('custom_property46_label');
  }
  public set customProperty46Label(value: string) {
    this._customProperty46Label = value;
  }
  public resetCustomProperty46Label() {
    this._customProperty46Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty46LabelInput() {
    return this._customProperty46Label;
  }

  // custom_property47_label - computed: true, optional: true, required: false
  private _customProperty47Label?: string; 
  public get customProperty47Label() {
    return this.getStringAttribute('custom_property47_label');
  }
  public set customProperty47Label(value: string) {
    this._customProperty47Label = value;
  }
  public resetCustomProperty47Label() {
    this._customProperty47Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty47LabelInput() {
    return this._customProperty47Label;
  }

  // custom_property48_label - computed: true, optional: true, required: false
  private _customProperty48Label?: string; 
  public get customProperty48Label() {
    return this.getStringAttribute('custom_property48_label');
  }
  public set customProperty48Label(value: string) {
    this._customProperty48Label = value;
  }
  public resetCustomProperty48Label() {
    this._customProperty48Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty48LabelInput() {
    return this._customProperty48Label;
  }

  // custom_property49_label - computed: true, optional: true, required: false
  private _customProperty49Label?: string; 
  public get customProperty49Label() {
    return this.getStringAttribute('custom_property49_label');
  }
  public set customProperty49Label(value: string) {
    this._customProperty49Label = value;
  }
  public resetCustomProperty49Label() {
    this._customProperty49Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty49LabelInput() {
    return this._customProperty49Label;
  }

  // custom_property5 - computed: true, optional: false, required: false
  public get customProperty5() {
    return this.getStringAttribute('custom_property5');
  }

  // custom_property50_label - computed: true, optional: true, required: false
  private _customProperty50Label?: string; 
  public get customProperty50Label() {
    return this.getStringAttribute('custom_property50_label');
  }
  public set customProperty50Label(value: string) {
    this._customProperty50Label = value;
  }
  public resetCustomProperty50Label() {
    this._customProperty50Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty50LabelInput() {
    return this._customProperty50Label;
  }

  // custom_property51_label - computed: true, optional: true, required: false
  private _customProperty51Label?: string; 
  public get customProperty51Label() {
    return this.getStringAttribute('custom_property51_label');
  }
  public set customProperty51Label(value: string) {
    this._customProperty51Label = value;
  }
  public resetCustomProperty51Label() {
    this._customProperty51Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty51LabelInput() {
    return this._customProperty51Label;
  }

  // custom_property52_label - computed: true, optional: true, required: false
  private _customProperty52Label?: string; 
  public get customProperty52Label() {
    return this.getStringAttribute('custom_property52_label');
  }
  public set customProperty52Label(value: string) {
    this._customProperty52Label = value;
  }
  public resetCustomProperty52Label() {
    this._customProperty52Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty52LabelInput() {
    return this._customProperty52Label;
  }

  // custom_property53_label - computed: true, optional: true, required: false
  private _customProperty53Label?: string; 
  public get customProperty53Label() {
    return this.getStringAttribute('custom_property53_label');
  }
  public set customProperty53Label(value: string) {
    this._customProperty53Label = value;
  }
  public resetCustomProperty53Label() {
    this._customProperty53Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty53LabelInput() {
    return this._customProperty53Label;
  }

  // custom_property54_label - computed: true, optional: true, required: false
  private _customProperty54Label?: string; 
  public get customProperty54Label() {
    return this.getStringAttribute('custom_property54_label');
  }
  public set customProperty54Label(value: string) {
    this._customProperty54Label = value;
  }
  public resetCustomProperty54Label() {
    this._customProperty54Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty54LabelInput() {
    return this._customProperty54Label;
  }

  // custom_property55_label - computed: true, optional: true, required: false
  private _customProperty55Label?: string; 
  public get customProperty55Label() {
    return this.getStringAttribute('custom_property55_label');
  }
  public set customProperty55Label(value: string) {
    this._customProperty55Label = value;
  }
  public resetCustomProperty55Label() {
    this._customProperty55Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty55LabelInput() {
    return this._customProperty55Label;
  }

  // custom_property56_label - computed: true, optional: true, required: false
  private _customProperty56Label?: string; 
  public get customProperty56Label() {
    return this.getStringAttribute('custom_property56_label');
  }
  public set customProperty56Label(value: string) {
    this._customProperty56Label = value;
  }
  public resetCustomProperty56Label() {
    this._customProperty56Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty56LabelInput() {
    return this._customProperty56Label;
  }

  // custom_property57_label - computed: true, optional: true, required: false
  private _customProperty57Label?: string; 
  public get customProperty57Label() {
    return this.getStringAttribute('custom_property57_label');
  }
  public set customProperty57Label(value: string) {
    this._customProperty57Label = value;
  }
  public resetCustomProperty57Label() {
    this._customProperty57Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty57LabelInput() {
    return this._customProperty57Label;
  }

  // custom_property58_label - computed: true, optional: true, required: false
  private _customProperty58Label?: string; 
  public get customProperty58Label() {
    return this.getStringAttribute('custom_property58_label');
  }
  public set customProperty58Label(value: string) {
    this._customProperty58Label = value;
  }
  public resetCustomProperty58Label() {
    this._customProperty58Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty58LabelInput() {
    return this._customProperty58Label;
  }

  // custom_property59_label - computed: true, optional: true, required: false
  private _customProperty59Label?: string; 
  public get customProperty59Label() {
    return this.getStringAttribute('custom_property59_label');
  }
  public set customProperty59Label(value: string) {
    this._customProperty59Label = value;
  }
  public resetCustomProperty59Label() {
    this._customProperty59Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty59LabelInput() {
    return this._customProperty59Label;
  }

  // custom_property6 - computed: true, optional: false, required: false
  public get customProperty6() {
    return this.getStringAttribute('custom_property6');
  }

  // custom_property60_label - computed: true, optional: true, required: false
  private _customProperty60Label?: string; 
  public get customProperty60Label() {
    return this.getStringAttribute('custom_property60_label');
  }
  public set customProperty60Label(value: string) {
    this._customProperty60Label = value;
  }
  public resetCustomProperty60Label() {
    this._customProperty60Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty60LabelInput() {
    return this._customProperty60Label;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disableaccountrequest - computed: true, optional: false, required: false
  public get disableaccountrequest() {
    return this.getStringAttribute('disableaccountrequest');
  }

  // disableaccountrequest_service_account - computed: true, optional: false, required: false
  public get disableaccountrequestServiceAccount() {
    return this.getStringAttribute('disableaccountrequest_service_account');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enable_copy_access - computed: true, optional: false, required: false
  public get enableCopyAccess() {
    return this.getStringAttribute('enable_copy_access');
  }

  // endpoint_config - computed: true, optional: false, required: false
  public get endpointConfig() {
    return this.getStringAttribute('endpoint_config');
  }

  // endpointname - computed: true, optional: false, required: false
  public get endpointname() {
    return this.getStringAttribute('endpointname');
  }

  // ents_with_new_account - computed: true, optional: false, required: false
  public get entsWithNewAccount() {
    return this.getStringAttribute('ents_with_new_account');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_type - computed: true, optional: false, required: false
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }

  // ownerkey - computed: true, optional: false, required: false
  public get ownerkey() {
    return this.getStringAttribute('ownerkey');
  }

  // parent_account_pattern - computed: true, optional: false, required: false
  public get parentAccountPattern() {
    return this.getStringAttribute('parent_account_pattern');
  }

  // parent_endpoint - computed: true, optional: false, required: false
  public get parentEndpoint() {
    return this.getStringAttribute('parent_endpoint');
  }

  // plugin_configs - computed: true, optional: false, required: false
  public get pluginConfigs() {
    return this.getStringAttribute('plugin_configs');
  }

  // primary_account_type - computed: true, optional: false, required: false
  public get primaryAccountType() {
    return this.getStringAttribute('primary_account_type');
  }

  // requestable - computed: true, optional: false, required: false
  public get requestable() {
    return this.getStringAttribute('requestable');
  }

  // requestableapplication - computed: true, optional: false, required: false
  public get requestableapplication() {
    return this.getStringAttribute('requestableapplication');
  }

  // requestowner - computed: true, optional: false, required: false
  public get requestowner() {
    return this.getStringAttribute('requestowner');
  }

  // requestownertype - computed: true, optional: false, required: false
  public get requestownertype() {
    return this.getStringAttribute('requestownertype');
  }

  // role_type_as_json - computed: true, optional: false, required: false
  public get roleTypeAsJson() {
    return this.getStringAttribute('role_type_as_json');
  }

  // securitysystem - computed: true, optional: false, required: false
  public get securitysystem() {
    return this.getStringAttribute('securitysystem');
  }

  // service_account_access_query - computed: true, optional: false, required: false
  public get serviceAccountAccessQuery() {
    return this.getStringAttribute('service_account_access_query');
  }

  // service_account_name_rule - computed: true, optional: false, required: false
  public get serviceAccountNameRule() {
    return this.getStringAttribute('service_account_name_rule');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_config - computed: true, optional: false, required: false
  public get statusConfig() {
    return this.getStringAttribute('status_config');
  }

  // status_for_unique_account - computed: true, optional: false, required: false
  public get statusForUniqueAccount() {
    return this.getStringAttribute('status_for_unique_account');
  }

  // taskemailtemplates - computed: true, optional: false, required: false
  public get taskemailtemplates() {
    return this.getStringAttribute('taskemailtemplates');
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // user_account_correlation_rule - computed: true, optional: false, required: false
  public get userAccountCorrelationRule() {
    return this.getStringAttribute('user_account_correlation_rule');
  }
}

export class DataSaviyntEndpointsDatasourceResultsList extends cdktf.ComplexList {
  public internalValue? : DataSaviyntEndpointsDatasourceResults[] | cdktf.IResolvable

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
  public get(index: number): DataSaviyntEndpointsDatasourceResultsOutputReference {
    return new DataSaviyntEndpointsDatasourceResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource saviynt_endpoints_datasource}
*/
export class DataSaviyntEndpointsDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_endpoints_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntEndpointsDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntEndpointsDatasource to import
  * @param importFromId The id of the existing DataSaviyntEndpointsDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntEndpointsDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_endpoints_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/endpoints_datasource saviynt_endpoints_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntEndpointsDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntEndpointsDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_endpoints_datasource',
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
    this._connectionType = config.connectionType;
    this._displayname = config.displayname;
    this._endpointkey = config.endpointkey;
    this._endpointname = config.endpointname;
    this._filterCriteria = config.filterCriteria;
    this._max = config.max;
    this._owner = config.owner;
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

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // display_count - computed: true, optional: false, required: false
  public get displayCount() {
    return this.getNumberAttribute('display_count');
  }

  // displayname - computed: false, optional: true, required: false
  private _displayname?: string; 
  public get displayname() {
    return this.getStringAttribute('displayname');
  }
  public set displayname(value: string) {
    this._displayname = value;
  }
  public resetDisplayname() {
    this._displayname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaynameInput() {
    return this._displayname;
  }

  // endpointkey - computed: false, optional: true, required: false
  private _endpointkey?: string[]; 
  public get endpointkey() {
    return this.getListAttribute('endpointkey');
  }
  public set endpointkey(value: string[]) {
    this._endpointkey = value;
  }
  public resetEndpointkey() {
    this._endpointkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointkeyInput() {
    return this._endpointkey;
  }

  // endpointname - computed: false, optional: true, required: false
  private _endpointname?: string; 
  public get endpointname() {
    return this.getStringAttribute('endpointname');
  }
  public set endpointname(value: string) {
    this._endpointname = value;
  }
  public resetEndpointname() {
    this._endpointname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointnameInput() {
    return this._endpointname;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria?: { [key: string]: string }; 
  public get filterCriteria() {
    return this.getStringMapAttribute('filter_criteria');
  }
  public set filterCriteria(value: { [key: string]: string }) {
    this._filterCriteria = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataSaviyntEndpointsDatasourceResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      displayname: cdktf.stringToTerraform(this._displayname),
      endpointkey: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointkey),
      endpointname: cdktf.stringToTerraform(this._endpointname),
      filter_criteria: cdktf.hashMapper(cdktf.stringToTerraform)(this._filterCriteria),
      max: cdktf.stringToTerraform(this._max),
      owner: cdktf.stringToTerraform(this._owner),
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
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      displayname: {
        value: cdktf.stringToHclTerraform(this._displayname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpointkey: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointkey),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpointname: {
        value: cdktf.stringToHclTerraform(this._endpointname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_criteria: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filterCriteria),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max: {
        value: cdktf.stringToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
