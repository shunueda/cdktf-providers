// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsAzureHostedConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#account_uuid CsAzureHostedConnection#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * The Service Key provided by Microsoft Azure when you created your ExpressRoute circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#azure_service_key CsAzureHostedConnection#azure_service_key}
  */
  readonly azureServiceKey: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#description CsAzureHostedConnection#description}
  */
  readonly description: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#labels CsAzureHostedConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#po_number CsAzureHostedConnection#po_number}
  */
  readonly poNumber?: string;
  /**
  * The circuit ID of the PacketFabric port you wish to connect to Azure. This starts with "PF-AP-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#port CsAzureHostedConnection#port}
  */
  readonly port: string;
  /**
  * The peed of the new connection.
  * 
  * 	Enum: ["50Mbps" "100Mbps" "200Mbps" "300Mbps" "400Mbps" "500Mbps" "1Gbps" "2Gbps" "5Gbps" "10Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#speed CsAzureHostedConnection#speed}
  */
  readonly speed: string;
  /**
  * Valid S-VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#src_svlan CsAzureHostedConnection#src_svlan}
  */
  readonly srcSvlan?: number;
  /**
  * The VLAN ID you are using for Microsoft peering. This is optional and is used to connect to Office 365.
  * 
  * 	The VLAN ID must be unique within the circuit (not used for any other peerings).
  * 
  * 	Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#vlan_microsoft CsAzureHostedConnection#vlan_microsoft}
  */
  readonly vlanMicrosoft?: number;
  /**
  * The VLAN ID you are using for private peering. You will use this when you configure peering in the Azure portal.
  * 
  * 	The VLAN ID must be unique within the circuit (not used for any other peerings).
  * 
  * 	Valid VLAN range is from 4-4094, inclusive.
  * 
  * 	You must provide at least one VLAN (`vlan_microsoft`, `vlan_private`, or both).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#vlan_private CsAzureHostedConnection#vlan_private}
  */
  readonly vlanPrivate?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#timeouts CsAzureHostedConnection#timeouts}
  */
  readonly timeouts?: CsAzureHostedConnectionTimeouts;
}
export interface CsAzureHostedConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#create CsAzureHostedConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#delete CsAzureHostedConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#read CsAzureHostedConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#update CsAzureHostedConnection#update}
  */
  readonly update?: string;
}

export function csAzureHostedConnectionTimeoutsToTerraform(struct?: CsAzureHostedConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function csAzureHostedConnectionTimeoutsToHclTerraform(struct?: CsAzureHostedConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsAzureHostedConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsAzureHostedConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsAzureHostedConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection packetfabric_cs_azure_hosted_connection}
*/
export class CsAzureHostedConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_azure_hosted_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsAzureHostedConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsAzureHostedConnection to import
  * @param importFromId The id of the existing CsAzureHostedConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsAzureHostedConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_azure_hosted_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_azure_hosted_connection packetfabric_cs_azure_hosted_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsAzureHostedConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CsAzureHostedConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_azure_hosted_connection',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._azureServiceKey = config.azureServiceKey;
    this._description = config.description;
    this._labels = config.labels;
    this._poNumber = config.poNumber;
    this._port = config.port;
    this._speed = config.speed;
    this._srcSvlan = config.srcSvlan;
    this._vlanMicrosoft = config.vlanMicrosoft;
    this._vlanPrivate = config.vlanPrivate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // azure_service_key - computed: false, optional: false, required: true
  private _azureServiceKey?: string; 
  public get azureServiceKey() {
    return this.getStringAttribute('azure_service_key');
  }
  public set azureServiceKey(value: string) {
    this._azureServiceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceKeyInput() {
    return this._azureServiceKey;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // src_svlan - computed: false, optional: true, required: false
  private _srcSvlan?: number; 
  public get srcSvlan() {
    return this.getNumberAttribute('src_svlan');
  }
  public set srcSvlan(value: number) {
    this._srcSvlan = value;
  }
  public resetSrcSvlan() {
    this._srcSvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSvlanInput() {
    return this._srcSvlan;
  }

  // vlan_microsoft - computed: false, optional: true, required: false
  private _vlanMicrosoft?: number; 
  public get vlanMicrosoft() {
    return this.getNumberAttribute('vlan_microsoft');
  }
  public set vlanMicrosoft(value: number) {
    this._vlanMicrosoft = value;
  }
  public resetVlanMicrosoft() {
    this._vlanMicrosoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanMicrosoftInput() {
    return this._vlanMicrosoft;
  }

  // vlan_private - computed: false, optional: true, required: false
  private _vlanPrivate?: number; 
  public get vlanPrivate() {
    return this.getNumberAttribute('vlan_private');
  }
  public set vlanPrivate(value: number) {
    this._vlanPrivate = value;
  }
  public resetVlanPrivate() {
    this._vlanPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPrivateInput() {
    return this._vlanPrivate;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsAzureHostedConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsAzureHostedConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      azure_service_key: cdktf.stringToTerraform(this._azureServiceKey),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      po_number: cdktf.stringToTerraform(this._poNumber),
      port: cdktf.stringToTerraform(this._port),
      speed: cdktf.stringToTerraform(this._speed),
      src_svlan: cdktf.numberToTerraform(this._srcSvlan),
      vlan_microsoft: cdktf.numberToTerraform(this._vlanMicrosoft),
      vlan_private: cdktf.numberToTerraform(this._vlanPrivate),
      timeouts: csAzureHostedConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_service_key: {
        value: cdktf.stringToHclTerraform(this._azureServiceKey),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_svlan: {
        value: cdktf.numberToHclTerraform(this._srcSvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_microsoft: {
        value: cdktf.numberToHclTerraform(this._vlanMicrosoft),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_private: {
        value: cdktf.numberToHclTerraform(this._vlanPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: csAzureHostedConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsAzureHostedConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
