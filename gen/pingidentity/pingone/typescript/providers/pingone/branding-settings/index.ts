// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandingSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The company name associated with the specified environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings#company_name BrandingSettings#company_name}
  */
  readonly companyName?: string;
  /**
  * The ID of the environment to set branding settings for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings#environment_id BrandingSettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single object that specifies the HREF and ID for the company logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings#logo_image BrandingSettings#logo_image}
  */
  readonly logoImage?: BrandingSettingsLogoImage;
}
export interface BrandingSettingsLogoImage {
  /**
  * The URL or fully qualified path to the logo file used for branding.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings#href BrandingSettings#href}
  */
  readonly href: string;
  /**
  * The ID of the logo image.  This can be retrieved from the `id` parameter of the `pingone_image` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings#id BrandingSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function brandingSettingsLogoImageToTerraform(struct?: BrandingSettingsLogoImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function brandingSettingsLogoImageToHclTerraform(struct?: BrandingSettingsLogoImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class BrandingSettingsLogoImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrandingSettingsLogoImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingSettingsLogoImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
    }
  }

  // href - computed: true, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // id - computed: true, optional: false, required: true
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings pingone_branding_settings}
*/
export class BrandingSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_branding_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrandingSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrandingSettings to import
  * @param importFromId The id of the existing BrandingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrandingSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_branding_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_settings pingone_branding_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandingSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: BrandingSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_branding_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._companyName = config.companyName;
    this._environmentId = config.environmentId;
    this._logoImage.internalValue = config.logoImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_name - computed: true, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logo_image - computed: true, optional: true, required: false
  private _logoImage = new BrandingSettingsLogoImageOutputReference(this, "logo_image");
  public get logoImage() {
    return this._logoImage;
  }
  public putLogoImage(value: BrandingSettingsLogoImage) {
    this._logoImage.internalValue = value;
  }
  public resetLogoImage() {
    this._logoImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageInput() {
    return this._logoImage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_name: cdktf.stringToTerraform(this._companyName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      logo_image: brandingSettingsLogoImageToTerraform(this._logoImage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_image: {
        value: brandingSettingsLogoImageToHclTerraform(this._logoImage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrandingSettingsLogoImage",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
