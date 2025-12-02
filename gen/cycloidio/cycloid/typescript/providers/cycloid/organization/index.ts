// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization#canonical Organization#canonical}
  */
  readonly canonical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization#organization_canonical Organization#organization_canonical}
  */
  readonly organizationCanonical?: string;
}
export interface OrganizationDataAppearanceColor {
}

export function organizationDataAppearanceColorToTerraform(struct?: OrganizationDataAppearanceColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationDataAppearanceColorToHclTerraform(struct?: OrganizationDataAppearanceColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationDataAppearanceColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationDataAppearanceColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationDataAppearanceColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // b - computed: true, optional: false, required: false
  public get b() {
    return this.getNumberAttribute('b');
  }

  // g - computed: true, optional: false, required: false
  public get g() {
    return this.getNumberAttribute('g');
  }

  // r - computed: true, optional: false, required: false
  public get r() {
    return this.getNumberAttribute('r');
  }
}
export interface OrganizationDataAppearance {
}

export function organizationDataAppearanceToTerraform(struct?: OrganizationDataAppearance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationDataAppearanceToHclTerraform(struct?: OrganizationDataAppearance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationDataAppearanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationDataAppearance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationDataAppearance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // color - computed: true, optional: false, required: false
  private _color = new OrganizationDataAppearanceColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // favicon - computed: true, optional: false, required: false
  public get favicon() {
    return this.getStringAttribute('favicon');
  }

  // footer - computed: true, optional: false, required: false
  public get footer() {
    return this.getStringAttribute('footer');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tab_title - computed: true, optional: false, required: false
  public get tabTitle() {
    return this.getStringAttribute('tab_title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
}
export interface OrganizationDataSubscriptionPlan {
}

export function organizationDataSubscriptionPlanToTerraform(struct?: OrganizationDataSubscriptionPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationDataSubscriptionPlanToHclTerraform(struct?: OrganizationDataSubscriptionPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationDataSubscriptionPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationDataSubscriptionPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationDataSubscriptionPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface OrganizationDataSubscription {
}

export function organizationDataSubscriptionToTerraform(struct?: OrganizationDataSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationDataSubscriptionToHclTerraform(struct?: OrganizationDataSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationDataSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationDataSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationDataSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_members - computed: true, optional: false, required: false
  public get currentMembers() {
    return this.getNumberAttribute('current_members');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getNumberAttribute('expires_at');
  }

  // members_count - computed: true, optional: false, required: false
  public get membersCount() {
    return this.getNumberAttribute('members_count');
  }

  // plan - computed: true, optional: false, required: false
  private _plan = new OrganizationDataSubscriptionPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
}
export interface OrganizationData {
}

export function organizationDataToTerraform(struct?: OrganizationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationDataToHclTerraform(struct?: OrganizationData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appearance - computed: true, optional: false, required: false
  private _appearance = new OrganizationDataAppearanceOutputReference(this, "appearance");
  public get appearance() {
    return this._appearance;
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getListAttribute('blocked');
  }

  // can_children_create_appearance - computed: true, optional: false, required: false
  public get canChildrenCreateAppearance() {
    return this.getBooleanAttribute('can_children_create_appearance');
  }

  // can_create_appearance - computed: true, optional: false, required: false
  public get canCreateAppearance() {
    return this.getBooleanAttribute('can_create_appearance');
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // ci_port - computed: true, optional: false, required: false
  public get ciPort() {
    return this.getStringAttribute('ci_port');
  }

  // ci_team_name - computed: true, optional: false, required: false
  public get ciTeamName() {
    return this.getStringAttribute('ci_team_name');
  }

  // ci_url - computed: true, optional: false, required: false
  public get ciUrl() {
    return this.getStringAttribute('ci_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // has_children - computed: true, optional: false, required: false
  public get hasChildren() {
    return this.getBooleanAttribute('has_children');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mfa_enabled - computed: true, optional: false, required: false
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quotas - computed: true, optional: false, required: false
  public get quotas() {
    return this.getBooleanAttribute('quotas');
  }

  // subscription - computed: true, optional: false, required: false
  private _subscription = new OrganizationDataSubscriptionOutputReference(this, "subscription");
  public get subscription() {
    return this._subscription;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization cycloid_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/organization cycloid_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_organization',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonical = config.canonical;
    this._name = config.name;
    this._organizationCanonical = config.organizationCanonical;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical - computed: true, optional: true, required: false
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  public resetCanonical() {
    this._canonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
  }

  // data - computed: true, optional: false, required: false
  private _data = new OrganizationDataOutputReference(this, "data");
  public get data() {
    return this._data;
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

  // organization_canonical - computed: true, optional: true, required: false
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  public resetOrganizationCanonical() {
    this._organizationCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical: cdktf.stringToTerraform(this._canonical),
      name: cdktf.stringToTerraform(this._name),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
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
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
