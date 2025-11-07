// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsTurboObsTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#delete_data_in_file_system SfsTurboObsTarget#delete_data_in_file_system}
  */
  readonly deleteDataInFileSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#file_system_path SfsTurboObsTarget#file_system_path}
  */
  readonly fileSystemPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#id SfsTurboObsTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#region SfsTurboObsTarget#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#share_id SfsTurboObsTarget#share_id}
  */
  readonly shareId: string;
  /**
  * obs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#obs SfsTurboObsTarget#obs}
  */
  readonly obs: SfsTurboObsTargetObs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#timeouts SfsTurboObsTarget#timeouts}
  */
  readonly timeouts?: SfsTurboObsTargetTimeouts;
}
export interface SfsTurboObsTargetObsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#dir_mode SfsTurboObsTarget#dir_mode}
  */
  readonly dirMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#file_mode SfsTurboObsTarget#file_mode}
  */
  readonly fileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#gid SfsTurboObsTarget#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#uid SfsTurboObsTarget#uid}
  */
  readonly uid?: number;
}

export function sfsTurboObsTargetObsAttributesToTerraform(struct?: SfsTurboObsTargetObsAttributesOutputReference | SfsTurboObsTargetObsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir_mode: cdktf.stringToTerraform(struct!.dirMode),
    file_mode: cdktf.stringToTerraform(struct!.fileMode),
    gid: cdktf.numberToTerraform(struct!.gid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function sfsTurboObsTargetObsAttributesToHclTerraform(struct?: SfsTurboObsTargetObsAttributesOutputReference | SfsTurboObsTargetObsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir_mode: {
      value: cdktf.stringToHclTerraform(struct!.dirMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfsTurboObsTargetObsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfsTurboObsTargetObsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dirMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirMode = this._dirMode;
    }
    if (this._fileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMode = this._fileMode;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfsTurboObsTargetObsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dirMode = undefined;
      this._fileMode = undefined;
      this._gid = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dirMode = value.dirMode;
      this._fileMode = value.fileMode;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // dir_mode - computed: true, optional: true, required: false
  private _dirMode?: string; 
  public get dirMode() {
    return this.getStringAttribute('dir_mode');
  }
  public set dirMode(value: string) {
    this._dirMode = value;
  }
  public resetDirMode() {
    this._dirMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirModeInput() {
    return this._dirMode;
  }

  // file_mode - computed: true, optional: true, required: false
  private _fileMode?: string; 
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }
  public set fileMode(value: string) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface SfsTurboObsTargetObsPolicyAutoExportPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#events SfsTurboObsTarget#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#prefix SfsTurboObsTarget#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#suffix SfsTurboObsTarget#suffix}
  */
  readonly suffix?: string;
}

export function sfsTurboObsTargetObsPolicyAutoExportPolicyToTerraform(struct?: SfsTurboObsTargetObsPolicyAutoExportPolicyOutputReference | SfsTurboObsTargetObsPolicyAutoExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function sfsTurboObsTargetObsPolicyAutoExportPolicyToHclTerraform(struct?: SfsTurboObsTargetObsPolicyAutoExportPolicyOutputReference | SfsTurboObsTargetObsPolicyAutoExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfsTurboObsTargetObsPolicyAutoExportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfsTurboObsTargetObsPolicyAutoExportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfsTurboObsTargetObsPolicyAutoExportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface SfsTurboObsTargetObsPolicy {
  /**
  * auto_export_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#auto_export_policy SfsTurboObsTarget#auto_export_policy}
  */
  readonly autoExportPolicy?: SfsTurboObsTargetObsPolicyAutoExportPolicy;
}

export function sfsTurboObsTargetObsPolicyToTerraform(struct?: SfsTurboObsTargetObsPolicyOutputReference | SfsTurboObsTargetObsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_export_policy: sfsTurboObsTargetObsPolicyAutoExportPolicyToTerraform(struct!.autoExportPolicy),
  }
}


export function sfsTurboObsTargetObsPolicyToHclTerraform(struct?: SfsTurboObsTargetObsPolicyOutputReference | SfsTurboObsTargetObsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_export_policy: {
      value: sfsTurboObsTargetObsPolicyAutoExportPolicyToHclTerraform(struct!.autoExportPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "SfsTurboObsTargetObsPolicyAutoExportPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfsTurboObsTargetObsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfsTurboObsTargetObsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExportPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportPolicy = this._autoExportPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfsTurboObsTargetObsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoExportPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoExportPolicy.internalValue = value.autoExportPolicy;
    }
  }

  // auto_export_policy - computed: false, optional: true, required: false
  private _autoExportPolicy = new SfsTurboObsTargetObsPolicyAutoExportPolicyOutputReference(this, "auto_export_policy");
  public get autoExportPolicy() {
    return this._autoExportPolicy;
  }
  public putAutoExportPolicy(value: SfsTurboObsTargetObsPolicyAutoExportPolicy) {
    this._autoExportPolicy.internalValue = value;
  }
  public resetAutoExportPolicy() {
    this._autoExportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportPolicyInput() {
    return this._autoExportPolicy.internalValue;
  }
}
export interface SfsTurboObsTargetObs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#bucket SfsTurboObsTarget#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#endpoint SfsTurboObsTarget#endpoint}
  */
  readonly endpoint: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#attributes SfsTurboObsTarget#attributes}
  */
  readonly attributes?: SfsTurboObsTargetObsAttributes;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#policy SfsTurboObsTarget#policy}
  */
  readonly policy?: SfsTurboObsTargetObsPolicy;
}

export function sfsTurboObsTargetObsToTerraform(struct?: SfsTurboObsTargetObsOutputReference | SfsTurboObsTargetObs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    attributes: sfsTurboObsTargetObsAttributesToTerraform(struct!.attributes),
    policy: sfsTurboObsTargetObsPolicyToTerraform(struct!.policy),
  }
}


export function sfsTurboObsTargetObsToHclTerraform(struct?: SfsTurboObsTargetObsOutputReference | SfsTurboObsTargetObs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: sfsTurboObsTargetObsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "SfsTurboObsTargetObsAttributesList",
    },
    policy: {
      value: sfsTurboObsTargetObsPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "SfsTurboObsTargetObsPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfsTurboObsTargetObsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfsTurboObsTargetObs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfsTurboObsTargetObs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._attributes.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._attributes.internalValue = value.attributes;
      this._policy.internalValue = value.policy;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new SfsTurboObsTargetObsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: SfsTurboObsTargetObsAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new SfsTurboObsTargetObsPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SfsTurboObsTargetObsPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface SfsTurboObsTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#create SfsTurboObsTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#delete SfsTurboObsTarget#delete}
  */
  readonly delete?: string;
}

export function sfsTurboObsTargetTimeoutsToTerraform(struct?: SfsTurboObsTargetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function sfsTurboObsTargetTimeoutsToHclTerraform(struct?: SfsTurboObsTargetTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfsTurboObsTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SfsTurboObsTargetTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfsTurboObsTargetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target sbercloud_sfs_turbo_obs_target}
*/
export class SfsTurboObsTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_sfs_turbo_obs_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SfsTurboObsTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SfsTurboObsTarget to import
  * @param importFromId The id of the existing SfsTurboObsTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SfsTurboObsTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_sfs_turbo_obs_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/sfs_turbo_obs_target sbercloud_sfs_turbo_obs_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsTurboObsTargetConfig
  */
  public constructor(scope: Construct, id: string, config: SfsTurboObsTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_sfs_turbo_obs_target',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteDataInFileSystem = config.deleteDataInFileSystem;
    this._fileSystemPath = config.fileSystemPath;
    this._id = config.id;
    this._region = config.region;
    this._shareId = config.shareId;
    this._obs.internalValue = config.obs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_data_in_file_system - computed: false, optional: true, required: false
  private _deleteDataInFileSystem?: boolean | cdktf.IResolvable; 
  public get deleteDataInFileSystem() {
    return this.getBooleanAttribute('delete_data_in_file_system');
  }
  public set deleteDataInFileSystem(value: boolean | cdktf.IResolvable) {
    this._deleteDataInFileSystem = value;
  }
  public resetDeleteDataInFileSystem() {
    this._deleteDataInFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDataInFileSystemInput() {
    return this._deleteDataInFileSystem;
  }

  // file_system_path - computed: false, optional: false, required: true
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // obs - computed: false, optional: false, required: true
  private _obs = new SfsTurboObsTargetObsOutputReference(this, "obs");
  public get obs() {
    return this._obs;
  }
  public putObs(value: SfsTurboObsTargetObs) {
    this._obs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get obsInput() {
    return this._obs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SfsTurboObsTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SfsTurboObsTargetTimeouts) {
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
      delete_data_in_file_system: cdktf.booleanToTerraform(this._deleteDataInFileSystem),
      file_system_path: cdktf.stringToTerraform(this._fileSystemPath),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      share_id: cdktf.stringToTerraform(this._shareId),
      obs: sfsTurboObsTargetObsToTerraform(this._obs.internalValue),
      timeouts: sfsTurboObsTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_data_in_file_system: {
        value: cdktf.booleanToHclTerraform(this._deleteDataInFileSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_path: {
        value: cdktf.stringToHclTerraform(this._fileSystemPath),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_id: {
        value: cdktf.stringToHclTerraform(this._shareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obs: {
        value: sfsTurboObsTargetObsToHclTerraform(this._obs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SfsTurboObsTargetObsList",
      },
      timeouts: {
        value: sfsTurboObsTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SfsTurboObsTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
