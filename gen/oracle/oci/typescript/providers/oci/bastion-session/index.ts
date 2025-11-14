// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}
  */
  readonly bastionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#display_name BastionSession#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#id BastionSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#key_type BastionSession#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}
  */
  readonly sessionTtlInSeconds?: number;
  /**
  * key_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#key_details BastionSession#key_details}
  */
  readonly keyDetails: BastionSessionKeyDetails;
  /**
  * target_resource_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#target_resource_details BastionSession#target_resource_details}
  */
  readonly targetResourceDetails: BastionSessionTargetResourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#timeouts BastionSession#timeouts}
  */
  readonly timeouts?: BastionSessionTimeouts;
}
export interface BastionSessionKeyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#public_key_content BastionSession#public_key_content}
  */
  readonly publicKeyContent: string;
}

export function bastionSessionKeyDetailsToTerraform(struct?: BastionSessionKeyDetailsOutputReference | BastionSessionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_content: cdktf.stringToTerraform(struct!.publicKeyContent),
  }
}


export function bastionSessionKeyDetailsToHclTerraform(struct?: BastionSessionKeyDetailsOutputReference | BastionSessionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key_content: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BastionSessionKeyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BastionSessionKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKeyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyContent = this._publicKeyContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BastionSessionKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKeyContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKeyContent = value.publicKeyContent;
    }
  }

  // public_key_content - computed: false, optional: false, required: true
  private _publicKeyContent?: string; 
  public get publicKeyContent() {
    return this.getStringAttribute('public_key_content');
  }
  public set publicKeyContent(value: string) {
    this._publicKeyContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyContentInput() {
    return this._publicKeyContent;
  }
}
export interface BastionSessionTargetResourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#session_type BastionSession#session_type}
  */
  readonly sessionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#target_resource_fqdn BastionSession#target_resource_fqdn}
  */
  readonly targetResourceFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#target_resource_id BastionSession#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#target_resource_operating_system_user_name BastionSession#target_resource_operating_system_user_name}
  */
  readonly targetResourceOperatingSystemUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#target_resource_port BastionSession#target_resource_port}
  */
  readonly targetResourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#target_resource_private_ip_address BastionSession#target_resource_private_ip_address}
  */
  readonly targetResourcePrivateIpAddress?: string;
}

export function bastionSessionTargetResourceDetailsToTerraform(struct?: BastionSessionTargetResourceDetailsOutputReference | BastionSessionTargetResourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_type: cdktf.stringToTerraform(struct!.sessionType),
    target_resource_fqdn: cdktf.stringToTerraform(struct!.targetResourceFqdn),
    target_resource_id: cdktf.stringToTerraform(struct!.targetResourceId),
    target_resource_operating_system_user_name: cdktf.stringToTerraform(struct!.targetResourceOperatingSystemUserName),
    target_resource_port: cdktf.numberToTerraform(struct!.targetResourcePort),
    target_resource_private_ip_address: cdktf.stringToTerraform(struct!.targetResourcePrivateIpAddress),
  }
}


export function bastionSessionTargetResourceDetailsToHclTerraform(struct?: BastionSessionTargetResourceDetailsOutputReference | BastionSessionTargetResourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_type: {
      value: cdktf.stringToHclTerraform(struct!.sessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.targetResourceFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.targetResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_operating_system_user_name: {
      value: cdktf.stringToHclTerraform(struct!.targetResourceOperatingSystemUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_port: {
      value: cdktf.numberToHclTerraform(struct!.targetResourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_resource_private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.targetResourcePrivateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BastionSessionTargetResourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BastionSessionTargetResourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionType = this._sessionType;
    }
    if (this._targetResourceFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceFqdn = this._targetResourceFqdn;
    }
    if (this._targetResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceId = this._targetResourceId;
    }
    if (this._targetResourceOperatingSystemUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceOperatingSystemUserName = this._targetResourceOperatingSystemUserName;
    }
    if (this._targetResourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourcePort = this._targetResourcePort;
    }
    if (this._targetResourcePrivateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourcePrivateIpAddress = this._targetResourcePrivateIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BastionSessionTargetResourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionType = undefined;
      this._targetResourceFqdn = undefined;
      this._targetResourceId = undefined;
      this._targetResourceOperatingSystemUserName = undefined;
      this._targetResourcePort = undefined;
      this._targetResourcePrivateIpAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionType = value.sessionType;
      this._targetResourceFqdn = value.targetResourceFqdn;
      this._targetResourceId = value.targetResourceId;
      this._targetResourceOperatingSystemUserName = value.targetResourceOperatingSystemUserName;
      this._targetResourcePort = value.targetResourcePort;
      this._targetResourcePrivateIpAddress = value.targetResourcePrivateIpAddress;
    }
  }

  // session_type - computed: false, optional: false, required: true
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
  }

  // target_resource_display_name - computed: true, optional: false, required: false
  public get targetResourceDisplayName() {
    return this.getStringAttribute('target_resource_display_name');
  }

  // target_resource_fqdn - computed: true, optional: true, required: false
  private _targetResourceFqdn?: string; 
  public get targetResourceFqdn() {
    return this.getStringAttribute('target_resource_fqdn');
  }
  public set targetResourceFqdn(value: string) {
    this._targetResourceFqdn = value;
  }
  public resetTargetResourceFqdn() {
    this._targetResourceFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceFqdnInput() {
    return this._targetResourceFqdn;
  }

  // target_resource_id - computed: true, optional: true, required: false
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  public resetTargetResourceId() {
    this._targetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_operating_system_user_name - computed: true, optional: true, required: false
  private _targetResourceOperatingSystemUserName?: string; 
  public get targetResourceOperatingSystemUserName() {
    return this.getStringAttribute('target_resource_operating_system_user_name');
  }
  public set targetResourceOperatingSystemUserName(value: string) {
    this._targetResourceOperatingSystemUserName = value;
  }
  public resetTargetResourceOperatingSystemUserName() {
    this._targetResourceOperatingSystemUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceOperatingSystemUserNameInput() {
    return this._targetResourceOperatingSystemUserName;
  }

  // target_resource_port - computed: true, optional: true, required: false
  private _targetResourcePort?: number; 
  public get targetResourcePort() {
    return this.getNumberAttribute('target_resource_port');
  }
  public set targetResourcePort(value: number) {
    this._targetResourcePort = value;
  }
  public resetTargetResourcePort() {
    this._targetResourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcePortInput() {
    return this._targetResourcePort;
  }

  // target_resource_private_ip_address - computed: true, optional: true, required: false
  private _targetResourcePrivateIpAddress?: string; 
  public get targetResourcePrivateIpAddress() {
    return this.getStringAttribute('target_resource_private_ip_address');
  }
  public set targetResourcePrivateIpAddress(value: string) {
    this._targetResourcePrivateIpAddress = value;
  }
  public resetTargetResourcePrivateIpAddress() {
    this._targetResourcePrivateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcePrivateIpAddressInput() {
    return this._targetResourcePrivateIpAddress;
  }
}
export interface BastionSessionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#create BastionSession#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#delete BastionSession#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#update BastionSession#update}
  */
  readonly update?: string;
}

export function bastionSessionTimeoutsToTerraform(struct?: BastionSessionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bastionSessionTimeoutsToHclTerraform(struct?: BastionSessionTimeouts | cdktf.IResolvable): any {
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

export class BastionSessionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BastionSessionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BastionSessionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session oci_bastion_session}
*/
export class BastionSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bastion_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BastionSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionSession to import
  * @param importFromId The id of the existing BastionSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bastion_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/bastion_session oci_bastion_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionSessionConfig
  */
  public constructor(scope: Construct, id: string, config: BastionSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bastion_session',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bastionId = config.bastionId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._keyType = config.keyType;
    this._sessionTtlInSeconds = config.sessionTtlInSeconds;
    this._keyDetails.internalValue = config.keyDetails;
    this._targetResourceDetails.internalValue = config.targetResourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bastion_id - computed: false, optional: false, required: true
  private _bastionId?: string; 
  public get bastionId() {
    return this.getStringAttribute('bastion_id');
  }
  public set bastionId(value: string) {
    this._bastionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionIdInput() {
    return this._bastionId;
  }

  // bastion_name - computed: true, optional: false, required: false
  public get bastionName() {
    return this.getStringAttribute('bastion_name');
  }

  // bastion_public_host_key_info - computed: true, optional: false, required: false
  public get bastionPublicHostKeyInfo() {
    return this.getStringAttribute('bastion_public_host_key_info');
  }

  // bastion_user_name - computed: true, optional: false, required: false
  public get bastionUserName() {
    return this.getStringAttribute('bastion_user_name');
  }

  // display_name - computed: true, optional: true, required: false
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

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // session_ttl_in_seconds - computed: true, optional: true, required: false
  private _sessionTtlInSeconds?: number; 
  public get sessionTtlInSeconds() {
    return this.getNumberAttribute('session_ttl_in_seconds');
  }
  public set sessionTtlInSeconds(value: number) {
    this._sessionTtlInSeconds = value;
  }
  public resetSessionTtlInSeconds() {
    this._sessionTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInSecondsInput() {
    return this._sessionTtlInSeconds;
  }

  // ssh_metadata - computed: true, optional: false, required: false
  private _sshMetadata = new cdktf.StringMap(this, "ssh_metadata");
  public get sshMetadata() {
    return this._sshMetadata;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // key_details - computed: false, optional: false, required: true
  private _keyDetails = new BastionSessionKeyDetailsOutputReference(this, "key_details");
  public get keyDetails() {
    return this._keyDetails;
  }
  public putKeyDetails(value: BastionSessionKeyDetails) {
    this._keyDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDetailsInput() {
    return this._keyDetails.internalValue;
  }

  // target_resource_details - computed: false, optional: false, required: true
  private _targetResourceDetails = new BastionSessionTargetResourceDetailsOutputReference(this, "target_resource_details");
  public get targetResourceDetails() {
    return this._targetResourceDetails;
  }
  public putTargetResourceDetails(value: BastionSessionTargetResourceDetails) {
    this._targetResourceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceDetailsInput() {
    return this._targetResourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BastionSessionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BastionSessionTimeouts) {
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
      bastion_id: cdktf.stringToTerraform(this._bastionId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      key_type: cdktf.stringToTerraform(this._keyType),
      session_ttl_in_seconds: cdktf.numberToTerraform(this._sessionTtlInSeconds),
      key_details: bastionSessionKeyDetailsToTerraform(this._keyDetails.internalValue),
      target_resource_details: bastionSessionTargetResourceDetailsToTerraform(this._targetResourceDetails.internalValue),
      timeouts: bastionSessionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bastion_id: {
        value: cdktf.stringToHclTerraform(this._bastionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_ttl_in_seconds: {
        value: cdktf.numberToHclTerraform(this._sessionTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_details: {
        value: bastionSessionKeyDetailsToHclTerraform(this._keyDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BastionSessionKeyDetailsList",
      },
      target_resource_details: {
        value: bastionSessionTargetResourceDetailsToHclTerraform(this._targetResourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BastionSessionTargetResourceDetailsList",
      },
      timeouts: {
        value: bastionSessionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BastionSessionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
