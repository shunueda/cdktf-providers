// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_wireless_lan_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoWirelessLanFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_wireless_lan_feature_template#id DataSdwanCiscoWirelessLanFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_wireless_lan_feature_template#name DataSdwanCiscoWirelessLanFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoWirelessLanFeatureTemplateSsids {
}

export function dataSdwanCiscoWirelessLanFeatureTemplateSsidsToTerraform(struct?: DataSdwanCiscoWirelessLanFeatureTemplateSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoWirelessLanFeatureTemplateSsidsToHclTerraform(struct?: DataSdwanCiscoWirelessLanFeatureTemplateSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoWirelessLanFeatureTemplateSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoWirelessLanFeatureTemplateSsids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoWirelessLanFeatureTemplateSsids | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }

  // admin_state_variable - computed: true, optional: false, required: false
  public get adminStateVariable() {
    return this.getStringAttribute('admin_state_variable');
  }

  // broadcast_ssid - computed: true, optional: false, required: false
  public get broadcastSsid() {
    return this.getBooleanAttribute('broadcast_ssid');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // passphrase_variable - computed: true, optional: false, required: false
  public get passphraseVariable() {
    return this.getStringAttribute('passphrase_variable');
  }

  // qos_profile - computed: true, optional: false, required: false
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }

  // qos_profile_variable - computed: true, optional: false, required: false
  public get qosProfileVariable() {
    return this.getStringAttribute('qos_profile_variable');
  }

  // radio_type - computed: true, optional: false, required: false
  public get radioType() {
    return this.getStringAttribute('radio_type');
  }

  // radio_type_variable - computed: true, optional: false, required: false
  public get radioTypeVariable() {
    return this.getStringAttribute('radio_type_variable');
  }

  // radius_server_ip - computed: true, optional: false, required: false
  public get radiusServerIp() {
    return this.getStringAttribute('radius_server_ip');
  }

  // radius_server_ip_variable - computed: true, optional: false, required: false
  public get radiusServerIpVariable() {
    return this.getStringAttribute('radius_server_ip_variable');
  }

  // radius_server_port - computed: true, optional: false, required: false
  public get radiusServerPort() {
    return this.getNumberAttribute('radius_server_port');
  }

  // radius_server_port_variable - computed: true, optional: false, required: false
  public get radiusServerPortVariable() {
    return this.getStringAttribute('radius_server_port_variable');
  }

  // radius_server_secret - computed: true, optional: false, required: false
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }

  // radius_server_secret_variable - computed: true, optional: false, required: false
  public get radiusServerSecretVariable() {
    return this.getStringAttribute('radius_server_secret_variable');
  }

  // security_type - computed: true, optional: false, required: false
  public get securityType() {
    return this.getStringAttribute('security_type');
  }

  // security_type_variable - computed: true, optional: false, required: false
  public get securityTypeVariable() {
    return this.getStringAttribute('security_type_variable');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_id_variable - computed: true, optional: false, required: false
  public get vlanIdVariable() {
    return this.getStringAttribute('vlan_id_variable');
  }

  // wireless_network_name - computed: true, optional: false, required: false
  public get wirelessNetworkName() {
    return this.getStringAttribute('wireless_network_name');
  }
}

export class DataSdwanCiscoWirelessLanFeatureTemplateSsidsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoWirelessLanFeatureTemplateSsidsOutputReference {
    return new DataSdwanCiscoWirelessLanFeatureTemplateSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_wireless_lan_feature_template sdwan_cisco_wireless_lan_feature_template}
*/
export class DataSdwanCiscoWirelessLanFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_wireless_lan_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoWirelessLanFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoWirelessLanFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoWirelessLanFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_wireless_lan_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoWirelessLanFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_wireless_lan_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_wireless_lan_feature_template sdwan_cisco_wireless_lan_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoWirelessLanFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoWirelessLanFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_wireless_lan_feature_template',
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

  // controller_default_gateway - computed: true, optional: false, required: false
  public get controllerDefaultGateway() {
    return this.getStringAttribute('controller_default_gateway');
  }

  // controller_default_gateway_variable - computed: true, optional: false, required: false
  public get controllerDefaultGatewayVariable() {
    return this.getStringAttribute('controller_default_gateway_variable');
  }

  // controller_ip_address - computed: true, optional: false, required: false
  public get controllerIpAddress() {
    return this.getStringAttribute('controller_ip_address');
  }

  // controller_ip_address_variable - computed: true, optional: false, required: false
  public get controllerIpAddressVariable() {
    return this.getStringAttribute('controller_ip_address_variable');
  }

  // controller_subnet_mask - computed: true, optional: false, required: false
  public get controllerSubnetMask() {
    return this.getStringAttribute('controller_subnet_mask');
  }

  // controller_subnet_mask_variable - computed: true, optional: false, required: false
  public get controllerSubnetMaskVariable() {
    return this.getStringAttribute('controller_subnet_mask_variable');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // country_variable - computed: true, optional: false, required: false
  public get countryVariable() {
    return this.getStringAttribute('country_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_variable - computed: true, optional: false, required: false
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }

  // shutdown_2_4ghz - computed: true, optional: false, required: false
  public get shutdown24Ghz() {
    return this.getBooleanAttribute('shutdown_2_4ghz');
  }

  // shutdown_2_4ghz_variable - computed: true, optional: false, required: false
  public get shutdown24GhzVariable() {
    return this.getStringAttribute('shutdown_2_4ghz_variable');
  }

  // shutdown_5ghz - computed: true, optional: false, required: false
  public get shutdown5Ghz() {
    return this.getBooleanAttribute('shutdown_5ghz');
  }

  // shutdown_5ghz_variable - computed: true, optional: false, required: false
  public get shutdown5GhzVariable() {
    return this.getStringAttribute('shutdown_5ghz_variable');
  }

  // ssids - computed: true, optional: false, required: false
  private _ssids = new DataSdwanCiscoWirelessLanFeatureTemplateSsidsList(this, "ssids", false);
  public get ssids() {
    return this._ssids;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // username_variable - computed: true, optional: false, required: false
  public get usernameVariable() {
    return this.getStringAttribute('username_variable');
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
