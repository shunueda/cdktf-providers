// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/other_thousandeyes_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanOtherThousandeyesFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/other_thousandeyes_feature#feature_profile_id DataSdwanOtherThousandeyesFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/other_thousandeyes_feature#id DataSdwanOtherThousandeyesFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanOtherThousandeyesFeatureVirtualApplication {
}

export function dataSdwanOtherThousandeyesFeatureVirtualApplicationToTerraform(struct?: DataSdwanOtherThousandeyesFeatureVirtualApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanOtherThousandeyesFeatureVirtualApplicationToHclTerraform(struct?: DataSdwanOtherThousandeyesFeatureVirtualApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanOtherThousandeyesFeatureVirtualApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanOtherThousandeyesFeatureVirtualApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanOtherThousandeyesFeatureVirtualApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_group_token - computed: true, optional: false, required: false
  public get accountGroupToken() {
    return this.getStringAttribute('account_group_token');
  }

  // account_group_token_variable - computed: true, optional: false, required: false
  public get accountGroupTokenVariable() {
    return this.getStringAttribute('account_group_token_variable');
  }

  // agent_default_gateway - computed: true, optional: false, required: false
  public get agentDefaultGateway() {
    return this.getStringAttribute('agent_default_gateway');
  }

  // agent_default_gateway_variable - computed: true, optional: false, required: false
  public get agentDefaultGatewayVariable() {
    return this.getStringAttribute('agent_default_gateway_variable');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_variable - computed: true, optional: false, required: false
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
  }

  // management_ip - computed: true, optional: false, required: false
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }

  // management_ip_variable - computed: true, optional: false, required: false
  public get managementIpVariable() {
    return this.getStringAttribute('management_ip_variable');
  }

  // management_subnet_mask - computed: true, optional: false, required: false
  public get managementSubnetMask() {
    return this.getStringAttribute('management_subnet_mask');
  }

  // management_subnet_mask_variable - computed: true, optional: false, required: false
  public get managementSubnetMaskVariable() {
    return this.getStringAttribute('management_subnet_mask_variable');
  }

  // name_server_ip - computed: true, optional: false, required: false
  public get nameServerIp() {
    return this.getStringAttribute('name_server_ip');
  }

  // name_server_ip_variable - computed: true, optional: false, required: false
  public get nameServerIpVariable() {
    return this.getStringAttribute('name_server_ip_variable');
  }

  // pac_url - computed: true, optional: false, required: false
  public get pacUrl() {
    return this.getStringAttribute('pac_url');
  }

  // pac_url_variable - computed: true, optional: false, required: false
  public get pacUrlVariable() {
    return this.getStringAttribute('pac_url_variable');
  }

  // proxy_host - computed: true, optional: false, required: false
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }

  // proxy_host_variable - computed: true, optional: false, required: false
  public get proxyHostVariable() {
    return this.getStringAttribute('proxy_host_variable');
  }

  // proxy_port - computed: true, optional: false, required: false
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }

  // proxy_port_variable - computed: true, optional: false, required: false
  public get proxyPortVariable() {
    return this.getStringAttribute('proxy_port_variable');
  }

  // proxy_type - computed: true, optional: false, required: false
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }

  // vpn_variable - computed: true, optional: false, required: false
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
}

export class DataSdwanOtherThousandeyesFeatureVirtualApplicationList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanOtherThousandeyesFeatureVirtualApplicationOutputReference {
    return new DataSdwanOtherThousandeyesFeatureVirtualApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/other_thousandeyes_feature sdwan_other_thousandeyes_feature}
*/
export class DataSdwanOtherThousandeyesFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_other_thousandeyes_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanOtherThousandeyesFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanOtherThousandeyesFeature to import
  * @param importFromId The id of the existing DataSdwanOtherThousandeyesFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/other_thousandeyes_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanOtherThousandeyesFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_other_thousandeyes_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/other_thousandeyes_feature sdwan_other_thousandeyes_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanOtherThousandeyesFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanOtherThousandeyesFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_other_thousandeyes_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // virtual_application - computed: true, optional: false, required: false
  private _virtualApplication = new DataSdwanOtherThousandeyesFeatureVirtualApplicationList(this, "virtual_application", false);
  public get virtualApplication() {
    return this._virtualApplication;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
