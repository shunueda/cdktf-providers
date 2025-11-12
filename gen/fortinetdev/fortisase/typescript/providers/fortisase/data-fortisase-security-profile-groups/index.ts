// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityProfileGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#antivirus_profile DataFortisaseSecurityProfileGroups#antivirus_profile}
  */
  readonly antivirusProfile?: DataFortisaseSecurityProfileGroupsAntivirusProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#application_control_profile DataFortisaseSecurityProfileGroups#application_control_profile}
  */
  readonly applicationControlProfile?: DataFortisaseSecurityProfileGroupsApplicationControlProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#dlp_filter_profile DataFortisaseSecurityProfileGroups#dlp_filter_profile}
  */
  readonly dlpFilterProfile?: DataFortisaseSecurityProfileGroupsDlpFilterProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#dns_filter_profile DataFortisaseSecurityProfileGroups#dns_filter_profile}
  */
  readonly dnsFilterProfile?: DataFortisaseSecurityProfileGroupsDnsFilterProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#file_filter_profile DataFortisaseSecurityProfileGroups#file_filter_profile}
  */
  readonly fileFilterProfile?: DataFortisaseSecurityProfileGroupsFileFilterProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#intrusion_prevention_profile DataFortisaseSecurityProfileGroups#intrusion_prevention_profile}
  */
  readonly intrusionPreventionProfile?: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#ssl_ssh_profile DataFortisaseSecurityProfileGroups#ssl_ssh_profile}
  */
  readonly sslSshProfile?: DataFortisaseSecurityProfileGroupsSslSshProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#video_filter_profile DataFortisaseSecurityProfileGroups#video_filter_profile}
  */
  readonly videoFilterProfile?: DataFortisaseSecurityProfileGroupsVideoFilterProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#web_filter_profile DataFortisaseSecurityProfileGroups#web_filter_profile}
  */
  readonly webFilterProfile?: DataFortisaseSecurityProfileGroupsWebFilterProfile;
}
export interface DataFortisaseSecurityProfileGroupsAntivirusProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsAntivirusProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsAntivirusProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsAntivirusProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsAntivirusProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsAntivirusProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsAntivirusProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsAntivirusProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsAntivirusProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsAntivirusProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsAntivirusProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsAntivirusProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsAntivirusProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsAntivirusProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsAntivirusProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsAntivirusProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsAntivirusProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsAntivirusProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsAntivirusProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsAntivirusProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsAntivirusProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsAntivirusProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsApplicationControlProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsApplicationControlProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsApplicationControlProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsApplicationControlProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsApplicationControlProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsApplicationControlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsApplicationControlProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsApplicationControlProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsApplicationControlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsApplicationControlProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsApplicationControlProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsApplicationControlProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsApplicationControlProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsApplicationControlProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsApplicationControlProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsDlpFilterProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsDlpFilterProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsDlpFilterProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsDlpFilterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsDlpFilterProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsDlpFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsDlpFilterProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsDlpFilterProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsDlpFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsDlpFilterProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsDlpFilterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsDlpFilterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsDlpFilterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsDlpFilterProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsDlpFilterProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsDnsFilterProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsDnsFilterProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsDnsFilterProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsDnsFilterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsDnsFilterProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsDnsFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsDnsFilterProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsDnsFilterProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsDnsFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsDnsFilterProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsDnsFilterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsDnsFilterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsDnsFilterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsDnsFilterProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsDnsFilterProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsFileFilterProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsFileFilterProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsFileFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsFileFilterProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsFileFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsFileFilterProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsFileFilterProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsFileFilterProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsFileFilterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsFileFilterProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsFileFilterProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsFileFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsFileFilterProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsFileFilterProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsFileFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsFileFilterProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsFileFilterProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsFileFilterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsFileFilterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsFileFilterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsFileFilterProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsFileFilterProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsSslSshProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsSslSshProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsSslSshProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsSslSshProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsSslSshProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsSslSshProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsSslSshProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsSslSshProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsSslSshProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsSslSshProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsSslSshProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsSslSshProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsSslSshProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsSslSshProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsSslSshProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsSslSshProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsSslSshProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsSslSshProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsSslSshProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsSslSshProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsSslSshProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsSslSshProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsVideoFilterProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsVideoFilterProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsVideoFilterProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsVideoFilterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsVideoFilterProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsVideoFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsVideoFilterProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsVideoFilterProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsVideoFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsVideoFilterProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsVideoFilterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsVideoFilterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsVideoFilterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsVideoFilterProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsVideoFilterProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataFortisaseSecurityProfileGroupsWebFilterProfileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#datasource DataFortisaseSecurityProfileGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#primary_key DataFortisaseSecurityProfileGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityProfileGroupsWebFilterProfileProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsWebFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityProfileGroupsWebFilterProfileProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsWebFilterProfileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsWebFilterProfileProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsWebFilterProfileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsWebFilterProfileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityProfileGroupsWebFilterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#profile DataFortisaseSecurityProfileGroups#profile}
  */
  readonly profile?: DataFortisaseSecurityProfileGroupsWebFilterProfileProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#status DataFortisaseSecurityProfileGroups#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityProfileGroupsWebFilterProfileToTerraform(struct?: DataFortisaseSecurityProfileGroupsWebFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: dataFortisaseSecurityProfileGroupsWebFilterProfileProfileToTerraform(struct!.profile),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityProfileGroupsWebFilterProfileToHclTerraform(struct?: DataFortisaseSecurityProfileGroupsWebFilterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: dataFortisaseSecurityProfileGroupsWebFilterProfileProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityProfileGroupsWebFilterProfileProfile",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityProfileGroupsWebFilterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityProfileGroupsWebFilterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityProfileGroupsWebFilterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._status = value.status;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile = new DataFortisaseSecurityProfileGroupsWebFilterProfileProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: DataFortisaseSecurityProfileGroupsWebFilterProfileProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups fortisase_security_profile_groups}
*/
export class DataFortisaseSecurityProfileGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_profile_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityProfileGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityProfileGroups to import
  * @param importFromId The id of the existing DataFortisaseSecurityProfileGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityProfileGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_profile_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_profile_groups fortisase_security_profile_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityProfileGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityProfileGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_profile_groups',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antivirusProfile.internalValue = config.antivirusProfile;
    this._applicationControlProfile.internalValue = config.applicationControlProfile;
    this._dlpFilterProfile.internalValue = config.dlpFilterProfile;
    this._dnsFilterProfile.internalValue = config.dnsFilterProfile;
    this._fileFilterProfile.internalValue = config.fileFilterProfile;
    this._intrusionPreventionProfile.internalValue = config.intrusionPreventionProfile;
    this._primaryKey = config.primaryKey;
    this._sslSshProfile.internalValue = config.sslSshProfile;
    this._videoFilterProfile.internalValue = config.videoFilterProfile;
    this._webFilterProfile.internalValue = config.webFilterProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // antivirus_profile - computed: true, optional: true, required: false
  private _antivirusProfile = new DataFortisaseSecurityProfileGroupsAntivirusProfileOutputReference(this, "antivirus_profile");
  public get antivirusProfile() {
    return this._antivirusProfile;
  }
  public putAntivirusProfile(value: DataFortisaseSecurityProfileGroupsAntivirusProfile) {
    this._antivirusProfile.internalValue = value;
  }
  public resetAntivirusProfile() {
    this._antivirusProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusProfileInput() {
    return this._antivirusProfile.internalValue;
  }

  // application_control_profile - computed: true, optional: true, required: false
  private _applicationControlProfile = new DataFortisaseSecurityProfileGroupsApplicationControlProfileOutputReference(this, "application_control_profile");
  public get applicationControlProfile() {
    return this._applicationControlProfile;
  }
  public putApplicationControlProfile(value: DataFortisaseSecurityProfileGroupsApplicationControlProfile) {
    this._applicationControlProfile.internalValue = value;
  }
  public resetApplicationControlProfile() {
    this._applicationControlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationControlProfileInput() {
    return this._applicationControlProfile.internalValue;
  }

  // dlp_filter_profile - computed: true, optional: true, required: false
  private _dlpFilterProfile = new DataFortisaseSecurityProfileGroupsDlpFilterProfileOutputReference(this, "dlp_filter_profile");
  public get dlpFilterProfile() {
    return this._dlpFilterProfile;
  }
  public putDlpFilterProfile(value: DataFortisaseSecurityProfileGroupsDlpFilterProfile) {
    this._dlpFilterProfile.internalValue = value;
  }
  public resetDlpFilterProfile() {
    this._dlpFilterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpFilterProfileInput() {
    return this._dlpFilterProfile.internalValue;
  }

  // dns_filter_profile - computed: true, optional: true, required: false
  private _dnsFilterProfile = new DataFortisaseSecurityProfileGroupsDnsFilterProfileOutputReference(this, "dns_filter_profile");
  public get dnsFilterProfile() {
    return this._dnsFilterProfile;
  }
  public putDnsFilterProfile(value: DataFortisaseSecurityProfileGroupsDnsFilterProfile) {
    this._dnsFilterProfile.internalValue = value;
  }
  public resetDnsFilterProfile() {
    this._dnsFilterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterProfileInput() {
    return this._dnsFilterProfile.internalValue;
  }

  // file_filter_profile - computed: true, optional: true, required: false
  private _fileFilterProfile = new DataFortisaseSecurityProfileGroupsFileFilterProfileOutputReference(this, "file_filter_profile");
  public get fileFilterProfile() {
    return this._fileFilterProfile;
  }
  public putFileFilterProfile(value: DataFortisaseSecurityProfileGroupsFileFilterProfile) {
    this._fileFilterProfile.internalValue = value;
  }
  public resetFileFilterProfile() {
    this._fileFilterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterProfileInput() {
    return this._fileFilterProfile.internalValue;
  }

  // intrusion_prevention_profile - computed: true, optional: true, required: false
  private _intrusionPreventionProfile = new DataFortisaseSecurityProfileGroupsIntrusionPreventionProfileOutputReference(this, "intrusion_prevention_profile");
  public get intrusionPreventionProfile() {
    return this._intrusionPreventionProfile;
  }
  public putIntrusionPreventionProfile(value: DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile) {
    this._intrusionPreventionProfile.internalValue = value;
  }
  public resetIntrusionPreventionProfile() {
    this._intrusionPreventionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionPreventionProfileInput() {
    return this._intrusionPreventionProfile.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // ssl_ssh_profile - computed: true, optional: true, required: false
  private _sslSshProfile = new DataFortisaseSecurityProfileGroupsSslSshProfileOutputReference(this, "ssl_ssh_profile");
  public get sslSshProfile() {
    return this._sslSshProfile;
  }
  public putSslSshProfile(value: DataFortisaseSecurityProfileGroupsSslSshProfile) {
    this._sslSshProfile.internalValue = value;
  }
  public resetSslSshProfile() {
    this._sslSshProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile.internalValue;
  }

  // video_filter_profile - computed: true, optional: true, required: false
  private _videoFilterProfile = new DataFortisaseSecurityProfileGroupsVideoFilterProfileOutputReference(this, "video_filter_profile");
  public get videoFilterProfile() {
    return this._videoFilterProfile;
  }
  public putVideoFilterProfile(value: DataFortisaseSecurityProfileGroupsVideoFilterProfile) {
    this._videoFilterProfile.internalValue = value;
  }
  public resetVideoFilterProfile() {
    this._videoFilterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoFilterProfileInput() {
    return this._videoFilterProfile.internalValue;
  }

  // web_filter_profile - computed: true, optional: true, required: false
  private _webFilterProfile = new DataFortisaseSecurityProfileGroupsWebFilterProfileOutputReference(this, "web_filter_profile");
  public get webFilterProfile() {
    return this._webFilterProfile;
  }
  public putWebFilterProfile(value: DataFortisaseSecurityProfileGroupsWebFilterProfile) {
    this._webFilterProfile.internalValue = value;
  }
  public resetWebFilterProfile() {
    this._webFilterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterProfileInput() {
    return this._webFilterProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      antivirus_profile: dataFortisaseSecurityProfileGroupsAntivirusProfileToTerraform(this._antivirusProfile.internalValue),
      application_control_profile: dataFortisaseSecurityProfileGroupsApplicationControlProfileToTerraform(this._applicationControlProfile.internalValue),
      dlp_filter_profile: dataFortisaseSecurityProfileGroupsDlpFilterProfileToTerraform(this._dlpFilterProfile.internalValue),
      dns_filter_profile: dataFortisaseSecurityProfileGroupsDnsFilterProfileToTerraform(this._dnsFilterProfile.internalValue),
      file_filter_profile: dataFortisaseSecurityProfileGroupsFileFilterProfileToTerraform(this._fileFilterProfile.internalValue),
      intrusion_prevention_profile: dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileToTerraform(this._intrusionPreventionProfile.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      ssl_ssh_profile: dataFortisaseSecurityProfileGroupsSslSshProfileToTerraform(this._sslSshProfile.internalValue),
      video_filter_profile: dataFortisaseSecurityProfileGroupsVideoFilterProfileToTerraform(this._videoFilterProfile.internalValue),
      web_filter_profile: dataFortisaseSecurityProfileGroupsWebFilterProfileToTerraform(this._webFilterProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      antivirus_profile: {
        value: dataFortisaseSecurityProfileGroupsAntivirusProfileToHclTerraform(this._antivirusProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsAntivirusProfile",
      },
      application_control_profile: {
        value: dataFortisaseSecurityProfileGroupsApplicationControlProfileToHclTerraform(this._applicationControlProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsApplicationControlProfile",
      },
      dlp_filter_profile: {
        value: dataFortisaseSecurityProfileGroupsDlpFilterProfileToHclTerraform(this._dlpFilterProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsDlpFilterProfile",
      },
      dns_filter_profile: {
        value: dataFortisaseSecurityProfileGroupsDnsFilterProfileToHclTerraform(this._dnsFilterProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsDnsFilterProfile",
      },
      file_filter_profile: {
        value: dataFortisaseSecurityProfileGroupsFileFilterProfileToHclTerraform(this._fileFilterProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsFileFilterProfile",
      },
      intrusion_prevention_profile: {
        value: dataFortisaseSecurityProfileGroupsIntrusionPreventionProfileToHclTerraform(this._intrusionPreventionProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsIntrusionPreventionProfile",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ssh_profile: {
        value: dataFortisaseSecurityProfileGroupsSslSshProfileToHclTerraform(this._sslSshProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsSslSshProfile",
      },
      video_filter_profile: {
        value: dataFortisaseSecurityProfileGroupsVideoFilterProfileToHclTerraform(this._videoFilterProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsVideoFilterProfile",
      },
      web_filter_profile: {
        value: dataFortisaseSecurityProfileGroupsWebFilterProfileToHclTerraform(this._webFilterProfile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityProfileGroupsWebFilterProfile",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
