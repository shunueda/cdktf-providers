// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaTrafficForwardingGreVipRecommendedListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#id DataZiaTrafficForwardingGreVipRecommendedList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#include_current_vips DataZiaTrafficForwardingGreVipRecommendedList#include_current_vips}
  */
  readonly includeCurrentVips?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#include_private_service_edge DataZiaTrafficForwardingGreVipRecommendedList#include_private_service_edge}
  */
  readonly includePrivateServiceEdge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#latitude DataZiaTrafficForwardingGreVipRecommendedList#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#longitude DataZiaTrafficForwardingGreVipRecommendedList#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#required_count DataZiaTrafficForwardingGreVipRecommendedList#required_count}
  */
  readonly requiredCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#routable_ip DataZiaTrafficForwardingGreVipRecommendedList#routable_ip}
  */
  readonly routableIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#source_ip DataZiaTrafficForwardingGreVipRecommendedList#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#subcloud DataZiaTrafficForwardingGreVipRecommendedList#subcloud}
  */
  readonly subcloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#within_country_only DataZiaTrafficForwardingGreVipRecommendedList#within_country_only}
  */
  readonly withinCountryOnly?: boolean | cdktf.IResolvable;
}
export interface DataZiaTrafficForwardingGreVipRecommendedListListStruct {
}

export function dataZiaTrafficForwardingGreVipRecommendedListListStructToTerraform(struct?: DataZiaTrafficForwardingGreVipRecommendedListListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaTrafficForwardingGreVipRecommendedListListStructToHclTerraform(struct?: DataZiaTrafficForwardingGreVipRecommendedListListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaTrafficForwardingGreVipRecommendedListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaTrafficForwardingGreVipRecommendedListListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaTrafficForwardingGreVipRecommendedListListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // private_service_edge - computed: true, optional: false, required: false
  public get privateServiceEdge() {
    return this.getBooleanAttribute('private_service_edge');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // virtual_ip - computed: true, optional: false, required: false
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }
}

export class DataZiaTrafficForwardingGreVipRecommendedListListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaTrafficForwardingGreVipRecommendedListListStructOutputReference {
    return new DataZiaTrafficForwardingGreVipRecommendedListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list zia_traffic_forwarding_gre_vip_recommended_list}
*/
export class DataZiaTrafficForwardingGreVipRecommendedList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_forwarding_gre_vip_recommended_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaTrafficForwardingGreVipRecommendedList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaTrafficForwardingGreVipRecommendedList to import
  * @param importFromId The id of the existing DataZiaTrafficForwardingGreVipRecommendedList that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaTrafficForwardingGreVipRecommendedList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_forwarding_gre_vip_recommended_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/traffic_forwarding_gre_vip_recommended_list zia_traffic_forwarding_gre_vip_recommended_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaTrafficForwardingGreVipRecommendedListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaTrafficForwardingGreVipRecommendedListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_forwarding_gre_vip_recommended_list',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
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
    this._includeCurrentVips = config.includeCurrentVips;
    this._includePrivateServiceEdge = config.includePrivateServiceEdge;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._requiredCount = config.requiredCount;
    this._routableIp = config.routableIp;
    this._sourceIp = config.sourceIp;
    this._subcloud = config.subcloud;
    this._withinCountryOnly = config.withinCountryOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_current_vips - computed: false, optional: true, required: false
  private _includeCurrentVips?: boolean | cdktf.IResolvable; 
  public get includeCurrentVips() {
    return this.getBooleanAttribute('include_current_vips');
  }
  public set includeCurrentVips(value: boolean | cdktf.IResolvable) {
    this._includeCurrentVips = value;
  }
  public resetIncludeCurrentVips() {
    this._includeCurrentVips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCurrentVipsInput() {
    return this._includeCurrentVips;
  }

  // include_private_service_edge - computed: false, optional: true, required: false
  private _includePrivateServiceEdge?: boolean | cdktf.IResolvable; 
  public get includePrivateServiceEdge() {
    return this.getBooleanAttribute('include_private_service_edge');
  }
  public set includePrivateServiceEdge(value: boolean | cdktf.IResolvable) {
    this._includePrivateServiceEdge = value;
  }
  public resetIncludePrivateServiceEdge() {
    this._includePrivateServiceEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrivateServiceEdgeInput() {
    return this._includePrivateServiceEdge;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataZiaTrafficForwardingGreVipRecommendedListListStructList(this, "list", false);
  public get list() {
    return this._list;
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

  // required_count - computed: false, optional: true, required: false
  private _requiredCount?: number; 
  public get requiredCount() {
    return this.getNumberAttribute('required_count');
  }
  public set requiredCount(value: number) {
    this._requiredCount = value;
  }
  public resetRequiredCount() {
    this._requiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCountInput() {
    return this._requiredCount;
  }

  // routable_ip - computed: false, optional: true, required: false
  private _routableIp?: boolean | cdktf.IResolvable; 
  public get routableIp() {
    return this.getBooleanAttribute('routable_ip');
  }
  public set routableIp(value: boolean | cdktf.IResolvable) {
    this._routableIp = value;
  }
  public resetRoutableIp() {
    this._routableIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routableIpInput() {
    return this._routableIp;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // subcloud - computed: false, optional: true, required: false
  private _subcloud?: string; 
  public get subcloud() {
    return this.getStringAttribute('subcloud');
  }
  public set subcloud(value: string) {
    this._subcloud = value;
  }
  public resetSubcloud() {
    this._subcloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subcloudInput() {
    return this._subcloud;
  }

  // within_country_only - computed: false, optional: true, required: false
  private _withinCountryOnly?: boolean | cdktf.IResolvable; 
  public get withinCountryOnly() {
    return this.getBooleanAttribute('within_country_only');
  }
  public set withinCountryOnly(value: boolean | cdktf.IResolvable) {
    this._withinCountryOnly = value;
  }
  public resetWithinCountryOnly() {
    this._withinCountryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinCountryOnlyInput() {
    return this._withinCountryOnly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_current_vips: cdktf.booleanToTerraform(this._includeCurrentVips),
      include_private_service_edge: cdktf.booleanToTerraform(this._includePrivateServiceEdge),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      required_count: cdktf.numberToTerraform(this._requiredCount),
      routable_ip: cdktf.booleanToTerraform(this._routableIp),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      subcloud: cdktf.stringToTerraform(this._subcloud),
      within_country_only: cdktf.booleanToTerraform(this._withinCountryOnly),
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
      include_current_vips: {
        value: cdktf.booleanToHclTerraform(this._includeCurrentVips),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_private_service_edge: {
        value: cdktf.booleanToHclTerraform(this._includePrivateServiceEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      required_count: {
        value: cdktf.numberToHclTerraform(this._requiredCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routable_ip: {
        value: cdktf.booleanToHclTerraform(this._routableIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subcloud: {
        value: cdktf.stringToHclTerraform(this._subcloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      within_country_only: {
        value: cdktf.booleanToHclTerraform(this._withinCountryOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
