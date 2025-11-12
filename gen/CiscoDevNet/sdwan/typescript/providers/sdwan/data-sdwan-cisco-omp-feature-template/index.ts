// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_omp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoOmpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_omp_feature_template#id DataSdwanCiscoOmpFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_omp_feature_template#name DataSdwanCiscoOmpFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4Routes {
}

export function dataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesToTerraform(struct?: DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesToHclTerraform(struct?: DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_external_ospf - computed: true, optional: false, required: false
  public get advertiseExternalOspf() {
    return this.getStringAttribute('advertise_external_ospf');
  }

  // advertise_external_ospf_variable - computed: true, optional: false, required: false
  public get advertiseExternalOspfVariable() {
    return this.getStringAttribute('advertise_external_ospf_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesOutputReference {
    return new DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6Routes {
}

export function dataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesToTerraform(struct?: DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesToHclTerraform(struct?: DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesOutputReference {
    return new DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_omp_feature_template sdwan_cisco_omp_feature_template}
*/
export class DataSdwanCiscoOmpFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_omp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoOmpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoOmpFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoOmpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_omp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoOmpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_omp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_omp_feature_template sdwan_cisco_omp_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoOmpFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoOmpFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_omp_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_ipv4_routes - computed: true, optional: false, required: false
  private _advertiseIpv4Routes = new DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv4RoutesList(this, "advertise_ipv4_routes", false);
  public get advertiseIpv4Routes() {
    return this._advertiseIpv4Routes;
  }

  // advertise_ipv6_routes - computed: true, optional: false, required: false
  private _advertiseIpv6Routes = new DataSdwanCiscoOmpFeatureTemplateAdvertiseIpv6RoutesList(this, "advertise_ipv6_routes", false);
  public get advertiseIpv6Routes() {
    return this._advertiseIpv6Routes;
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // advertisement_interval_variable - computed: true, optional: false, required: false
  public get advertisementIntervalVariable() {
    return this.getStringAttribute('advertisement_interval_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // ecmp_limit - computed: true, optional: false, required: false
  public get ecmpLimit() {
    return this.getNumberAttribute('ecmp_limit');
  }

  // ecmp_limit_variable - computed: true, optional: false, required: false
  public get ecmpLimitVariable() {
    return this.getStringAttribute('ecmp_limit_variable');
  }

  // eor_timer - computed: true, optional: false, required: false
  public get eorTimer() {
    return this.getNumberAttribute('eor_timer');
  }

  // eor_timer_variable - computed: true, optional: false, required: false
  public get eorTimerVariable() {
    return this.getStringAttribute('eor_timer_variable');
  }

  // graceful_restart - computed: true, optional: false, required: false
  public get gracefulRestart() {
    return this.getBooleanAttribute('graceful_restart');
  }

  // graceful_restart_timer - computed: true, optional: false, required: false
  public get gracefulRestartTimer() {
    return this.getNumberAttribute('graceful_restart_timer');
  }

  // graceful_restart_timer_variable - computed: true, optional: false, required: false
  public get gracefulRestartTimerVariable() {
    return this.getStringAttribute('graceful_restart_timer_variable');
  }

  // graceful_restart_variable - computed: true, optional: false, required: false
  public get gracefulRestartVariable() {
    return this.getStringAttribute('graceful_restart_variable');
  }

  // holdtime - computed: true, optional: false, required: false
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }

  // holdtime_variable - computed: true, optional: false, required: false
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_region_path_length - computed: true, optional: false, required: false
  public get ignoreRegionPathLength() {
    return this.getBooleanAttribute('ignore_region_path_length');
  }

  // ignore_region_path_length_variable - computed: true, optional: false, required: false
  public get ignoreRegionPathLengthVariable() {
    return this.getStringAttribute('ignore_region_path_length_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // omp_admin_distance_ipv4 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }

  // omp_admin_distance_ipv4_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }

  // omp_admin_distance_ipv6 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }

  // omp_admin_distance_ipv6_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }

  // overlay_as - computed: true, optional: false, required: false
  public get overlayAs() {
    return this.getNumberAttribute('overlay_as');
  }

  // overlay_as_variable - computed: true, optional: false, required: false
  public get overlayAsVariable() {
    return this.getStringAttribute('overlay_as_variable');
  }

  // send_path_limit - computed: true, optional: false, required: false
  public get sendPathLimit() {
    return this.getNumberAttribute('send_path_limit');
  }

  // send_path_limit_variable - computed: true, optional: false, required: false
  public get sendPathLimitVariable() {
    return this.getStringAttribute('send_path_limit_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // transport_gateway - computed: true, optional: false, required: false
  public get transportGateway() {
    return this.getStringAttribute('transport_gateway');
  }

  // transport_gateway_variable - computed: true, optional: false, required: false
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
