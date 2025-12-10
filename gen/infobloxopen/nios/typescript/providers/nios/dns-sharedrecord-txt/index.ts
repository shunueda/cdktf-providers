// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSharedrecordTxtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for this shared record; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#comment DnsSharedrecordTxt#comment}
  */
  readonly comment?: string;
  /**
  * Determines if this shared record is disabled or not. False means that the record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#disable DnsSharedrecordTxt#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#extattrs DnsSharedrecordTxt#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * Name for this shared record. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#name DnsSharedrecordTxt#name}
  */
  readonly name: string;
  /**
  * The name of the shared record group in which the record resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#shared_record_group DnsSharedrecordTxt#shared_record_group}
  */
  readonly sharedRecordGroup: string;
  /**
  * Text associated with the shared record. It can contain up to 255 bytes per substring and up a total of 512 bytes. To enter leading, trailing or embedded spaces in the text, add quotes (" ") around the text to preserve the spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#text DnsSharedrecordTxt#text}
  */
  readonly text: string;
  /**
  * The Time To Live (TTL) value for this shared record. A 32-bit unsigned integer that represents the duration, in seconds, for which the shared record is valid (cached). Zero indicates that the shared record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#ttl DnsSharedrecordTxt#ttl}
  */
  readonly ttl?: number;
  /**
  * Use flag for: ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#use_ttl DnsSharedrecordTxt#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt nios_dns_sharedrecord_txt}
*/
export class DnsSharedrecordTxt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_sharedrecord_txt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSharedrecordTxt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSharedrecordTxt to import
  * @param importFromId The id of the existing DnsSharedrecordTxt that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSharedrecordTxt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_sharedrecord_txt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_sharedrecord_txt nios_dns_sharedrecord_txt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSharedrecordTxtConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSharedrecordTxtConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_sharedrecord_txt',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
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
    this._extattrs = config.extattrs;
    this._name = config.name;
    this._sharedRecordGroup = config.sharedRecordGroup;
    this._text = config.text;
    this._ttl = config.ttl;
    this._useTtl = config.useTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
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

  // disable - computed: true, optional: true, required: false
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

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
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

  // shared_record_group - computed: false, optional: false, required: true
  private _sharedRecordGroup?: string; 
  public get sharedRecordGroup() {
    return this.getStringAttribute('shared_record_group');
  }
  public set sharedRecordGroup(value: string) {
    this._sharedRecordGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRecordGroupInput() {
    return this._sharedRecordGroup;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // ttl - computed: true, optional: true, required: false
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

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      name: cdktf.stringToTerraform(this._name),
      shared_record_group: cdktf.stringToTerraform(this._sharedRecordGroup),
      text: cdktf.stringToTerraform(this._text),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_ttl: cdktf.booleanToTerraform(this._useTtl),
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
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_record_group: {
        value: cdktf.stringToHclTerraform(this._sharedRecordGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
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
      use_ttl: {
        value: cdktf.booleanToHclTerraform(this._useTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
