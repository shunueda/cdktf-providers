// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/captcha_provider_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CaptchaProviderSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the default CAPTCHA provider, if one is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/captcha_provider_settings#default_captcha_provider_ref CaptchaProviderSettings#default_captcha_provider_ref}
  */
  readonly defaultCaptchaProviderRef?: CaptchaProviderSettingsDefaultCaptchaProviderRef;
}
export interface CaptchaProviderSettingsDefaultCaptchaProviderRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/captcha_provider_settings#id CaptchaProviderSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function captchaProviderSettingsDefaultCaptchaProviderRefToTerraform(struct?: CaptchaProviderSettingsDefaultCaptchaProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function captchaProviderSettingsDefaultCaptchaProviderRefToHclTerraform(struct?: CaptchaProviderSettingsDefaultCaptchaProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CaptchaProviderSettingsDefaultCaptchaProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CaptchaProviderSettingsDefaultCaptchaProviderRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CaptchaProviderSettingsDefaultCaptchaProviderRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/captcha_provider_settings pingfederate_captcha_provider_settings}
*/
export class CaptchaProviderSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_captcha_provider_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CaptchaProviderSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CaptchaProviderSettings to import
  * @param importFromId The id of the existing CaptchaProviderSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/captcha_provider_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CaptchaProviderSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_captcha_provider_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/captcha_provider_settings pingfederate_captcha_provider_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CaptchaProviderSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CaptchaProviderSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_captcha_provider_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultCaptchaProviderRef.internalValue = config.defaultCaptchaProviderRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_captcha_provider_ref - computed: false, optional: true, required: false
  private _defaultCaptchaProviderRef = new CaptchaProviderSettingsDefaultCaptchaProviderRefOutputReference(this, "default_captcha_provider_ref");
  public get defaultCaptchaProviderRef() {
    return this._defaultCaptchaProviderRef;
  }
  public putDefaultCaptchaProviderRef(value: CaptchaProviderSettingsDefaultCaptchaProviderRef) {
    this._defaultCaptchaProviderRef.internalValue = value;
  }
  public resetDefaultCaptchaProviderRef() {
    this._defaultCaptchaProviderRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCaptchaProviderRefInput() {
    return this._defaultCaptchaProviderRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_captcha_provider_ref: captchaProviderSettingsDefaultCaptchaProviderRefToTerraform(this._defaultCaptchaProviderRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_captcha_provider_ref: {
        value: captchaProviderSettingsDefaultCaptchaProviderRefToHclTerraform(this._defaultCaptchaProviderRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CaptchaProviderSettingsDefaultCaptchaProviderRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
