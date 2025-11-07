// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendedAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#action ExtendedAcl#action}
  */
  readonly action: string;
  /**
  * Destination Network Literal Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#destination_network_literal_type ExtendedAcl#destination_network_literal_type}
  */
  readonly destinationNetworkLiteralType?: string;
  /**
  * Destination Network Literal Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#destination_network_literal_value ExtendedAcl#destination_network_literal_value}
  */
  readonly destinationNetworkLiteralValue?: string;
  /**
  * Destination Network Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#destination_network_object_id ExtendedAcl#destination_network_object_id}
  */
  readonly destinationNetworkObjectId?: string;
  /**
  * Destination Port Literal Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#destination_port_literal_port ExtendedAcl#destination_port_literal_port}
  */
  readonly destinationPortLiteralPort?: string;
  /**
  * Destination Port Literal Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#destination_port_literal_protocol ExtendedAcl#destination_port_literal_protocol}
  */
  readonly destinationPortLiteralProtocol?: string;
  /**
  * Destination Port Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#destination_port_object_id ExtendedAcl#destination_port_object_id}
  */
  readonly destinationPortObjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#id ExtendedAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The log interval of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#log_interval ExtendedAcl#log_interval}
  */
  readonly logInterval: number;
  /**
  * The loglevel of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#log_level ExtendedAcl#log_level}
  */
  readonly logLevel: string;
  /**
  * The logging of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#logging ExtendedAcl#logging}
  */
  readonly logging: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#name ExtendedAcl#name}
  */
  readonly name: string;
  /**
  * Source Network Literal Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#source_network_literal_type ExtendedAcl#source_network_literal_type}
  */
  readonly sourceNetworkLiteralType?: string;
  /**
  * Source Network Literal Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#source_network_literal_value ExtendedAcl#source_network_literal_value}
  */
  readonly sourceNetworkLiteralValue?: string;
  /**
  * Source Network Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#source_network_object_id ExtendedAcl#source_network_object_id}
  */
  readonly sourceNetworkObjectId?: string;
  /**
  * Source Port Literal Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#source_port_literal_port ExtendedAcl#source_port_literal_port}
  */
  readonly sourcePortLiteralPort?: string;
  /**
  * Source Port Literal Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#source_port_literal_protocol ExtendedAcl#source_port_literal_protocol}
  */
  readonly sourcePortLiteralProtocol?: string;
  /**
  * Source Port Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#source_port_object_id ExtendedAcl#source_port_object_id}
  */
  readonly sourcePortObjectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl fmc_extended_acl}
*/
export class ExtendedAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_extended_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendedAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendedAcl to import
  * @param importFromId The id of the existing ExtendedAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendedAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_extended_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/extended_acl fmc_extended_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendedAclConfig
  */
  public constructor(scope: Construct, id: string, config: ExtendedAclConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_extended_acl',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._destinationNetworkLiteralType = config.destinationNetworkLiteralType;
    this._destinationNetworkLiteralValue = config.destinationNetworkLiteralValue;
    this._destinationNetworkObjectId = config.destinationNetworkObjectId;
    this._destinationPortLiteralPort = config.destinationPortLiteralPort;
    this._destinationPortLiteralProtocol = config.destinationPortLiteralProtocol;
    this._destinationPortObjectId = config.destinationPortObjectId;
    this._id = config.id;
    this._logInterval = config.logInterval;
    this._logLevel = config.logLevel;
    this._logging = config.logging;
    this._name = config.name;
    this._sourceNetworkLiteralType = config.sourceNetworkLiteralType;
    this._sourceNetworkLiteralValue = config.sourceNetworkLiteralValue;
    this._sourceNetworkObjectId = config.sourceNetworkObjectId;
    this._sourcePortLiteralPort = config.sourcePortLiteralPort;
    this._sourcePortLiteralProtocol = config.sourcePortLiteralProtocol;
    this._sourcePortObjectId = config.sourcePortObjectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination_network_literal_type - computed: false, optional: true, required: false
  private _destinationNetworkLiteralType?: string; 
  public get destinationNetworkLiteralType() {
    return this.getStringAttribute('destination_network_literal_type');
  }
  public set destinationNetworkLiteralType(value: string) {
    this._destinationNetworkLiteralType = value;
  }
  public resetDestinationNetworkLiteralType() {
    this._destinationNetworkLiteralType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkLiteralTypeInput() {
    return this._destinationNetworkLiteralType;
  }

  // destination_network_literal_value - computed: false, optional: true, required: false
  private _destinationNetworkLiteralValue?: string; 
  public get destinationNetworkLiteralValue() {
    return this.getStringAttribute('destination_network_literal_value');
  }
  public set destinationNetworkLiteralValue(value: string) {
    this._destinationNetworkLiteralValue = value;
  }
  public resetDestinationNetworkLiteralValue() {
    this._destinationNetworkLiteralValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkLiteralValueInput() {
    return this._destinationNetworkLiteralValue;
  }

  // destination_network_object_id - computed: false, optional: true, required: false
  private _destinationNetworkObjectId?: string; 
  public get destinationNetworkObjectId() {
    return this.getStringAttribute('destination_network_object_id');
  }
  public set destinationNetworkObjectId(value: string) {
    this._destinationNetworkObjectId = value;
  }
  public resetDestinationNetworkObjectId() {
    this._destinationNetworkObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkObjectIdInput() {
    return this._destinationNetworkObjectId;
  }

  // destination_port_literal_port - computed: false, optional: true, required: false
  private _destinationPortLiteralPort?: string; 
  public get destinationPortLiteralPort() {
    return this.getStringAttribute('destination_port_literal_port');
  }
  public set destinationPortLiteralPort(value: string) {
    this._destinationPortLiteralPort = value;
  }
  public resetDestinationPortLiteralPort() {
    this._destinationPortLiteralPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortLiteralPortInput() {
    return this._destinationPortLiteralPort;
  }

  // destination_port_literal_protocol - computed: false, optional: true, required: false
  private _destinationPortLiteralProtocol?: string; 
  public get destinationPortLiteralProtocol() {
    return this.getStringAttribute('destination_port_literal_protocol');
  }
  public set destinationPortLiteralProtocol(value: string) {
    this._destinationPortLiteralProtocol = value;
  }
  public resetDestinationPortLiteralProtocol() {
    this._destinationPortLiteralProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortLiteralProtocolInput() {
    return this._destinationPortLiteralProtocol;
  }

  // destination_port_object_id - computed: false, optional: true, required: false
  private _destinationPortObjectId?: string; 
  public get destinationPortObjectId() {
    return this.getStringAttribute('destination_port_object_id');
  }
  public set destinationPortObjectId(value: string) {
    this._destinationPortObjectId = value;
  }
  public resetDestinationPortObjectId() {
    this._destinationPortObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortObjectIdInput() {
    return this._destinationPortObjectId;
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

  // log_interval - computed: false, optional: false, required: true
  private _logInterval?: number; 
  public get logInterval() {
    return this.getNumberAttribute('log_interval');
  }
  public set logInterval(value: number) {
    this._logInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalInput() {
    return this._logInterval;
  }

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // logging - computed: false, optional: false, required: true
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // source_network_literal_type - computed: false, optional: true, required: false
  private _sourceNetworkLiteralType?: string; 
  public get sourceNetworkLiteralType() {
    return this.getStringAttribute('source_network_literal_type');
  }
  public set sourceNetworkLiteralType(value: string) {
    this._sourceNetworkLiteralType = value;
  }
  public resetSourceNetworkLiteralType() {
    this._sourceNetworkLiteralType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkLiteralTypeInput() {
    return this._sourceNetworkLiteralType;
  }

  // source_network_literal_value - computed: false, optional: true, required: false
  private _sourceNetworkLiteralValue?: string; 
  public get sourceNetworkLiteralValue() {
    return this.getStringAttribute('source_network_literal_value');
  }
  public set sourceNetworkLiteralValue(value: string) {
    this._sourceNetworkLiteralValue = value;
  }
  public resetSourceNetworkLiteralValue() {
    this._sourceNetworkLiteralValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkLiteralValueInput() {
    return this._sourceNetworkLiteralValue;
  }

  // source_network_object_id - computed: false, optional: true, required: false
  private _sourceNetworkObjectId?: string; 
  public get sourceNetworkObjectId() {
    return this.getStringAttribute('source_network_object_id');
  }
  public set sourceNetworkObjectId(value: string) {
    this._sourceNetworkObjectId = value;
  }
  public resetSourceNetworkObjectId() {
    this._sourceNetworkObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkObjectIdInput() {
    return this._sourceNetworkObjectId;
  }

  // source_port_literal_port - computed: false, optional: true, required: false
  private _sourcePortLiteralPort?: string; 
  public get sourcePortLiteralPort() {
    return this.getStringAttribute('source_port_literal_port');
  }
  public set sourcePortLiteralPort(value: string) {
    this._sourcePortLiteralPort = value;
  }
  public resetSourcePortLiteralPort() {
    this._sourcePortLiteralPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortLiteralPortInput() {
    return this._sourcePortLiteralPort;
  }

  // source_port_literal_protocol - computed: false, optional: true, required: false
  private _sourcePortLiteralProtocol?: string; 
  public get sourcePortLiteralProtocol() {
    return this.getStringAttribute('source_port_literal_protocol');
  }
  public set sourcePortLiteralProtocol(value: string) {
    this._sourcePortLiteralProtocol = value;
  }
  public resetSourcePortLiteralProtocol() {
    this._sourcePortLiteralProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortLiteralProtocolInput() {
    return this._sourcePortLiteralProtocol;
  }

  // source_port_object_id - computed: false, optional: true, required: false
  private _sourcePortObjectId?: string; 
  public get sourcePortObjectId() {
    return this.getStringAttribute('source_port_object_id');
  }
  public set sourcePortObjectId(value: string) {
    this._sourcePortObjectId = value;
  }
  public resetSourcePortObjectId() {
    this._sourcePortObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortObjectIdInput() {
    return this._sourcePortObjectId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      destination_network_literal_type: cdktf.stringToTerraform(this._destinationNetworkLiteralType),
      destination_network_literal_value: cdktf.stringToTerraform(this._destinationNetworkLiteralValue),
      destination_network_object_id: cdktf.stringToTerraform(this._destinationNetworkObjectId),
      destination_port_literal_port: cdktf.stringToTerraform(this._destinationPortLiteralPort),
      destination_port_literal_protocol: cdktf.stringToTerraform(this._destinationPortLiteralProtocol),
      destination_port_object_id: cdktf.stringToTerraform(this._destinationPortObjectId),
      id: cdktf.stringToTerraform(this._id),
      log_interval: cdktf.numberToTerraform(this._logInterval),
      log_level: cdktf.stringToTerraform(this._logLevel),
      logging: cdktf.stringToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      source_network_literal_type: cdktf.stringToTerraform(this._sourceNetworkLiteralType),
      source_network_literal_value: cdktf.stringToTerraform(this._sourceNetworkLiteralValue),
      source_network_object_id: cdktf.stringToTerraform(this._sourceNetworkObjectId),
      source_port_literal_port: cdktf.stringToTerraform(this._sourcePortLiteralPort),
      source_port_literal_protocol: cdktf.stringToTerraform(this._sourcePortLiteralProtocol),
      source_port_object_id: cdktf.stringToTerraform(this._sourcePortObjectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_network_literal_type: {
        value: cdktf.stringToHclTerraform(this._destinationNetworkLiteralType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_network_literal_value: {
        value: cdktf.stringToHclTerraform(this._destinationNetworkLiteralValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_network_object_id: {
        value: cdktf.stringToHclTerraform(this._destinationNetworkObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_literal_port: {
        value: cdktf.stringToHclTerraform(this._destinationPortLiteralPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_literal_protocol: {
        value: cdktf.stringToHclTerraform(this._destinationPortLiteralProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_object_id: {
        value: cdktf.stringToHclTerraform(this._destinationPortObjectId),
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
      log_interval: {
        value: cdktf.numberToHclTerraform(this._logInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
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
      source_network_literal_type: {
        value: cdktf.stringToHclTerraform(this._sourceNetworkLiteralType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_network_literal_value: {
        value: cdktf.stringToHclTerraform(this._sourceNetworkLiteralValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_network_object_id: {
        value: cdktf.stringToHclTerraform(this._sourceNetworkObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_literal_port: {
        value: cdktf.stringToHclTerraform(this._sourcePortLiteralPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_literal_protocol: {
        value: cdktf.stringToHclTerraform(this._sourcePortLiteralProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_object_id: {
        value: cdktf.stringToHclTerraform(this._sourcePortObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
