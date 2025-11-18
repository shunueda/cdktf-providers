// https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapSecurityInsightSilenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The author of the silence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#author WaapSecurityInsightSilence#author}
  */
  readonly author: string;
  /**
  * A comment explaining the reason for the silence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#comment WaapSecurityInsightSilence#comment}
  */
  readonly comment: string;
  /**
  * The WAAP domain ID for which the insight silence is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#domain_id WaapSecurityInsightSilence#domain_id}
  */
  readonly domainId: number;
  /**
  * The date and time the silence expires in ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#expire_at WaapSecurityInsightSilence#expire_at}
  */
  readonly expireAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#id WaapSecurityInsightSilence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the insight type. The insight type can be obtained from the API endpoint /v1/security-insights/types or you can use the gcore_waap_security_insight_type data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#insight_type WaapSecurityInsightSilence#insight_type}
  */
  readonly insightType: string;
  /**
  * A hash table of label names and values that apply to the insight silence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#labels WaapSecurityInsightSilence#labels}
  */
  readonly labels: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence gcore_waap_security_insight_silence}
*/
export class WaapSecurityInsightSilence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_security_insight_silence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapSecurityInsightSilence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapSecurityInsightSilence to import
  * @param importFromId The id of the existing WaapSecurityInsightSilence that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapSecurityInsightSilence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_security_insight_silence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.0/docs/resources/waap_security_insight_silence gcore_waap_security_insight_silence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapSecurityInsightSilenceConfig
  */
  public constructor(scope: Construct, id: string, config: WaapSecurityInsightSilenceConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_security_insight_silence',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.0',
        providerVersionConstraint: '0.32.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._author = config.author;
    this._comment = config.comment;
    this._domainId = config.domainId;
    this._expireAt = config.expireAt;
    this._id = config.id;
    this._insightType = config.insightType;
    this._labels = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: false, optional: false, required: true
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // expire_at - computed: false, optional: true, required: false
  private _expireAt?: string; 
  public get expireAt() {
    return this.getStringAttribute('expire_at');
  }
  public set expireAt(value: string) {
    this._expireAt = value;
  }
  public resetExpireAt() {
    this._expireAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAtInput() {
    return this._expireAt;
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

  // insight_type - computed: false, optional: false, required: true
  private _insightType?: string; 
  public get insightType() {
    return this.getStringAttribute('insight_type');
  }
  public set insightType(value: string) {
    this._insightType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightTypeInput() {
    return this._insightType;
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author: cdktf.stringToTerraform(this._author),
      comment: cdktf.stringToTerraform(this._comment),
      domain_id: cdktf.numberToTerraform(this._domainId),
      expire_at: cdktf.stringToTerraform(this._expireAt),
      id: cdktf.stringToTerraform(this._id),
      insight_type: cdktf.stringToTerraform(this._insightType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author: {
        value: cdktf.stringToHclTerraform(this._author),
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
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expire_at: {
        value: cdktf.stringToHclTerraform(this._expireAt),
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
      insight_type: {
        value: cdktf.stringToHclTerraform(this._insightType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
