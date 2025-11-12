// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpV3CommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique index value in this community table entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community#community_index SnmpV3Community#community_index}
  */
  readonly communityIndex: string;
  /**
  * SNMPv1/v2c community name (default is same as community-index).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community#community_name SnmpV3Community#community_name}
  */
  readonly communityName?: string;
  /**
  * Context used when performing access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community#context SnmpV3Community#context}
  */
  readonly context?: string;
  /**
  * Security name used when performing access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community#security_name SnmpV3Community#security_name}
  */
  readonly securityName: string;
  /**
  * Tag identifier for set of targets allowed to use this community string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community#tag SnmpV3Community#tag}
  */
  readonly tag?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community junos_snmp_v3_community}
*/
export class SnmpV3Community extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_snmp_v3_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpV3Community resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpV3Community to import
  * @param importFromId The id of the existing SnmpV3Community that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpV3Community to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_snmp_v3_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp_v3_community junos_snmp_v3_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpV3CommunityConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpV3CommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_snmp_v3_community',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communityIndex = config.communityIndex;
    this._communityName = config.communityName;
    this._context = config.context;
    this._securityName = config.securityName;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // community_index - computed: false, optional: false, required: true
  private _communityIndex?: string; 
  public get communityIndex() {
    return this.getStringAttribute('community_index');
  }
  public set communityIndex(value: string) {
    this._communityIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityIndexInput() {
    return this._communityIndex;
  }

  // community_name - computed: false, optional: true, required: false
  private _communityName?: string; 
  public get communityName() {
    return this.getStringAttribute('community_name');
  }
  public set communityName(value: string) {
    this._communityName = value;
  }
  public resetCommunityName() {
    this._communityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameInput() {
    return this._communityName;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_name - computed: false, optional: false, required: true
  private _securityName?: string; 
  public get securityName() {
    return this.getStringAttribute('security_name');
  }
  public set securityName(value: string) {
    this._securityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityNameInput() {
    return this._securityName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      community_index: cdktf.stringToTerraform(this._communityIndex),
      community_name: cdktf.stringToTerraform(this._communityName),
      context: cdktf.stringToTerraform(this._context),
      security_name: cdktf.stringToTerraform(this._securityName),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      community_index: {
        value: cdktf.stringToHclTerraform(this._communityIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community_name: {
        value: cdktf.stringToHclTerraform(this._communityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_name: {
        value: cdktf.stringToHclTerraform(this._securityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
