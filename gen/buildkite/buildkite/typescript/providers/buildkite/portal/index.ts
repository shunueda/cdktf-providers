// https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Space-delimited list of IP addresses (in CIDR notation) allowed to invoke this portal. If not specified, all IP addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#allowed_ip_addresses Portal#allowed_ip_addresses}
  */
  readonly allowedIpAddresses?: string;
  /**
  * A description of the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#description Portal#description}
  */
  readonly description?: string;
  /**
  * The name of the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#name Portal#name}
  */
  readonly name: string;
  /**
  * The GraphQL query that the portal executes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#query Portal#query}
  */
  readonly query: string;
  /**
  * The slug of the portal. Used in the portal's URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#slug Portal#slug}
  */
  readonly slug: string;
  /**
  * Whether users can invoke the portal. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#user_invokable Portal#user_invokable}
  */
  readonly userInvokable?: boolean | cdktf.IResolvable;
}
export interface PortalCreatedBy {
}

export function portalCreatedByToTerraform(struct?: PortalCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portalCreatedByToHclTerraform(struct?: PortalCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortalCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal buildkite_portal}
*/
export class Portal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Portal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Portal to import
  * @param importFromId The id of the existing Portal that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Portal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/portal buildkite_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalConfig
  */
  public constructor(scope: Construct, id: string, config: PortalConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_portal',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.0',
        providerVersionConstraint: '1.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIpAddresses = config.allowedIpAddresses;
    this._description = config.description;
    this._name = config.name;
    this._query = config.query;
    this._slug = config.slug;
    this._userInvokable = config.userInvokable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_addresses - computed: false, optional: true, required: false
  private _allowedIpAddresses?: string; 
  public get allowedIpAddresses() {
    return this.getStringAttribute('allowed_ip_addresses');
  }
  public set allowedIpAddresses(value: string) {
    this._allowedIpAddresses = value;
  }
  public resetAllowedIpAddresses() {
    this._allowedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new PortalCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_invokable - computed: true, optional: true, required: false
  private _userInvokable?: boolean | cdktf.IResolvable; 
  public get userInvokable() {
    return this.getBooleanAttribute('user_invokable');
  }
  public set userInvokable(value: boolean | cdktf.IResolvable) {
    this._userInvokable = value;
  }
  public resetUserInvokable() {
    this._userInvokable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInvokableInput() {
    return this._userInvokable;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_ip_addresses: cdktf.stringToTerraform(this._allowedIpAddresses),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      slug: cdktf.stringToTerraform(this._slug),
      user_invokable: cdktf.booleanToTerraform(this._userInvokable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_addresses: {
        value: cdktf.stringToHclTerraform(this._allowedIpAddresses),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_invokable: {
        value: cdktf.booleanToHclTerraform(this._userInvokable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
