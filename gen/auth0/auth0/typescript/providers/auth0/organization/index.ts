// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Friendly name of this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#display_name Organization#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#id Organization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata associated with the organization. Maximum of 10 metadata properties allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#metadata Organization#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name of this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * branding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#branding Organization#branding}
  */
  readonly branding?: OrganizationBranding;
  /**
  * token_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#token_quota Organization#token_quota}
  */
  readonly tokenQuota?: OrganizationTokenQuota;
}
export interface OrganizationBranding {
  /**
  * Color scheme used to customize the login pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#colors Organization#colors}
  */
  readonly colors?: { [key: string]: string };
  /**
  * URL of logo to display on login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#logo_url Organization#logo_url}
  */
  readonly logoUrl?: string;
}

export function organizationBrandingToTerraform(struct?: OrganizationBrandingOutputReference | OrganizationBranding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.colors),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
  }
}


export function organizationBrandingToHclTerraform(struct?: OrganizationBrandingOutputReference | OrganizationBranding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.colors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationBrandingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationBranding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationBranding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colors = undefined;
      this._logoUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colors = value.colors;
      this._logoUrl = value.logoUrl;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors?: { [key: string]: string }; 
  public get colors() {
    return this.getStringMapAttribute('colors');
  }
  public set colors(value: { [key: string]: string }) {
    this._colors = value;
  }
  public resetColors() {
    this._colors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }
}
export interface OrganizationTokenQuotaClientCredentials {
  /**
  * If enabled, the quota will be enforced and requests in excess of the quota will fail. If disabled, the quota will not be enforced, but notifications for requests exceeding the quota will be available in logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#enforce Organization#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of issued tokens per day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#per_day Organization#per_day}
  */
  readonly perDay?: number;
  /**
  * Maximum number of issued tokens per hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#per_hour Organization#per_hour}
  */
  readonly perHour?: number;
}

export function organizationTokenQuotaClientCredentialsToTerraform(struct?: OrganizationTokenQuotaClientCredentialsOutputReference | OrganizationTokenQuotaClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    per_day: cdktf.numberToTerraform(struct!.perDay),
    per_hour: cdktf.numberToTerraform(struct!.perHour),
  }
}


export function organizationTokenQuotaClientCredentialsToHclTerraform(struct?: OrganizationTokenQuotaClientCredentialsOutputReference | OrganizationTokenQuotaClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_day: {
      value: cdktf.numberToHclTerraform(struct!.perDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_hour: {
      value: cdktf.numberToHclTerraform(struct!.perHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationTokenQuotaClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationTokenQuotaClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._perDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.perDay = this._perDay;
    }
    if (this._perHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHour = this._perHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationTokenQuotaClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._perDay = undefined;
      this._perHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._perDay = value.perDay;
      this._perHour = value.perHour;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // per_day - computed: false, optional: true, required: false
  private _perDay?: number; 
  public get perDay() {
    return this.getNumberAttribute('per_day');
  }
  public set perDay(value: number) {
    this._perDay = value;
  }
  public resetPerDay() {
    this._perDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDayInput() {
    return this._perDay;
  }

  // per_hour - computed: false, optional: true, required: false
  private _perHour?: number; 
  public get perHour() {
    return this.getNumberAttribute('per_hour');
  }
  public set perHour(value: number) {
    this._perHour = value;
  }
  public resetPerHour() {
    this._perHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHourInput() {
    return this._perHour;
  }
}
export interface OrganizationTokenQuota {
  /**
  * client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#client_credentials Organization#client_credentials}
  */
  readonly clientCredentials: OrganizationTokenQuotaClientCredentials;
}

export function organizationTokenQuotaToTerraform(struct?: OrganizationTokenQuotaOutputReference | OrganizationTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials: organizationTokenQuotaClientCredentialsToTerraform(struct!.clientCredentials),
  }
}


export function organizationTokenQuotaToHclTerraform(struct?: OrganizationTokenQuotaOutputReference | OrganizationTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials: {
      value: organizationTokenQuotaClientCredentialsToHclTerraform(struct!.clientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationTokenQuotaClientCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationTokenQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationTokenQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentials = this._clientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationTokenQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCredentials.internalValue = value.clientCredentials;
    }
  }

  // client_credentials - computed: false, optional: false, required: true
  private _clientCredentials = new OrganizationTokenQuotaClientCredentialsOutputReference(this, "client_credentials");
  public get clientCredentials() {
    return this._clientCredentials;
  }
  public putClientCredentials(value: OrganizationTokenQuotaClientCredentials) {
    this._clientCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsInput() {
    return this._clientCredentials.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization auth0_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization auth0_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_organization',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._branding.internalValue = config.branding;
    this._tokenQuota.internalValue = config.tokenQuota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // branding - computed: false, optional: true, required: false
  private _branding = new OrganizationBrandingOutputReference(this, "branding");
  public get branding() {
    return this._branding;
  }
  public putBranding(value: OrganizationBranding) {
    this._branding.internalValue = value;
  }
  public resetBranding() {
    this._branding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingInput() {
    return this._branding.internalValue;
  }

  // token_quota - computed: false, optional: true, required: false
  private _tokenQuota = new OrganizationTokenQuotaOutputReference(this, "token_quota");
  public get tokenQuota() {
    return this._tokenQuota;
  }
  public putTokenQuota(value: OrganizationTokenQuota) {
    this._tokenQuota.internalValue = value;
  }
  public resetTokenQuota() {
    this._tokenQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenQuotaInput() {
    return this._tokenQuota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      branding: organizationBrandingToTerraform(this._branding.internalValue),
      token_quota: organizationTokenQuotaToTerraform(this._tokenQuota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
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
      branding: {
        value: organizationBrandingToHclTerraform(this._branding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationBrandingList",
      },
      token_quota: {
        value: organizationTokenQuotaToHclTerraform(this._tokenQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationTokenQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
