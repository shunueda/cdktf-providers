// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwsignaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#action Appfwsignatures#action}
  */
  readonly action?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#autoenablenewsignatures Appfwsignatures#autoenablenewsignatures}
  */
  readonly autoenablenewsignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#category Appfwsignatures#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#comment Appfwsignatures#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#enabled Appfwsignatures#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#id Appfwsignatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#merge Appfwsignatures#merge}
  */
  readonly merge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#mergedefault Appfwsignatures#mergedefault}
  */
  readonly mergedefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#name Appfwsignatures#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#overwrite Appfwsignatures#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#preservedefactions Appfwsignatures#preservedefactions}
  */
  readonly preservedefactions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#ruleid Appfwsignatures#ruleid}
  */
  readonly ruleid?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#sha1 Appfwsignatures#sha1}
  */
  readonly sha1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#src Appfwsignatures#src}
  */
  readonly src: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#vendortype Appfwsignatures#vendortype}
  */
  readonly vendortype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#xslt Appfwsignatures#xslt}
  */
  readonly xslt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures citrixadc_appfwsignatures}
*/
export class Appfwsignatures extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwsignatures";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwsignatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwsignatures to import
  * @param importFromId The id of the existing Appfwsignatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwsignatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwsignatures", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwsignatures citrixadc_appfwsignatures} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwsignaturesConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwsignaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwsignatures',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._autoenablenewsignatures = config.autoenablenewsignatures;
    this._category = config.category;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._merge = config.merge;
    this._mergedefault = config.mergedefault;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._preservedefactions = config.preservedefactions;
    this._ruleid = config.ruleid;
    this._sha1 = config.sha1;
    this._src = config.src;
    this._vendortype = config.vendortype;
    this._xslt = config.xslt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // autoenablenewsignatures - computed: true, optional: true, required: false
  private _autoenablenewsignatures?: string; 
  public get autoenablenewsignatures() {
    return this.getStringAttribute('autoenablenewsignatures');
  }
  public set autoenablenewsignatures(value: string) {
    this._autoenablenewsignatures = value;
  }
  public resetAutoenablenewsignatures() {
    this._autoenablenewsignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoenablenewsignaturesInput() {
    return this._autoenablenewsignatures;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // merge - computed: true, optional: true, required: false
  private _merge?: boolean | cdktf.IResolvable; 
  public get merge() {
    return this.getBooleanAttribute('merge');
  }
  public set merge(value: boolean | cdktf.IResolvable) {
    this._merge = value;
  }
  public resetMerge() {
    this._merge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge;
  }

  // mergedefault - computed: true, optional: true, required: false
  private _mergedefault?: boolean | cdktf.IResolvable; 
  public get mergedefault() {
    return this.getBooleanAttribute('mergedefault');
  }
  public set mergedefault(value: boolean | cdktf.IResolvable) {
    this._mergedefault = value;
  }
  public resetMergedefault() {
    this._mergedefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedefaultInput() {
    return this._mergedefault;
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

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // preservedefactions - computed: true, optional: true, required: false
  private _preservedefactions?: boolean | cdktf.IResolvable; 
  public get preservedefactions() {
    return this.getBooleanAttribute('preservedefactions');
  }
  public set preservedefactions(value: boolean | cdktf.IResolvable) {
    this._preservedefactions = value;
  }
  public resetPreservedefactions() {
    this._preservedefactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedefactionsInput() {
    return this._preservedefactions;
  }

  // ruleid - computed: false, optional: true, required: false
  private _ruleid?: number[]; 
  public get ruleid() {
    return this.getNumberListAttribute('ruleid');
  }
  public set ruleid(value: number[]) {
    this._ruleid = value;
  }
  public resetRuleid() {
    this._ruleid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleidInput() {
    return this._ruleid;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1?: string; 
  public get sha1() {
    return this.getStringAttribute('sha1');
  }
  public set sha1(value: string) {
    this._sha1 = value;
  }
  public resetSha1() {
    this._sha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1;
  }

  // src - computed: false, optional: false, required: true
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // vendortype - computed: true, optional: true, required: false
  private _vendortype?: string; 
  public get vendortype() {
    return this.getStringAttribute('vendortype');
  }
  public set vendortype(value: string) {
    this._vendortype = value;
  }
  public resetVendortype() {
    this._vendortype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendortypeInput() {
    return this._vendortype;
  }

  // xslt - computed: true, optional: true, required: false
  private _xslt?: string; 
  public get xslt() {
    return this.getStringAttribute('xslt');
  }
  public set xslt(value: string) {
    this._xslt = value;
  }
  public resetXslt() {
    this._xslt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsltInput() {
    return this._xslt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._action),
      autoenablenewsignatures: cdktf.stringToTerraform(this._autoenablenewsignatures),
      category: cdktf.stringToTerraform(this._category),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.stringToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      merge: cdktf.booleanToTerraform(this._merge),
      mergedefault: cdktf.booleanToTerraform(this._mergedefault),
      name: cdktf.stringToTerraform(this._name),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      preservedefactions: cdktf.booleanToTerraform(this._preservedefactions),
      ruleid: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ruleid),
      sha1: cdktf.stringToTerraform(this._sha1),
      src: cdktf.stringToTerraform(this._src),
      vendortype: cdktf.stringToTerraform(this._vendortype),
      xslt: cdktf.stringToTerraform(this._xslt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._action),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      autoenablenewsignatures: {
        value: cdktf.stringToHclTerraform(this._autoenablenewsignatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
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
      merge: {
        value: cdktf.booleanToHclTerraform(this._merge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mergedefault: {
        value: cdktf.booleanToHclTerraform(this._mergedefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preservedefactions: {
        value: cdktf.booleanToHclTerraform(this._preservedefactions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ruleid: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ruleid),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      sha1: {
        value: cdktf.stringToHclTerraform(this._sha1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendortype: {
        value: cdktf.stringToHclTerraform(this._vendortype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xslt: {
        value: cdktf.stringToHclTerraform(this._xslt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
