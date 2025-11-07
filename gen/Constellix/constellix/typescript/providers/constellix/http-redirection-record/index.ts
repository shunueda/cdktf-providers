// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpRedirectionRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#description HttpRedirectionRecord#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#domain_id HttpRedirectionRecord#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#gtd_region HttpRedirectionRecord#gtd_region}
  */
  readonly gtdRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#hardlink_flag HttpRedirectionRecord#hardlink_flag}
  */
  readonly hardlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#id HttpRedirectionRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#keywords HttpRedirectionRecord#keywords}
  */
  readonly keywords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#name HttpRedirectionRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#noanswer HttpRedirectionRecord#noanswer}
  */
  readonly noanswer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#note HttpRedirectionRecord#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#parent HttpRedirectionRecord#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#parentid HttpRedirectionRecord#parentid}
  */
  readonly parentid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#redirect_type_id HttpRedirectionRecord#redirect_type_id}
  */
  readonly redirectTypeId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#source HttpRedirectionRecord#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#source_type HttpRedirectionRecord#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#title HttpRedirectionRecord#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#ttl HttpRedirectionRecord#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#type HttpRedirectionRecord#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#url HttpRedirectionRecord#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record constellix_http_redirection_record}
*/
export class HttpRedirectionRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_http_redirection_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpRedirectionRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpRedirectionRecord to import
  * @param importFromId The id of the existing HttpRedirectionRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpRedirectionRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_http_redirection_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/http_redirection_record constellix_http_redirection_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpRedirectionRecordConfig
  */
  public constructor(scope: Construct, id: string, config: HttpRedirectionRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_http_redirection_record',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domainId = config.domainId;
    this._gtdRegion = config.gtdRegion;
    this._hardlinkFlag = config.hardlinkFlag;
    this._id = config.id;
    this._keywords = config.keywords;
    this._name = config.name;
    this._noanswer = config.noanswer;
    this._note = config.note;
    this._parent = config.parent;
    this._parentid = config.parentid;
    this._redirectTypeId = config.redirectTypeId;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._title = config.title;
    this._ttl = config.ttl;
    this._type = config.type;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // gtd_region - computed: true, optional: true, required: false
  private _gtdRegion?: number; 
  public get gtdRegion() {
    return this.getNumberAttribute('gtd_region');
  }
  public set gtdRegion(value: number) {
    this._gtdRegion = value;
  }
  public resetGtdRegion() {
    this._gtdRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtdRegionInput() {
    return this._gtdRegion;
  }

  // hardlink_flag - computed: true, optional: true, required: false
  private _hardlinkFlag?: boolean | cdktf.IResolvable; 
  public get hardlinkFlag() {
    return this.getBooleanAttribute('hardlink_flag');
  }
  public set hardlinkFlag(value: boolean | cdktf.IResolvable) {
    this._hardlinkFlag = value;
  }
  public resetHardlinkFlag() {
    this._hardlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardlinkFlagInput() {
    return this._hardlinkFlag;
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

  // keywords - computed: true, optional: true, required: false
  private _keywords?: string; 
  public get keywords() {
    return this.getStringAttribute('keywords');
  }
  public set keywords(value: string) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // noanswer - computed: true, optional: true, required: false
  private _noanswer?: boolean | cdktf.IResolvable; 
  public get noanswer() {
    return this.getBooleanAttribute('noanswer');
  }
  public set noanswer(value: boolean | cdktf.IResolvable) {
    this._noanswer = value;
  }
  public resetNoanswer() {
    this._noanswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noanswerInput() {
    return this._noanswer;
  }

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parentid - computed: true, optional: true, required: false
  private _parentid?: number; 
  public get parentid() {
    return this.getNumberAttribute('parentid');
  }
  public set parentid(value: number) {
    this._parentid = value;
  }
  public resetParentid() {
    this._parentid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentidInput() {
    return this._parentid;
  }

  // redirect_type_id - computed: false, optional: false, required: true
  private _redirectTypeId?: number; 
  public get redirectTypeId() {
    return this.getNumberAttribute('redirect_type_id');
  }
  public set redirectTypeId(value: number) {
    this._redirectTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeIdInput() {
    return this._redirectTypeId;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      gtd_region: cdktf.numberToTerraform(this._gtdRegion),
      hardlink_flag: cdktf.booleanToTerraform(this._hardlinkFlag),
      id: cdktf.stringToTerraform(this._id),
      keywords: cdktf.stringToTerraform(this._keywords),
      name: cdktf.stringToTerraform(this._name),
      noanswer: cdktf.booleanToTerraform(this._noanswer),
      note: cdktf.stringToTerraform(this._note),
      parent: cdktf.stringToTerraform(this._parent),
      parentid: cdktf.numberToTerraform(this._parentid),
      redirect_type_id: cdktf.numberToTerraform(this._redirectTypeId),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      title: cdktf.stringToTerraform(this._title),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtd_region: {
        value: cdktf.numberToHclTerraform(this._gtdRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hardlink_flag: {
        value: cdktf.booleanToHclTerraform(this._hardlinkFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keywords: {
        value: cdktf.stringToHclTerraform(this._keywords),
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
      noanswer: {
        value: cdktf.booleanToHclTerraform(this._noanswer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parentid: {
        value: cdktf.numberToHclTerraform(this._parentid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_type_id: {
        value: cdktf.numberToHclTerraform(this._redirectTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
