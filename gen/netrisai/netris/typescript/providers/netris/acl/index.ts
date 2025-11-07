// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permit or Deny forwarding of matched packets. Valid values are `permit` and `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#action Acl#action}
  */
  readonly action: string;
  /**
  * Descriptive comment, commonly used for approval workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#comment Acl#comment}
  */
  readonly comment?: string;
  /**
  * Destination port from. Valid values should be in range 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#dstportfrom Acl#dstportfrom}
  */
  readonly dstportfrom?: number;
  /**
  * Match destination ports on a group of ports. Valid value name of ACL Port Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#dstportgroup Acl#dstportgroup}
  */
  readonly dstportgroup?: string;
  /**
  * Destination port to. Valid values should be in range 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#dstportto Acl#dstportto}
  */
  readonly dstportto?: number;
  /**
  * Destination IPv4/IPv6 address. Example `0.0.0.0/0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#dstprefix Acl#dstprefix}
  */
  readonly dstprefix: string;
  /**
  * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped source/destination. Valid values are `0` and `1`. Default value is `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#established Acl#established}
  */
  readonly established?: number;
  /**
  * Custom IPv4 ICMP code. Valid values should be in range 1-37 according to RFC 1700. Default value is `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#icmptype Acl#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#id Acl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for the ACL entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#name Acl#name}
  */
  readonly name: string;
  /**
  * IP protocol to match. Valid values are `all`, `ip`, `tcp`, `udp`, `icmp`, `icmpv6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#proto Acl#proto}
  */
  readonly proto: string;
  /**
  * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped source/destination. Default value is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#reverse Acl#reverse}
  */
  readonly reverse?: boolean | cdktf.IResolvable;
  /**
  * Source port from. Valid values should be in range 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#srcportfrom Acl#srcportfrom}
  */
  readonly srcportfrom?: number;
  /**
  * Match source ports on a group of ports. Valid value name of ACL Port Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#srcportgroup Acl#srcportgroup}
  */
  readonly srcportgroup?: string;
  /**
  * Source port to. Valid values should be in range 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#srcportto Acl#srcportto}
  */
  readonly srcportto?: number;
  /**
  * Source IPv4/IPv6 address. Example `192.0.2.0/24`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#srcprefix Acl#srcprefix}
  */
  readonly srcprefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#validuntil Acl#validuntil}
  */
  readonly validuntil?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl netris_acl}
*/
export class Acl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acl to import
  * @param importFromId The id of the existing Acl that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acl netris_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclConfig
  */
  public constructor(scope: Construct, id: string, config: AclConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_acl',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
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
    this._comment = config.comment;
    this._dstportfrom = config.dstportfrom;
    this._dstportgroup = config.dstportgroup;
    this._dstportto = config.dstportto;
    this._dstprefix = config.dstprefix;
    this._established = config.established;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._name = config.name;
    this._proto = config.proto;
    this._reverse = config.reverse;
    this._srcportfrom = config.srcportfrom;
    this._srcportgroup = config.srcportgroup;
    this._srcportto = config.srcportto;
    this._srcprefix = config.srcprefix;
    this._validuntil = config.validuntil;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dstportfrom - computed: false, optional: true, required: false
  private _dstportfrom?: number; 
  public get dstportfrom() {
    return this.getNumberAttribute('dstportfrom');
  }
  public set dstportfrom(value: number) {
    this._dstportfrom = value;
  }
  public resetDstportfrom() {
    this._dstportfrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportfromInput() {
    return this._dstportfrom;
  }

  // dstportgroup - computed: false, optional: true, required: false
  private _dstportgroup?: string; 
  public get dstportgroup() {
    return this.getStringAttribute('dstportgroup');
  }
  public set dstportgroup(value: string) {
    this._dstportgroup = value;
  }
  public resetDstportgroup() {
    this._dstportgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportgroupInput() {
    return this._dstportgroup;
  }

  // dstportto - computed: false, optional: true, required: false
  private _dstportto?: number; 
  public get dstportto() {
    return this.getNumberAttribute('dstportto');
  }
  public set dstportto(value: number) {
    this._dstportto = value;
  }
  public resetDstportto() {
    this._dstportto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstporttoInput() {
    return this._dstportto;
  }

  // dstprefix - computed: false, optional: false, required: true
  private _dstprefix?: string; 
  public get dstprefix() {
    return this.getStringAttribute('dstprefix');
  }
  public set dstprefix(value: string) {
    this._dstprefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstprefixInput() {
    return this._dstprefix;
  }

  // established - computed: false, optional: true, required: false
  private _established?: number; 
  public get established() {
    return this.getNumberAttribute('established');
  }
  public set established(value: number) {
    this._established = value;
  }
  public resetEstablished() {
    this._established = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishedInput() {
    return this._established;
  }

  // icmptype - computed: false, optional: true, required: false
  private _icmptype?: number; 
  public get icmptype() {
    return this.getNumberAttribute('icmptype');
  }
  public set icmptype(value: number) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
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

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // reverse - computed: false, optional: true, required: false
  private _reverse?: boolean | cdktf.IResolvable; 
  public get reverse() {
    return this.getBooleanAttribute('reverse');
  }
  public set reverse(value: boolean | cdktf.IResolvable) {
    this._reverse = value;
  }
  public resetReverse() {
    this._reverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseInput() {
    return this._reverse;
  }

  // srcportfrom - computed: false, optional: true, required: false
  private _srcportfrom?: number; 
  public get srcportfrom() {
    return this.getNumberAttribute('srcportfrom');
  }
  public set srcportfrom(value: number) {
    this._srcportfrom = value;
  }
  public resetSrcportfrom() {
    this._srcportfrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportfromInput() {
    return this._srcportfrom;
  }

  // srcportgroup - computed: false, optional: true, required: false
  private _srcportgroup?: string; 
  public get srcportgroup() {
    return this.getStringAttribute('srcportgroup');
  }
  public set srcportgroup(value: string) {
    this._srcportgroup = value;
  }
  public resetSrcportgroup() {
    this._srcportgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportgroupInput() {
    return this._srcportgroup;
  }

  // srcportto - computed: false, optional: true, required: false
  private _srcportto?: number; 
  public get srcportto() {
    return this.getNumberAttribute('srcportto');
  }
  public set srcportto(value: number) {
    this._srcportto = value;
  }
  public resetSrcportto() {
    this._srcportto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcporttoInput() {
    return this._srcportto;
  }

  // srcprefix - computed: false, optional: false, required: true
  private _srcprefix?: string; 
  public get srcprefix() {
    return this.getStringAttribute('srcprefix');
  }
  public set srcprefix(value: string) {
    this._srcprefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcprefixInput() {
    return this._srcprefix;
  }

  // validuntil - computed: false, optional: true, required: false
  private _validuntil?: string; 
  public get validuntil() {
    return this.getStringAttribute('validuntil');
  }
  public set validuntil(value: string) {
    this._validuntil = value;
  }
  public resetValiduntil() {
    this._validuntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validuntilInput() {
    return this._validuntil;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      comment: cdktf.stringToTerraform(this._comment),
      dstportfrom: cdktf.numberToTerraform(this._dstportfrom),
      dstportgroup: cdktf.stringToTerraform(this._dstportgroup),
      dstportto: cdktf.numberToTerraform(this._dstportto),
      dstprefix: cdktf.stringToTerraform(this._dstprefix),
      established: cdktf.numberToTerraform(this._established),
      icmptype: cdktf.numberToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proto: cdktf.stringToTerraform(this._proto),
      reverse: cdktf.booleanToTerraform(this._reverse),
      srcportfrom: cdktf.numberToTerraform(this._srcportfrom),
      srcportgroup: cdktf.stringToTerraform(this._srcportgroup),
      srcportto: cdktf.numberToTerraform(this._srcportto),
      srcprefix: cdktf.stringToTerraform(this._srcprefix),
      validuntil: cdktf.stringToTerraform(this._validuntil),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstportfrom: {
        value: cdktf.numberToHclTerraform(this._dstportfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dstportgroup: {
        value: cdktf.stringToHclTerraform(this._dstportgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstportto: {
        value: cdktf.numberToHclTerraform(this._dstportto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dstprefix: {
        value: cdktf.stringToHclTerraform(this._dstprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      established: {
        value: cdktf.numberToHclTerraform(this._established),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmptype: {
        value: cdktf.numberToHclTerraform(this._icmptype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse: {
        value: cdktf.booleanToHclTerraform(this._reverse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srcportfrom: {
        value: cdktf.numberToHclTerraform(this._srcportfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcportgroup: {
        value: cdktf.stringToHclTerraform(this._srcportgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcportto: {
        value: cdktf.numberToHclTerraform(this._srcportto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcprefix: {
        value: cdktf.stringToHclTerraform(this._srcprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validuntil: {
        value: cdktf.stringToHclTerraform(this._validuntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
