// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CXP of the IP Reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#cxp IpReservation#cxp}
  */
  readonly cxp: string;
  /**
  * The value could be either `CUSTOMER` or `CXP`. This is required when `prefix_len` is `30` or the `prefix` is a `/30`. This field determines which IP from the given or the computed `/30` prefix is assigned to the customer end of the tunnel and which IP is assigned to the CXP end of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#first_ip_assignment IpReservation#first_ip_assignment}
  */
  readonly firstIpAssignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#id IpReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IP Reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#name IpReservation#name}
  */
  readonly name: string;
  /**
  * The ID of the node that the IP Reservation is assigned to. This must be provided when the given or computed `prefix` is `/30`. When the `prefix` is `/32`then this field determines whether the IP address will be assigned to the customer end or the CXP end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#node_id IpReservation#node_id}
  */
  readonly nodeId?: string;
  /**
  * The IP Prefix of the IP Reservation. If this is specified, both `prefix_type` and `prefix_len` will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#prefix IpReservation#prefix}
  */
  readonly prefix?: string;
  /**
  * The IP Prefix length of the IP Reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#prefix_len IpReservation#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * The IP Prefix type of the IP Reservation. The value could be `SEGMENT`, `APIPA`, `AZURE_APIPA` and `PUBLIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#prefix_type IpReservation#prefix_type}
  */
  readonly prefixType: string;
  /**
  * The ID of the Scale Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#scale_group_id IpReservation#scale_group_id}
  */
  readonly scaleGroupId: string;
  /**
  * The segment ID which the IP Reservation is to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#segment_id IpReservation#segment_id}
  */
  readonly segmentId: string;
  /**
  * The type of the IP Reservation. The value could be either `PUBLIC` or `OVERLAY`. `PUBLIC` could be only created by Alkira.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#type IpReservation#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation alkira_ip_reservation}
*/
export class IpReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_ip_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpReservation to import
  * @param importFromId The id of the existing IpReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_ip_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/ip_reservation alkira_ip_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpReservationConfig
  */
  public constructor(scope: Construct, id: string, config: IpReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_ip_reservation',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxp = config.cxp;
    this._firstIpAssignment = config.firstIpAssignment;
    this._id = config.id;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._prefix = config.prefix;
    this._prefixLen = config.prefixLen;
    this._prefixType = config.prefixType;
    this._scaleGroupId = config.scaleGroupId;
    this._segmentId = config.segmentId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // first_ip_assignment - computed: false, optional: true, required: false
  private _firstIpAssignment?: string; 
  public get firstIpAssignment() {
    return this.getStringAttribute('first_ip_assignment');
  }
  public set firstIpAssignment(value: string) {
    this._firstIpAssignment = value;
  }
  public resetFirstIpAssignment() {
    this._firstIpAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpAssignmentInput() {
    return this._firstIpAssignment;
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

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // prefix_type - computed: false, optional: false, required: true
  private _prefixType?: string; 
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
  public set prefixType(value: string) {
    this._prefixType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixTypeInput() {
    return this._prefixType;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // scale_group_id - computed: false, optional: false, required: true
  private _scaleGroupId?: string; 
  public get scaleGroupId() {
    return this.getStringAttribute('scale_group_id');
  }
  public set scaleGroupId(value: string) {
    this._scaleGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleGroupIdInput() {
    return this._scaleGroupId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cxp: cdktf.stringToTerraform(this._cxp),
      first_ip_assignment: cdktf.stringToTerraform(this._firstIpAssignment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.stringToTerraform(this._nodeId),
      prefix: cdktf.stringToTerraform(this._prefix),
      prefix_len: cdktf.numberToTerraform(this._prefixLen),
      prefix_type: cdktf.stringToTerraform(this._prefixType),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_ip_assignment: {
        value: cdktf.stringToHclTerraform(this._firstIpAssignment),
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
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_len: {
        value: cdktf.numberToHclTerraform(this._prefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_type: {
        value: cdktf.stringToHclTerraform(this._prefixType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_group_id: {
        value: cdktf.stringToHclTerraform(this._scaleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
