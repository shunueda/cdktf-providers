// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_thousandeyes_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoThousandeyesFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_thousandeyes_feature_template#id DataSdwanCiscoThousandeyesFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_thousandeyes_feature_template#name DataSdwanCiscoThousandeyesFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplications {
}

export function dataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsToTerraform(struct?: DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsToHclTerraform(struct?: DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // te_account_group_token - computed: true, optional: false, required: false
  public get teAccountGroupToken() {
    return this.getStringAttribute('te_account_group_token');
  }

  // te_account_group_token_variable - computed: true, optional: false, required: false
  public get teAccountGroupTokenVariable() {
    return this.getStringAttribute('te_account_group_token_variable');
  }

  // te_agent_ip - computed: true, optional: false, required: false
  public get teAgentIp() {
    return this.getStringAttribute('te_agent_ip');
  }

  // te_agent_ip_variable - computed: true, optional: false, required: false
  public get teAgentIpVariable() {
    return this.getStringAttribute('te_agent_ip_variable');
  }

  // te_default_gateway - computed: true, optional: false, required: false
  public get teDefaultGateway() {
    return this.getStringAttribute('te_default_gateway');
  }

  // te_default_gateway_variable - computed: true, optional: false, required: false
  public get teDefaultGatewayVariable() {
    return this.getStringAttribute('te_default_gateway_variable');
  }

  // te_hostname - computed: true, optional: false, required: false
  public get teHostname() {
    return this.getStringAttribute('te_hostname');
  }

  // te_hostname_variable - computed: true, optional: false, required: false
  public get teHostnameVariable() {
    return this.getStringAttribute('te_hostname_variable');
  }

  // te_name_server - computed: true, optional: false, required: false
  public get teNameServer() {
    return this.getStringAttribute('te_name_server');
  }

  // te_name_server_variable - computed: true, optional: false, required: false
  public get teNameServerVariable() {
    return this.getStringAttribute('te_name_server_variable');
  }

  // te_pac_url - computed: true, optional: false, required: false
  public get tePacUrl() {
    return this.getStringAttribute('te_pac_url');
  }

  // te_pac_url_variable - computed: true, optional: false, required: false
  public get tePacUrlVariable() {
    return this.getStringAttribute('te_pac_url_variable');
  }

  // te_proxy_host - computed: true, optional: false, required: false
  public get teProxyHost() {
    return this.getStringAttribute('te_proxy_host');
  }

  // te_proxy_host_variable - computed: true, optional: false, required: false
  public get teProxyHostVariable() {
    return this.getStringAttribute('te_proxy_host_variable');
  }

  // te_proxy_port - computed: true, optional: false, required: false
  public get teProxyPort() {
    return this.getNumberAttribute('te_proxy_port');
  }

  // te_proxy_port_variable - computed: true, optional: false, required: false
  public get teProxyPortVariable() {
    return this.getStringAttribute('te_proxy_port_variable');
  }

  // te_vpn - computed: true, optional: false, required: false
  public get teVpn() {
    return this.getNumberAttribute('te_vpn');
  }

  // te_vpn_variable - computed: true, optional: false, required: false
  public get teVpnVariable() {
    return this.getStringAttribute('te_vpn_variable');
  }

  // te_web_proxy_type - computed: true, optional: false, required: false
  public get teWebProxyType() {
    return this.getStringAttribute('te_web_proxy_type');
  }
}

export class DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsOutputReference {
    return new DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_thousandeyes_feature_template sdwan_cisco_thousandeyes_feature_template}
*/
export class DataSdwanCiscoThousandeyesFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_thousandeyes_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoThousandeyesFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoThousandeyesFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoThousandeyesFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_thousandeyes_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoThousandeyesFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_thousandeyes_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_thousandeyes_feature_template sdwan_cisco_thousandeyes_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoThousandeyesFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoThousandeyesFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_thousandeyes_feature_template',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // virtual_applications - computed: true, optional: false, required: false
  private _virtualApplications = new DataSdwanCiscoThousandeyesFeatureTemplateVirtualApplicationsList(this, "virtual_applications", false);
  public get virtualApplications() {
    return this._virtualApplications;
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
