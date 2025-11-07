// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorInternetExitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#billing_tag_ids ConnectorInternetExit#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * ID of the BYOIP to be associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#byoip_id ConnectorInternetExit#byoip_id}
  */
  readonly byoipId?: number;
  /**
  * Public IPs in BYOIP to be used to access the connector. The number of public IPs must be equal to `public_ip_number`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#byoip_public_ips ConnectorInternetExit#byoip_public_ips}
  */
  readonly byoipPublicIps?: string[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#cxp ConnectorInternetExit#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#description ConnectorInternetExit#description}
  */
  readonly description?: string;
  /**
  * The types of egress IPs to use with the connector. Current options are `ALKIRA_PUBLIC_IP` or `BYOIP`. If `BYOIP` is one of the options provided `byoip_id` must also be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#egress_ips ConnectorInternetExit#egress_ips}
  */
  readonly egressIps?: string[];
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#enabled ConnectorInternetExit#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#group ConnectorInternetExit#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#id ConnectorInternetExit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#name ConnectorInternetExit#name}
  */
  readonly name: string;
  /**
  * The number of the public IPs to the connector. Default is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#public_ip_number ConnectorInternetExit#public_ip_number}
  */
  readonly publicIpNumber?: number;
  /**
  * ID of segment associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#segment_id ConnectorInternetExit#segment_id}
  */
  readonly segmentId: string;
  /**
  * The type of the algorithm to be used for traffic distribution.Currently, only `HASHING` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#traffic_distribution_algorithm ConnectorInternetExit#traffic_distribution_algorithm}
  */
  readonly trafficDistributionAlgorithm?: string;
  /**
  * The attributes depends on the algorithm. For now, it's either `DEFAULT` or `SRC_IP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#traffic_distribution_algorithm_attribute ConnectorInternetExit#traffic_distribution_algorithm_attribute}
  */
  readonly trafficDistributionAlgorithmAttribute?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit alkira_connector_internet_exit}
*/
export class ConnectorInternetExit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_internet_exit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorInternetExit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorInternetExit to import
  * @param importFromId The id of the existing ConnectorInternetExit that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorInternetExit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_internet_exit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_internet_exit alkira_connector_internet_exit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorInternetExitConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorInternetExitConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_internet_exit',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingTagIds = config.billingTagIds;
    this._byoipId = config.byoipId;
    this._byoipPublicIps = config.byoipPublicIps;
    this._cxp = config.cxp;
    this._description = config.description;
    this._egressIps = config.egressIps;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._publicIpNumber = config.publicIpNumber;
    this._segmentId = config.segmentId;
    this._trafficDistributionAlgorithm = config.trafficDistributionAlgorithm;
    this._trafficDistributionAlgorithmAttribute = config.trafficDistributionAlgorithmAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // byoip_id - computed: false, optional: true, required: false
  private _byoipId?: number; 
  public get byoipId() {
    return this.getNumberAttribute('byoip_id');
  }
  public set byoipId(value: number) {
    this._byoipId = value;
  }
  public resetByoipId() {
    this._byoipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipIdInput() {
    return this._byoipId;
  }

  // byoip_public_ips - computed: false, optional: true, required: false
  private _byoipPublicIps?: string[]; 
  public get byoipPublicIps() {
    return cdktf.Fn.tolist(this.getListAttribute('byoip_public_ips'));
  }
  public set byoipPublicIps(value: string[]) {
    this._byoipPublicIps = value;
  }
  public resetByoipPublicIps() {
    this._byoipPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipPublicIpsInput() {
    return this._byoipPublicIps;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // egress_ips - computed: false, optional: true, required: false
  private _egressIps?: string[]; 
  public get egressIps() {
    return this.getListAttribute('egress_ips');
  }
  public set egressIps(value: string[]) {
    this._egressIps = value;
  }
  public resetEgressIps() {
    this._egressIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressIpsInput() {
    return this._egressIps;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // public_ip_number - computed: false, optional: true, required: false
  private _publicIpNumber?: number; 
  public get publicIpNumber() {
    return this.getNumberAttribute('public_ip_number');
  }
  public set publicIpNumber(value: number) {
    this._publicIpNumber = value;
  }
  public resetPublicIpNumber() {
    this._publicIpNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpNumberInput() {
    return this._publicIpNumber;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // traffic_distribution_algorithm - computed: false, optional: true, required: false
  private _trafficDistributionAlgorithm?: string; 
  public get trafficDistributionAlgorithm() {
    return this.getStringAttribute('traffic_distribution_algorithm');
  }
  public set trafficDistributionAlgorithm(value: string) {
    this._trafficDistributionAlgorithm = value;
  }
  public resetTrafficDistributionAlgorithm() {
    this._trafficDistributionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionAlgorithmInput() {
    return this._trafficDistributionAlgorithm;
  }

  // traffic_distribution_algorithm_attribute - computed: false, optional: true, required: false
  private _trafficDistributionAlgorithmAttribute?: string; 
  public get trafficDistributionAlgorithmAttribute() {
    return this.getStringAttribute('traffic_distribution_algorithm_attribute');
  }
  public set trafficDistributionAlgorithmAttribute(value: string) {
    this._trafficDistributionAlgorithmAttribute = value;
  }
  public resetTrafficDistributionAlgorithmAttribute() {
    this._trafficDistributionAlgorithmAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionAlgorithmAttributeInput() {
    return this._trafficDistributionAlgorithmAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      byoip_id: cdktf.numberToTerraform(this._byoipId),
      byoip_public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._byoipPublicIps),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      egress_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressIps),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      public_ip_number: cdktf.numberToTerraform(this._publicIpNumber),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      traffic_distribution_algorithm: cdktf.stringToTerraform(this._trafficDistributionAlgorithm),
      traffic_distribution_algorithm_attribute: cdktf.stringToTerraform(this._trafficDistributionAlgorithmAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      byoip_id: {
        value: cdktf.numberToHclTerraform(this._byoipId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      byoip_public_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._byoipPublicIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
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
      egress_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      public_ip_number: {
        value: cdktf.numberToHclTerraform(this._publicIpNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_distribution_algorithm: {
        value: cdktf.stringToHclTerraform(this._trafficDistributionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_distribution_algorithm_attribute: {
        value: cdktf.stringToHclTerraform(this._trafficDistributionAlgorithmAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
