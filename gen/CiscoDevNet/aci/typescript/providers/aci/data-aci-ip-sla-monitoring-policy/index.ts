// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciIpSlaMonitoringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#annotation DataAciIpSlaMonitoringPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#description DataAciIpSlaMonitoringPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#http_uri DataAciIpSlaMonitoringPolicy#http_uri}
  */
  readonly httpUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#http_version DataAciIpSlaMonitoringPolicy#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#id DataAciIpSlaMonitoringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#name DataAciIpSlaMonitoringPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#name_alias DataAciIpSlaMonitoringPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#request_data_size DataAciIpSlaMonitoringPolicy#request_data_size}
  */
  readonly requestDataSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#sla_detect_multiplier DataAciIpSlaMonitoringPolicy#sla_detect_multiplier}
  */
  readonly slaDetectMultiplier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#sla_frequency DataAciIpSlaMonitoringPolicy#sla_frequency}
  */
  readonly slaFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#sla_port DataAciIpSlaMonitoringPolicy#sla_port}
  */
  readonly slaPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#sla_type DataAciIpSlaMonitoringPolicy#sla_type}
  */
  readonly slaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#tenant_dn DataAciIpSlaMonitoringPolicy#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#threshold DataAciIpSlaMonitoringPolicy#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#timeout DataAciIpSlaMonitoringPolicy#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#traffic_class_value DataAciIpSlaMonitoringPolicy#traffic_class_value}
  */
  readonly trafficClassValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#type_of_service DataAciIpSlaMonitoringPolicy#type_of_service}
  */
  readonly typeOfService?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy aci_ip_sla_monitoring_policy}
*/
export class DataAciIpSlaMonitoringPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_ip_sla_monitoring_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciIpSlaMonitoringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciIpSlaMonitoringPolicy to import
  * @param importFromId The id of the existing DataAciIpSlaMonitoringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciIpSlaMonitoringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_ip_sla_monitoring_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ip_sla_monitoring_policy aci_ip_sla_monitoring_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciIpSlaMonitoringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciIpSlaMonitoringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_ip_sla_monitoring_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._httpUri = config.httpUri;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._requestDataSize = config.requestDataSize;
    this._slaDetectMultiplier = config.slaDetectMultiplier;
    this._slaFrequency = config.slaFrequency;
    this._slaPort = config.slaPort;
    this._slaType = config.slaType;
    this._tenantDn = config.tenantDn;
    this._threshold = config.threshold;
    this._timeout = config.timeout;
    this._trafficClassValue = config.trafficClassValue;
    this._typeOfService = config.typeOfService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // request_data_size - computed: true, optional: true, required: false
  private _requestDataSize?: string; 
  public get requestDataSize() {
    return this.getStringAttribute('request_data_size');
  }
  public set requestDataSize(value: string) {
    this._requestDataSize = value;
  }
  public resetRequestDataSize() {
    this._requestDataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDataSizeInput() {
    return this._requestDataSize;
  }

  // sla_detect_multiplier - computed: true, optional: true, required: false
  private _slaDetectMultiplier?: string; 
  public get slaDetectMultiplier() {
    return this.getStringAttribute('sla_detect_multiplier');
  }
  public set slaDetectMultiplier(value: string) {
    this._slaDetectMultiplier = value;
  }
  public resetSlaDetectMultiplier() {
    this._slaDetectMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaDetectMultiplierInput() {
    return this._slaDetectMultiplier;
  }

  // sla_frequency - computed: true, optional: true, required: false
  private _slaFrequency?: string; 
  public get slaFrequency() {
    return this.getStringAttribute('sla_frequency');
  }
  public set slaFrequency(value: string) {
    this._slaFrequency = value;
  }
  public resetSlaFrequency() {
    this._slaFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFrequencyInput() {
    return this._slaFrequency;
  }

  // sla_port - computed: true, optional: true, required: false
  private _slaPort?: string; 
  public get slaPort() {
    return this.getStringAttribute('sla_port');
  }
  public set slaPort(value: string) {
    this._slaPort = value;
  }
  public resetSlaPort() {
    this._slaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPortInput() {
    return this._slaPort;
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

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // traffic_class_value - computed: true, optional: true, required: false
  private _trafficClassValue?: string; 
  public get trafficClassValue() {
    return this.getStringAttribute('traffic_class_value');
  }
  public set trafficClassValue(value: string) {
    this._trafficClassValue = value;
  }
  public resetTrafficClassValue() {
    this._trafficClassValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassValueInput() {
    return this._trafficClassValue;
  }

  // type_of_service - computed: true, optional: true, required: false
  private _typeOfService?: string; 
  public get typeOfService() {
    return this.getStringAttribute('type_of_service');
  }
  public set typeOfService(value: string) {
    this._typeOfService = value;
  }
  public resetTypeOfService() {
    this._typeOfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfServiceInput() {
    return this._typeOfService;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      http_uri: cdktf.stringToTerraform(this._httpUri),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      request_data_size: cdktf.stringToTerraform(this._requestDataSize),
      sla_detect_multiplier: cdktf.stringToTerraform(this._slaDetectMultiplier),
      sla_frequency: cdktf.stringToTerraform(this._slaFrequency),
      sla_port: cdktf.stringToTerraform(this._slaPort),
      sla_type: cdktf.stringToTerraform(this._slaType),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      threshold: cdktf.stringToTerraform(this._threshold),
      timeout: cdktf.stringToTerraform(this._timeout),
      traffic_class_value: cdktf.stringToTerraform(this._trafficClassValue),
      type_of_service: cdktf.stringToTerraform(this._typeOfService),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_data_size: {
        value: cdktf.stringToHclTerraform(this._requestDataSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_detect_multiplier: {
        value: cdktf.stringToHclTerraform(this._slaDetectMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_frequency: {
        value: cdktf.stringToHclTerraform(this._slaFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_port: {
        value: cdktf.stringToHclTerraform(this._slaPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_type: {
        value: cdktf.stringToHclTerraform(this._slaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.stringToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_class_value: {
        value: cdktf.stringToHclTerraform(this._trafficClassValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_of_service: {
        value: cdktf.stringToHclTerraform(this._typeOfService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
