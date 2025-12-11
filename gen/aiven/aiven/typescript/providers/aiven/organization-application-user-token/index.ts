// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationApplicationUserTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description. Maximum length: `1000`. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#description OrganizationApplicationUserToken#description}
  */
  readonly description?: string;
  /**
  * Extend token expiration time when token is used. Only applicable if max_age_seconds is specified. The default value is `false`. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#extend_when_used OrganizationApplicationUserToken#extend_when_used}
  */
  readonly extendWhenUsed?: boolean | cdktf.IResolvable;
  /**
  * List of allowed IP ranges. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#ip_allowlist OrganizationApplicationUserToken#ip_allowlist}
  */
  readonly ipAllowlist?: string[];
  /**
  * Time the token remains valid since creation (or since last use if extend_when_used is true). Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#max_age_seconds OrganizationApplicationUserToken#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
  /**
  * ID of an organization. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#organization_id OrganizationApplicationUserToken#organization_id}
  */
  readonly organizationId: string;
  /**
  * Scopes this token is restricted to if specified. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#scopes OrganizationApplicationUserToken#scopes}
  */
  readonly scopes?: string[];
  /**
  * User ID. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#user_id OrganizationApplicationUserToken#user_id}
  */
  readonly userId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#timeouts OrganizationApplicationUserToken#timeouts}
  */
  readonly timeouts?: OrganizationApplicationUserTokenTimeouts;
}
export interface OrganizationApplicationUserTokenTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#create OrganizationApplicationUserToken#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#delete OrganizationApplicationUserToken#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#read OrganizationApplicationUserToken#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#update OrganizationApplicationUserToken#update}
  */
  readonly update?: string;
}

export function organizationApplicationUserTokenTimeoutsToTerraform(struct?: OrganizationApplicationUserTokenTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function organizationApplicationUserTokenTimeoutsToHclTerraform(struct?: OrganizationApplicationUserTokenTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationApplicationUserTokenTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationApplicationUserTokenTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationApplicationUserTokenTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token aiven_organization_application_user_token}
*/
export class OrganizationApplicationUserToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_organization_application_user_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationApplicationUserToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationApplicationUserToken to import
  * @param importFromId The id of the existing OrganizationApplicationUserToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationApplicationUserToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_organization_application_user_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_application_user_token aiven_organization_application_user_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationApplicationUserTokenConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationApplicationUserTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_organization_application_user_token',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
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
    this._extendWhenUsed = config.extendWhenUsed;
    this._ipAllowlist = config.ipAllowlist;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._organizationId = config.organizationId;
    this._scopes = config.scopes;
    this._userId = config.userId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_manually - computed: true, optional: false, required: false
  public get createdManually() {
    return this.getBooleanAttribute('created_manually');
  }

  // currently_active - computed: true, optional: false, required: false
  public get currentlyActive() {
    return this.getBooleanAttribute('currently_active');
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

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }

  // extend_when_used - computed: true, optional: true, required: false
  private _extendWhenUsed?: boolean | cdktf.IResolvable; 
  public get extendWhenUsed() {
    return this.getBooleanAttribute('extend_when_used');
  }
  public set extendWhenUsed(value: boolean | cdktf.IResolvable) {
    this._extendWhenUsed = value;
  }
  public resetExtendWhenUsed() {
    this._extendWhenUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendWhenUsedInput() {
    return this._extendWhenUsed;
  }

  // full_token - computed: true, optional: false, required: false
  public get fullToken() {
    return this.getStringAttribute('full_token');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist?: string[]; 
  public get ipAllowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_allowlist'));
  }
  public set ipAllowlist(value: string[]) {
    this._ipAllowlist = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist;
  }

  // last_ip - computed: true, optional: false, required: false
  public get lastIp() {
    return this.getStringAttribute('last_ip');
  }

  // last_used_time - computed: true, optional: false, required: false
  public get lastUsedTime() {
    return this.getStringAttribute('last_used_time');
  }

  // last_user_agent - computed: true, optional: false, required: false
  public get lastUserAgent() {
    return this.getStringAttribute('last_user_agent');
  }

  // last_user_agent_human_readable - computed: true, optional: false, required: false
  public get lastUserAgentHumanReadable() {
    return this.getStringAttribute('last_user_agent_human_readable');
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_prefix - computed: true, optional: false, required: false
  public get tokenPrefix() {
    return this.getStringAttribute('token_prefix');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationApplicationUserTokenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationApplicationUserTokenTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      extend_when_used: cdktf.booleanToTerraform(this._extendWhenUsed),
      ip_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAllowlist),
      max_age_seconds: cdktf.numberToTerraform(this._maxAgeSeconds),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      user_id: cdktf.stringToTerraform(this._userId),
      timeouts: organizationApplicationUserTokenTimeoutsToTerraform(this._timeouts.internalValue),
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
      extend_when_used: {
        value: cdktf.booleanToHclTerraform(this._extendWhenUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAllowlist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_age_seconds: {
        value: cdktf.numberToHclTerraform(this._maxAgeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: organizationApplicationUserTokenTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationApplicationUserTokenTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
