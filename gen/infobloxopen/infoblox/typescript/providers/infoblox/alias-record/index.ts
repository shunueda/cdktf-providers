// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AliasRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the alias record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#comment AliasRecord#comment}
  */
  readonly comment?: string;
  /**
  * A boolean flag which indicates if the alias record is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#disable AliasRecord#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Name of the DNS view in which the alias record is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#dns_view AliasRecord#dns_view}
  */
  readonly dnsView?: string;
  /**
  * Extensible attributes of the  Alias Record to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#ext_attrs AliasRecord#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#id AliasRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the alias record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#name AliasRecord#name}
  */
  readonly name: string;
  /**
  * Target name in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#target_name AliasRecord#target_name}
  */
  readonly targetName: string;
  /**
  * Type of the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#target_type AliasRecord#target_type}
  */
  readonly targetType: string;
  /**
  * The Time To Live (TTL) value for record. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#ttl AliasRecord#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record infoblox_alias_record}
*/
export class AliasRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_alias_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AliasRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AliasRecord to import
  * @param importFromId The id of the existing AliasRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AliasRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_alias_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/alias_record infoblox_alias_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AliasRecordConfig
  */
  public constructor(scope: Construct, id: string, config: AliasRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_alias_record',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._disable = config.disable;
    this._dnsView = config.dnsView;
    this._extAttrs = config.extAttrs;
    this._id = config.id;
    this._name = config.name;
    this._targetName = config.targetName;
    this._targetType = config.targetType;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_view - computed: false, optional: true, required: false
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  public resetDnsView() {
    this._dnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      dns_view: cdktf.stringToTerraform(this._dnsView),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      target_name: cdktf.stringToTerraform(this._targetName),
      target_type: cdktf.stringToTerraform(this._targetType),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_view: {
        value: cdktf.stringToHclTerraform(this._dnsView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
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
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
