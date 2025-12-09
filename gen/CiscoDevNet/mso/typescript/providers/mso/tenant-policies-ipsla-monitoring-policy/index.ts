// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantPoliciesIpslaMonitoringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#description TenantPoliciesIpslaMonitoringPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#destination_port TenantPoliciesIpslaMonitoringPolicy#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#detect_multiplier TenantPoliciesIpslaMonitoringPolicy#detect_multiplier}
  */
  readonly detectMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#http_uri TenantPoliciesIpslaMonitoringPolicy#http_uri}
  */
  readonly httpUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#http_version TenantPoliciesIpslaMonitoringPolicy#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#id TenantPoliciesIpslaMonitoringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#ipv6_traffic_class TenantPoliciesIpslaMonitoringPolicy#ipv6_traffic_class}
  */
  readonly ipv6TrafficClass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#name TenantPoliciesIpslaMonitoringPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#operation_timeout TenantPoliciesIpslaMonitoringPolicy#operation_timeout}
  */
  readonly operationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#request_data_size TenantPoliciesIpslaMonitoringPolicy#request_data_size}
  */
  readonly requestDataSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#sla_frequency TenantPoliciesIpslaMonitoringPolicy#sla_frequency}
  */
  readonly slaFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#sla_type TenantPoliciesIpslaMonitoringPolicy#sla_type}
  */
  readonly slaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#template_id TenantPoliciesIpslaMonitoringPolicy#template_id}
  */
  readonly templateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#threshold TenantPoliciesIpslaMonitoringPolicy#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#type_of_service TenantPoliciesIpslaMonitoringPolicy#type_of_service}
  */
  readonly typeOfService?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy mso_tenant_policies_ipsla_monitoring_policy}
*/
export class TenantPoliciesIpslaMonitoringPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_ipsla_monitoring_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantPoliciesIpslaMonitoringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantPoliciesIpslaMonitoringPolicy to import
  * @param importFromId The id of the existing TenantPoliciesIpslaMonitoringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantPoliciesIpslaMonitoringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_ipsla_monitoring_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_ipsla_monitoring_policy mso_tenant_policies_ipsla_monitoring_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantPoliciesIpslaMonitoringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TenantPoliciesIpslaMonitoringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant_policies_ipsla_monitoring_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationPort = config.destinationPort;
    this._detectMultiplier = config.detectMultiplier;
    this._httpUri = config.httpUri;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._ipv6TrafficClass = config.ipv6TrafficClass;
    this._name = config.name;
    this._operationTimeout = config.operationTimeout;
    this._requestDataSize = config.requestDataSize;
    this._slaFrequency = config.slaFrequency;
    this._slaType = config.slaType;
    this._templateId = config.templateId;
    this._threshold = config.threshold;
    this._typeOfService = config.typeOfService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // detect_multiplier - computed: true, optional: true, required: false
  private _detectMultiplier?: number; 
  public get detectMultiplier() {
    return this.getNumberAttribute('detect_multiplier');
  }
  public set detectMultiplier(value: number) {
    this._detectMultiplier = value;
  }
  public resetDetectMultiplier() {
    this._detectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectMultiplierInput() {
    return this._detectMultiplier;
  }

  // http_uri - computed: true, optional: true, required: false
  private _httpUri?: string; 
  public get httpUri() {
    return this.getStringAttribute('http_uri');
  }
  public set httpUri(value: string) {
    this._httpUri = value;
  }
  public resetHttpUri() {
    this._httpUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriInput() {
    return this._httpUri;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // ipv6_traffic_class - computed: true, optional: true, required: false
  private _ipv6TrafficClass?: number; 
  public get ipv6TrafficClass() {
    return this.getNumberAttribute('ipv6_traffic_class');
  }
  public set ipv6TrafficClass(value: number) {
    this._ipv6TrafficClass = value;
  }
  public resetIpv6TrafficClass() {
    this._ipv6TrafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TrafficClassInput() {
    return this._ipv6TrafficClass;
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

  // operation_timeout - computed: true, optional: true, required: false
  private _operationTimeout?: number; 
  public get operationTimeout() {
    return this.getNumberAttribute('operation_timeout');
  }
  public set operationTimeout(value: number) {
    this._operationTimeout = value;
  }
  public resetOperationTimeout() {
    this._operationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTimeoutInput() {
    return this._operationTimeout;
  }

  // request_data_size - computed: true, optional: true, required: false
  private _requestDataSize?: number; 
  public get requestDataSize() {
    return this.getNumberAttribute('request_data_size');
  }
  public set requestDataSize(value: number) {
    this._requestDataSize = value;
  }
  public resetRequestDataSize() {
    this._requestDataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDataSizeInput() {
    return this._requestDataSize;
  }

  // sla_frequency - computed: true, optional: true, required: false
  private _slaFrequency?: number; 
  public get slaFrequency() {
    return this.getNumberAttribute('sla_frequency');
  }
  public set slaFrequency(value: number) {
    this._slaFrequency = value;
  }
  public resetSlaFrequency() {
    this._slaFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFrequencyInput() {
    return this._slaFrequency;
  }

  // sla_type - computed: true, optional: true, required: false
  private _slaType?: string; 
  public get slaType() {
    return this.getStringAttribute('sla_type');
  }
  public set slaType(value: string) {
    this._slaType = value;
  }
  public resetSlaType() {
    this._slaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTypeInput() {
    return this._slaType;
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

  // threshold - computed: true, optional: true, required: false
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

  // type_of_service - computed: true, optional: true, required: false
  private _typeOfService?: number; 
  public get typeOfService() {
    return this.getNumberAttribute('type_of_service');
  }
  public set typeOfService(value: number) {
    this._typeOfService = value;
  }
  public resetTypeOfService() {
    this._typeOfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfServiceInput() {
    return this._typeOfService;
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
      description: cdktf.stringToTerraform(this._description),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      detect_multiplier: cdktf.numberToTerraform(this._detectMultiplier),
      http_uri: cdktf.stringToTerraform(this._httpUri),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      ipv6_traffic_class: cdktf.numberToTerraform(this._ipv6TrafficClass),
      name: cdktf.stringToTerraform(this._name),
      operation_timeout: cdktf.numberToTerraform(this._operationTimeout),
      request_data_size: cdktf.numberToTerraform(this._requestDataSize),
      sla_frequency: cdktf.numberToTerraform(this._slaFrequency),
      sla_type: cdktf.stringToTerraform(this._slaType),
      template_id: cdktf.stringToTerraform(this._templateId),
      threshold: cdktf.numberToTerraform(this._threshold),
      type_of_service: cdktf.numberToTerraform(this._typeOfService),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detect_multiplier: {
        value: cdktf.numberToHclTerraform(this._detectMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_uri: {
        value: cdktf.stringToHclTerraform(this._httpUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
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
      ipv6_traffic_class: {
        value: cdktf.numberToHclTerraform(this._ipv6TrafficClass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_timeout: {
        value: cdktf.numberToHclTerraform(this._operationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_data_size: {
        value: cdktf.numberToHclTerraform(this._requestDataSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sla_frequency: {
        value: cdktf.numberToHclTerraform(this._slaFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sla_type: {
        value: cdktf.stringToHclTerraform(this._slaType),
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
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_of_service: {
        value: cdktf.numberToHclTerraform(this._typeOfService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
