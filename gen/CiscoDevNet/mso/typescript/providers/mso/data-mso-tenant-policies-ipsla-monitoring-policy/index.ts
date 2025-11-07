// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoTenantPoliciesIpslaMonitoringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy#id DataMsoTenantPoliciesIpslaMonitoringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy#name DataMsoTenantPoliciesIpslaMonitoringPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy#template_id DataMsoTenantPoliciesIpslaMonitoringPolicy#template_id}
  */
  readonly templateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy mso_tenant_policies_ipsla_monitoring_policy}
*/
export class DataMsoTenantPoliciesIpslaMonitoringPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_ipsla_monitoring_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoTenantPoliciesIpslaMonitoringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoTenantPoliciesIpslaMonitoringPolicy to import
  * @param importFromId The id of the existing DataMsoTenantPoliciesIpslaMonitoringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoTenantPoliciesIpslaMonitoringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_ipsla_monitoring_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/tenant_policies_ipsla_monitoring_policy mso_tenant_policies_ipsla_monitoring_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoTenantPoliciesIpslaMonitoringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoTenantPoliciesIpslaMonitoringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant_policies_ipsla_monitoring_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
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
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }

  // detect_multiplier - computed: true, optional: false, required: false
  public get detectMultiplier() {
    return this.getNumberAttribute('detect_multiplier');
  }

  // http_uri - computed: true, optional: false, required: false
  public get httpUri() {
    return this.getStringAttribute('http_uri');
  }

  // http_version - computed: true, optional: false, required: false
  public get httpVersion() {
    return this.getStringAttribute('http_version');
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

  // ipv6_traffic_class - computed: true, optional: false, required: false
  public get ipv6TrafficClass() {
    return this.getNumberAttribute('ipv6_traffic_class');
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

  // operation_timeout - computed: true, optional: false, required: false
  public get operationTimeout() {
    return this.getNumberAttribute('operation_timeout');
  }

  // request_data_size - computed: true, optional: false, required: false
  public get requestDataSize() {
    return this.getNumberAttribute('request_data_size');
  }

  // sla_frequency - computed: true, optional: false, required: false
  public get slaFrequency() {
    return this.getNumberAttribute('sla_frequency');
  }

  // sla_type - computed: true, optional: false, required: false
  public get slaType() {
    return this.getStringAttribute('sla_type');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // type_of_service - computed: true, optional: false, required: false
  public get typeOfService() {
    return this.getNumberAttribute('type_of_service');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
