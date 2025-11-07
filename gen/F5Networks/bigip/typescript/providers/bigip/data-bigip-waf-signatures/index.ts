// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipWafSignaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The relative detection accuracy of the signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#accuracy DataBigipWafSignatures#accuracy}
  */
  readonly accuracy?: string;
  /**
  * Description of the signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#description DataBigipWafSignatures#description}
  */
  readonly description?: string;
  /**
  * Specifies, if true, that the signature is enabled on the security policy. When false, the signature is disable on the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#enabled DataBigipWafSignatures#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#id DataBigipWafSignatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#name DataBigipWafSignatures#name}
  */
  readonly name?: string;
  /**
  * The relative detection accuracy of the signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#perform_staging DataBigipWafSignatures#perform_staging}
  */
  readonly performStaging?: boolean | cdktf.IResolvable;
  /**
  * The relative risk level of the attack that matches this signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#risk DataBigipWafSignatures#risk}
  */
  readonly risk?: string;
  /**
  * ID of the signature in the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#signature_id DataBigipWafSignatures#signature_id}
  */
  readonly signatureId: number;
  /**
  * System generated ID of the signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#system_signature_id DataBigipWafSignatures#system_signature_id}
  */
  readonly systemSignatureId?: string;
  /**
  * The signature tag which, along with the signature name, identifies the signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#tag DataBigipWafSignatures#tag}
  */
  readonly tag?: string;
  /**
  * Type of the signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#type DataBigipWafSignatures#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures bigip_waf_signatures}
*/
export class DataBigipWafSignatures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_waf_signatures";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipWafSignatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipWafSignatures to import
  * @param importFromId The id of the existing DataBigipWafSignatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipWafSignatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_waf_signatures", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_signatures bigip_waf_signatures} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipWafSignaturesConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipWafSignaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_waf_signatures',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accuracy = config.accuracy;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._performStaging = config.performStaging;
    this._risk = config.risk;
    this._signatureId = config.signatureId;
    this._systemSignatureId = config.systemSignatureId;
    this._tag = config.tag;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accuracy - computed: true, optional: true, required: false
  private _accuracy?: string; 
  public get accuracy() {
    return this.getStringAttribute('accuracy');
  }
  public set accuracy(value: string) {
    this._accuracy = value;
  }
  public resetAccuracy() {
    this._accuracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accuracyInput() {
    return this._accuracy;
  }

  // description - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // name - computed: true, optional: true, required: false
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

  // perform_staging - computed: false, optional: true, required: false
  private _performStaging?: boolean | cdktf.IResolvable; 
  public get performStaging() {
    return this.getBooleanAttribute('perform_staging');
  }
  public set performStaging(value: boolean | cdktf.IResolvable) {
    this._performStaging = value;
  }
  public resetPerformStaging() {
    this._performStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performStagingInput() {
    return this._performStaging;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }

  // system_signature_id - computed: true, optional: true, required: false
  private _systemSignatureId?: string; 
  public get systemSignatureId() {
    return this.getStringAttribute('system_signature_id');
  }
  public set systemSignatureId(value: string) {
    this._systemSignatureId = value;
  }
  public resetSystemSignatureId() {
    this._systemSignatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSignatureIdInput() {
    return this._systemSignatureId;
  }

  // tag - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accuracy: cdktf.stringToTerraform(this._accuracy),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      perform_staging: cdktf.booleanToTerraform(this._performStaging),
      risk: cdktf.stringToTerraform(this._risk),
      signature_id: cdktf.numberToTerraform(this._signatureId),
      system_signature_id: cdktf.stringToTerraform(this._systemSignatureId),
      tag: cdktf.stringToTerraform(this._tag),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accuracy: {
        value: cdktf.stringToHclTerraform(this._accuracy),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perform_staging: {
        value: cdktf.booleanToHclTerraform(this._performStaging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk: {
        value: cdktf.stringToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_id: {
        value: cdktf.numberToHclTerraform(this._signatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_signature_id: {
        value: cdktf.stringToHclTerraform(this._systemSignatureId),
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
