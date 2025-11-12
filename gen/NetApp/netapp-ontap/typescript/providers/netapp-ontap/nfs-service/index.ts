// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#cx_profile_name NfsService#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * NFS should be enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#enabled NfsService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#protocol NfsService#protocol}
  */
  readonly protocol: NfsServiceProtocol;
  /**
  * Specific Root user options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#root NfsService#root}
  */
  readonly root?: NfsServiceRoot;
  /**
  * NFS Security options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#security NfsService#security}
  */
  readonly security?: NfsServiceSecurity;
  /**
  * Whether SVM allows showmount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#showmount_enabled NfsService#showmount_enabled}
  */
  readonly showmountEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#svm_name NfsService#svm_name}
  */
  readonly svmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#transport NfsService#transport}
  */
  readonly transport?: NfsServiceTransport;
  /**
  * Whether Vstorage is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#vstorage_enabled NfsService#vstorage_enabled}
  */
  readonly vstorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#windows NfsService#windows}
  */
  readonly windows?: NfsServiceWindows;
}
export interface NfsServiceProtocolV40Features {
  /**
  * Enable ACL for NFSv4.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#acl_enabled NfsService#acl_enabled}
  */
  readonly aclEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Read File Delegation for NFSv4.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#read_delegation_enabled NfsService#read_delegation_enabled}
  */
  readonly readDelegationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Write File Delegation for NFSv4.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#write_delegation_enabled NfsService#write_delegation_enabled}
  */
  readonly writeDelegationEnabled?: boolean | cdktf.IResolvable;
}

export function nfsServiceProtocolV40FeaturesToTerraform(struct?: NfsServiceProtocolV40Features | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_enabled: cdktf.booleanToTerraform(struct!.aclEnabled),
    read_delegation_enabled: cdktf.booleanToTerraform(struct!.readDelegationEnabled),
    write_delegation_enabled: cdktf.booleanToTerraform(struct!.writeDelegationEnabled),
  }
}


export function nfsServiceProtocolV40FeaturesToHclTerraform(struct?: NfsServiceProtocolV40Features | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aclEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_delegation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.readDelegationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_delegation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.writeDelegationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceProtocolV40FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceProtocolV40Features | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclEnabled = this._aclEnabled;
    }
    if (this._readDelegationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.readDelegationEnabled = this._readDelegationEnabled;
    }
    if (this._writeDelegationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDelegationEnabled = this._writeDelegationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceProtocolV40Features | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclEnabled = undefined;
      this._readDelegationEnabled = undefined;
      this._writeDelegationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclEnabled = value.aclEnabled;
      this._readDelegationEnabled = value.readDelegationEnabled;
      this._writeDelegationEnabled = value.writeDelegationEnabled;
    }
  }

  // acl_enabled - computed: true, optional: true, required: false
  private _aclEnabled?: boolean | cdktf.IResolvable; 
  public get aclEnabled() {
    return this.getBooleanAttribute('acl_enabled');
  }
  public set aclEnabled(value: boolean | cdktf.IResolvable) {
    this._aclEnabled = value;
  }
  public resetAclEnabled() {
    this._aclEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEnabledInput() {
    return this._aclEnabled;
  }

  // read_delegation_enabled - computed: true, optional: true, required: false
  private _readDelegationEnabled?: boolean | cdktf.IResolvable; 
  public get readDelegationEnabled() {
    return this.getBooleanAttribute('read_delegation_enabled');
  }
  public set readDelegationEnabled(value: boolean | cdktf.IResolvable) {
    this._readDelegationEnabled = value;
  }
  public resetReadDelegationEnabled() {
    this._readDelegationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readDelegationEnabledInput() {
    return this._readDelegationEnabled;
  }

  // write_delegation_enabled - computed: true, optional: true, required: false
  private _writeDelegationEnabled?: boolean | cdktf.IResolvable; 
  public get writeDelegationEnabled() {
    return this.getBooleanAttribute('write_delegation_enabled');
  }
  public set writeDelegationEnabled(value: boolean | cdktf.IResolvable) {
    this._writeDelegationEnabled = value;
  }
  public resetWriteDelegationEnabled() {
    this._writeDelegationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDelegationEnabledInput() {
    return this._writeDelegationEnabled;
  }
}
export interface NfsServiceProtocolV41Features {
  /**
  * Enable ACL for NFSv4.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#acl_enabled NfsService#acl_enabled}
  */
  readonly aclEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enabled pNFS (parallel NFS) for NFSv4.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#pnfs_enabled NfsService#pnfs_enabled}
  */
  readonly pnfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Read File Delegation for NFSv4.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#read_delegation_enabled NfsService#read_delegation_enabled}
  */
  readonly readDelegationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Write File Delegation for NFSv4.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#write_delegation_enabled NfsService#write_delegation_enabled}
  */
  readonly writeDelegationEnabled?: boolean | cdktf.IResolvable;
}

export function nfsServiceProtocolV41FeaturesToTerraform(struct?: NfsServiceProtocolV41Features | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_enabled: cdktf.booleanToTerraform(struct!.aclEnabled),
    pnfs_enabled: cdktf.booleanToTerraform(struct!.pnfsEnabled),
    read_delegation_enabled: cdktf.booleanToTerraform(struct!.readDelegationEnabled),
    write_delegation_enabled: cdktf.booleanToTerraform(struct!.writeDelegationEnabled),
  }
}


export function nfsServiceProtocolV41FeaturesToHclTerraform(struct?: NfsServiceProtocolV41Features | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aclEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pnfs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pnfsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_delegation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.readDelegationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_delegation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.writeDelegationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceProtocolV41FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceProtocolV41Features | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclEnabled = this._aclEnabled;
    }
    if (this._pnfsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnfsEnabled = this._pnfsEnabled;
    }
    if (this._readDelegationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.readDelegationEnabled = this._readDelegationEnabled;
    }
    if (this._writeDelegationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDelegationEnabled = this._writeDelegationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceProtocolV41Features | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclEnabled = undefined;
      this._pnfsEnabled = undefined;
      this._readDelegationEnabled = undefined;
      this._writeDelegationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclEnabled = value.aclEnabled;
      this._pnfsEnabled = value.pnfsEnabled;
      this._readDelegationEnabled = value.readDelegationEnabled;
      this._writeDelegationEnabled = value.writeDelegationEnabled;
    }
  }

  // acl_enabled - computed: true, optional: true, required: false
  private _aclEnabled?: boolean | cdktf.IResolvable; 
  public get aclEnabled() {
    return this.getBooleanAttribute('acl_enabled');
  }
  public set aclEnabled(value: boolean | cdktf.IResolvable) {
    this._aclEnabled = value;
  }
  public resetAclEnabled() {
    this._aclEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEnabledInput() {
    return this._aclEnabled;
  }

  // pnfs_enabled - computed: true, optional: true, required: false
  private _pnfsEnabled?: boolean | cdktf.IResolvable; 
  public get pnfsEnabled() {
    return this.getBooleanAttribute('pnfs_enabled');
  }
  public set pnfsEnabled(value: boolean | cdktf.IResolvable) {
    this._pnfsEnabled = value;
  }
  public resetPnfsEnabled() {
    this._pnfsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnfsEnabledInput() {
    return this._pnfsEnabled;
  }

  // read_delegation_enabled - computed: true, optional: true, required: false
  private _readDelegationEnabled?: boolean | cdktf.IResolvable; 
  public get readDelegationEnabled() {
    return this.getBooleanAttribute('read_delegation_enabled');
  }
  public set readDelegationEnabled(value: boolean | cdktf.IResolvable) {
    this._readDelegationEnabled = value;
  }
  public resetReadDelegationEnabled() {
    this._readDelegationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readDelegationEnabledInput() {
    return this._readDelegationEnabled;
  }

  // write_delegation_enabled - computed: true, optional: true, required: false
  private _writeDelegationEnabled?: boolean | cdktf.IResolvable; 
  public get writeDelegationEnabled() {
    return this.getBooleanAttribute('write_delegation_enabled');
  }
  public set writeDelegationEnabled(value: boolean | cdktf.IResolvable) {
    this._writeDelegationEnabled = value;
  }
  public resetWriteDelegationEnabled() {
    this._writeDelegationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDelegationEnabledInput() {
    return this._writeDelegationEnabled;
  }
}
export interface NfsServiceProtocol {
  /**
  * NFSv3 enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v3_enabled NfsService#v3_enabled}
  */
  readonly v3Enabled?: boolean | cdktf.IResolvable;
  /**
  * NFSv4.0 enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v40_enabled NfsService#v40_enabled}
  */
  readonly v40Enabled?: boolean | cdktf.IResolvable;
  /**
  * NFSv4.0 features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v40_features NfsService#v40_features}
  */
  readonly v40Features?: NfsServiceProtocolV40Features;
  /**
  * NFSv4.1 enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v41_enabled NfsService#v41_enabled}
  */
  readonly v41Enabled?: boolean | cdktf.IResolvable;
  /**
  * NFSv4.1 features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v41_features NfsService#v41_features}
  */
  readonly v41Features?: NfsServiceProtocolV41Features;
  /**
  * User ID domain for NFSv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v4_id_domain NfsService#v4_id_domain}
  */
  readonly v4IdDomain?: string;
}

export function nfsServiceProtocolToTerraform(struct?: NfsServiceProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    v3_enabled: cdktf.booleanToTerraform(struct!.v3Enabled),
    v40_enabled: cdktf.booleanToTerraform(struct!.v40Enabled),
    v40_features: nfsServiceProtocolV40FeaturesToTerraform(struct!.v40Features),
    v41_enabled: cdktf.booleanToTerraform(struct!.v41Enabled),
    v41_features: nfsServiceProtocolV41FeaturesToTerraform(struct!.v41Features),
    v4_id_domain: cdktf.stringToTerraform(struct!.v4IdDomain),
  }
}


export function nfsServiceProtocolToHclTerraform(struct?: NfsServiceProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    v3_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.v3Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v40_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.v40Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v40_features: {
      value: nfsServiceProtocolV40FeaturesToHclTerraform(struct!.v40Features),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsServiceProtocolV40Features",
    },
    v41_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.v41Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v41_features: {
      value: nfsServiceProtocolV41FeaturesToHclTerraform(struct!.v41Features),
      isBlock: true,
      type: "struct",
      storageClassType: "NfsServiceProtocolV41Features",
    },
    v4_id_domain: {
      value: cdktf.stringToHclTerraform(struct!.v4IdDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._v3Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Enabled = this._v3Enabled;
    }
    if (this._v40Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.v40Enabled = this._v40Enabled;
    }
    if (this._v40Features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v40Features = this._v40Features?.internalValue;
    }
    if (this._v41Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.v41Enabled = this._v41Enabled;
    }
    if (this._v41Features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v41Features = this._v41Features?.internalValue;
    }
    if (this._v4IdDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4IdDomain = this._v4IdDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._v3Enabled = undefined;
      this._v40Enabled = undefined;
      this._v40Features.internalValue = undefined;
      this._v41Enabled = undefined;
      this._v41Features.internalValue = undefined;
      this._v4IdDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._v3Enabled = value.v3Enabled;
      this._v40Enabled = value.v40Enabled;
      this._v40Features.internalValue = value.v40Features;
      this._v41Enabled = value.v41Enabled;
      this._v41Features.internalValue = value.v41Features;
      this._v4IdDomain = value.v4IdDomain;
    }
  }

  // v3_enabled - computed: true, optional: true, required: false
  private _v3Enabled?: boolean | cdktf.IResolvable; 
  public get v3Enabled() {
    return this.getBooleanAttribute('v3_enabled');
  }
  public set v3Enabled(value: boolean | cdktf.IResolvable) {
    this._v3Enabled = value;
  }
  public resetV3Enabled() {
    this._v3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3EnabledInput() {
    return this._v3Enabled;
  }

  // v40_enabled - computed: true, optional: true, required: false
  private _v40Enabled?: boolean | cdktf.IResolvable; 
  public get v40Enabled() {
    return this.getBooleanAttribute('v40_enabled');
  }
  public set v40Enabled(value: boolean | cdktf.IResolvable) {
    this._v40Enabled = value;
  }
  public resetV40Enabled() {
    this._v40Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v40EnabledInput() {
    return this._v40Enabled;
  }

  // v40_features - computed: true, optional: true, required: false
  private _v40Features = new NfsServiceProtocolV40FeaturesOutputReference(this, "v40_features");
  public get v40Features() {
    return this._v40Features;
  }
  public putV40Features(value: NfsServiceProtocolV40Features) {
    this._v40Features.internalValue = value;
  }
  public resetV40Features() {
    this._v40Features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v40FeaturesInput() {
    return this._v40Features.internalValue;
  }

  // v41_enabled - computed: true, optional: true, required: false
  private _v41Enabled?: boolean | cdktf.IResolvable; 
  public get v41Enabled() {
    return this.getBooleanAttribute('v41_enabled');
  }
  public set v41Enabled(value: boolean | cdktf.IResolvable) {
    this._v41Enabled = value;
  }
  public resetV41Enabled() {
    this._v41Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v41EnabledInput() {
    return this._v41Enabled;
  }

  // v41_features - computed: true, optional: true, required: false
  private _v41Features = new NfsServiceProtocolV41FeaturesOutputReference(this, "v41_features");
  public get v41Features() {
    return this._v41Features;
  }
  public putV41Features(value: NfsServiceProtocolV41Features) {
    this._v41Features.internalValue = value;
  }
  public resetV41Features() {
    this._v41Features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v41FeaturesInput() {
    return this._v41Features.internalValue;
  }

  // v4_id_domain - computed: true, optional: true, required: false
  private _v4IdDomain?: string; 
  public get v4IdDomain() {
    return this.getStringAttribute('v4_id_domain');
  }
  public set v4IdDomain(value: string) {
    this._v4IdDomain = value;
  }
  public resetV4IdDomain() {
    this._v4IdDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4IdDomainInput() {
    return this._v4IdDomain;
  }
}
export interface NfsServiceRoot {
  /**
  * Ignore NTFS ACL for root user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#ignore_nt_acl NfsService#ignore_nt_acl}
  */
  readonly ignoreNtAcl?: boolean | cdktf.IResolvable;
  /**
  * Skip write permissions check for root user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#skip_write_permission_check NfsService#skip_write_permission_check}
  */
  readonly skipWritePermissionCheck?: boolean | cdktf.IResolvable;
}

export function nfsServiceRootToTerraform(struct?: NfsServiceRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_nt_acl: cdktf.booleanToTerraform(struct!.ignoreNtAcl),
    skip_write_permission_check: cdktf.booleanToTerraform(struct!.skipWritePermissionCheck),
  }
}


export function nfsServiceRootToHclTerraform(struct?: NfsServiceRoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_nt_acl: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNtAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_write_permission_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipWritePermissionCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceRoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreNtAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNtAcl = this._ignoreNtAcl;
    }
    if (this._skipWritePermissionCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWritePermissionCheck = this._skipWritePermissionCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceRoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreNtAcl = undefined;
      this._skipWritePermissionCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreNtAcl = value.ignoreNtAcl;
      this._skipWritePermissionCheck = value.skipWritePermissionCheck;
    }
  }

  // ignore_nt_acl - computed: true, optional: true, required: false
  private _ignoreNtAcl?: boolean | cdktf.IResolvable; 
  public get ignoreNtAcl() {
    return this.getBooleanAttribute('ignore_nt_acl');
  }
  public set ignoreNtAcl(value: boolean | cdktf.IResolvable) {
    this._ignoreNtAcl = value;
  }
  public resetIgnoreNtAcl() {
    this._ignoreNtAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNtAclInput() {
    return this._ignoreNtAcl;
  }

  // skip_write_permission_check - computed: true, optional: true, required: false
  private _skipWritePermissionCheck?: boolean | cdktf.IResolvable; 
  public get skipWritePermissionCheck() {
    return this.getBooleanAttribute('skip_write_permission_check');
  }
  public set skipWritePermissionCheck(value: boolean | cdktf.IResolvable) {
    this._skipWritePermissionCheck = value;
  }
  public resetSkipWritePermissionCheck() {
    this._skipWritePermissionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWritePermissionCheckInput() {
    return this._skipWritePermissionCheck;
  }
}
export interface NfsServiceSecurity {
  /**
  * Specifies whether file ownership can be changed only by the superuser, or if a non-root user can also change file ownership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#chown_mode NfsService#chown_mode}
  */
  readonly chownMode?: string;
  /**
  * Controls the permissions that are displayed to NFSv3 and NFSv4 clients on a file or directory that has an NT ACL set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#nt_acl_display_permission NfsService#nt_acl_display_permission}
  */
  readonly ntAclDisplayPermission?: boolean | cdktf.IResolvable;
  /**
  * Specifies how NFSv3 security changes affect NTFS volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#ntfs_unix_security NfsService#ntfs_unix_security}
  */
  readonly ntfsUnixSecurity?: string;
  /**
  * Specifies, in seconds, the amount of time a RPCSEC_GSS context is permitted to remain unused before it is deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#rpcsec_context_idle NfsService#rpcsec_context_idle}
  */
  readonly rpcsecContextIdle?: number;
}

export function nfsServiceSecurityToTerraform(struct?: NfsServiceSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chown_mode: cdktf.stringToTerraform(struct!.chownMode),
    nt_acl_display_permission: cdktf.booleanToTerraform(struct!.ntAclDisplayPermission),
    ntfs_unix_security: cdktf.stringToTerraform(struct!.ntfsUnixSecurity),
    rpcsec_context_idle: cdktf.numberToTerraform(struct!.rpcsecContextIdle),
  }
}


export function nfsServiceSecurityToHclTerraform(struct?: NfsServiceSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chown_mode: {
      value: cdktf.stringToHclTerraform(struct!.chownMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nt_acl_display_permission: {
      value: cdktf.booleanToHclTerraform(struct!.ntAclDisplayPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntfs_unix_security: {
      value: cdktf.stringToHclTerraform(struct!.ntfsUnixSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpcsec_context_idle: {
      value: cdktf.numberToHclTerraform(struct!.rpcsecContextIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chownMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chownMode = this._chownMode;
    }
    if (this._ntAclDisplayPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntAclDisplayPermission = this._ntAclDisplayPermission;
    }
    if (this._ntfsUnixSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntfsUnixSecurity = this._ntfsUnixSecurity;
    }
    if (this._rpcsecContextIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcsecContextIdle = this._rpcsecContextIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chownMode = undefined;
      this._ntAclDisplayPermission = undefined;
      this._ntfsUnixSecurity = undefined;
      this._rpcsecContextIdle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chownMode = value.chownMode;
      this._ntAclDisplayPermission = value.ntAclDisplayPermission;
      this._ntfsUnixSecurity = value.ntfsUnixSecurity;
      this._rpcsecContextIdle = value.rpcsecContextIdle;
    }
  }

  // chown_mode - computed: true, optional: true, required: false
  private _chownMode?: string; 
  public get chownMode() {
    return this.getStringAttribute('chown_mode');
  }
  public set chownMode(value: string) {
    this._chownMode = value;
  }
  public resetChownMode() {
    this._chownMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chownModeInput() {
    return this._chownMode;
  }

  // nt_acl_display_permission - computed: true, optional: true, required: false
  private _ntAclDisplayPermission?: boolean | cdktf.IResolvable; 
  public get ntAclDisplayPermission() {
    return this.getBooleanAttribute('nt_acl_display_permission');
  }
  public set ntAclDisplayPermission(value: boolean | cdktf.IResolvable) {
    this._ntAclDisplayPermission = value;
  }
  public resetNtAclDisplayPermission() {
    this._ntAclDisplayPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntAclDisplayPermissionInput() {
    return this._ntAclDisplayPermission;
  }

  // ntfs_unix_security - computed: true, optional: true, required: false
  private _ntfsUnixSecurity?: string; 
  public get ntfsUnixSecurity() {
    return this.getStringAttribute('ntfs_unix_security');
  }
  public set ntfsUnixSecurity(value: string) {
    this._ntfsUnixSecurity = value;
  }
  public resetNtfsUnixSecurity() {
    this._ntfsUnixSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntfsUnixSecurityInput() {
    return this._ntfsUnixSecurity;
  }

  // rpcsec_context_idle - computed: true, optional: true, required: false
  private _rpcsecContextIdle?: number; 
  public get rpcsecContextIdle() {
    return this.getNumberAttribute('rpcsec_context_idle');
  }
  public set rpcsecContextIdle(value: number) {
    this._rpcsecContextIdle = value;
  }
  public resetRpcsecContextIdle() {
    this._rpcsecContextIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcsecContextIdleInput() {
    return this._rpcsecContextIdle;
  }
}
export interface NfsServiceTransport {
  /**
  * tcp enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#tcp_enabled NfsService#tcp_enabled}
  */
  readonly tcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Max tcp transfer size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#tcp_max_transfer_size NfsService#tcp_max_transfer_size}
  */
  readonly tcpMaxTransferSize?: number;
  /**
  * udp enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#udp_enabled NfsService#udp_enabled}
  */
  readonly udpEnabled?: boolean | cdktf.IResolvable;
}

export function nfsServiceTransportToTerraform(struct?: NfsServiceTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_enabled: cdktf.booleanToTerraform(struct!.tcpEnabled),
    tcp_max_transfer_size: cdktf.numberToTerraform(struct!.tcpMaxTransferSize),
    udp_enabled: cdktf.booleanToTerraform(struct!.udpEnabled),
  }
}


export function nfsServiceTransportToHclTerraform(struct?: NfsServiceTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_max_transfer_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpMaxTransferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.udpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEnabled = this._tcpEnabled;
    }
    if (this._tcpMaxTransferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMaxTransferSize = this._tcpMaxTransferSize;
    }
    if (this._udpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpEnabled = this._udpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpEnabled = undefined;
      this._tcpMaxTransferSize = undefined;
      this._udpEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpEnabled = value.tcpEnabled;
      this._tcpMaxTransferSize = value.tcpMaxTransferSize;
      this._udpEnabled = value.udpEnabled;
    }
  }

  // tcp_enabled - computed: true, optional: true, required: false
  private _tcpEnabled?: boolean | cdktf.IResolvable; 
  public get tcpEnabled() {
    return this.getBooleanAttribute('tcp_enabled');
  }
  public set tcpEnabled(value: boolean | cdktf.IResolvable) {
    this._tcpEnabled = value;
  }
  public resetTcpEnabled() {
    this._tcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEnabledInput() {
    return this._tcpEnabled;
  }

  // tcp_max_transfer_size - computed: true, optional: true, required: false
  private _tcpMaxTransferSize?: number; 
  public get tcpMaxTransferSize() {
    return this.getNumberAttribute('tcp_max_transfer_size');
  }
  public set tcpMaxTransferSize(value: number) {
    this._tcpMaxTransferSize = value;
  }
  public resetTcpMaxTransferSize() {
    this._tcpMaxTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMaxTransferSizeInput() {
    return this._tcpMaxTransferSize;
  }

  // udp_enabled - computed: true, optional: true, required: false
  private _udpEnabled?: boolean | cdktf.IResolvable; 
  public get udpEnabled() {
    return this.getBooleanAttribute('udp_enabled');
  }
  public set udpEnabled(value: boolean | cdktf.IResolvable) {
    this._udpEnabled = value;
  }
  public resetUdpEnabled() {
    this._udpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpEnabledInput() {
    return this._udpEnabled;
  }
}
export interface NfsServiceWindows {
  /**
  * default Windows user for the NFS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#default_user NfsService#default_user}
  */
  readonly defaultUser?: string;
  /**
  * whether or not the mapping of an unknown UID to the default Windows user is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#map_unknown_uid_to_default_user NfsService#map_unknown_uid_to_default_user}
  */
  readonly mapUnknownUidToDefaultUser?: boolean | cdktf.IResolvable;
  /**
  * if permission checks are to be skipped for NFS WRITE calls from root/owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#v3_ms_dos_client_enabled NfsService#v3_ms_dos_client_enabled}
  */
  readonly v3MsDosClientEnabled?: boolean | cdktf.IResolvable;
}

export function nfsServiceWindowsToTerraform(struct?: NfsServiceWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_user: cdktf.stringToTerraform(struct!.defaultUser),
    map_unknown_uid_to_default_user: cdktf.booleanToTerraform(struct!.mapUnknownUidToDefaultUser),
    v3_ms_dos_client_enabled: cdktf.booleanToTerraform(struct!.v3MsDosClientEnabled),
  }
}


export function nfsServiceWindowsToHclTerraform(struct?: NfsServiceWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_user: {
      value: cdktf.stringToHclTerraform(struct!.defaultUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_unknown_uid_to_default_user: {
      value: cdktf.booleanToHclTerraform(struct!.mapUnknownUidToDefaultUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v3_ms_dos_client_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.v3MsDosClientEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfsServiceWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NfsServiceWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUser = this._defaultUser;
    }
    if (this._mapUnknownUidToDefaultUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapUnknownUidToDefaultUser = this._mapUnknownUidToDefaultUser;
    }
    if (this._v3MsDosClientEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3MsDosClientEnabled = this._v3MsDosClientEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsServiceWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultUser = undefined;
      this._mapUnknownUidToDefaultUser = undefined;
      this._v3MsDosClientEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultUser = value.defaultUser;
      this._mapUnknownUidToDefaultUser = value.mapUnknownUidToDefaultUser;
      this._v3MsDosClientEnabled = value.v3MsDosClientEnabled;
    }
  }

  // default_user - computed: true, optional: true, required: false
  private _defaultUser?: string; 
  public get defaultUser() {
    return this.getStringAttribute('default_user');
  }
  public set defaultUser(value: string) {
    this._defaultUser = value;
  }
  public resetDefaultUser() {
    this._defaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserInput() {
    return this._defaultUser;
  }

  // map_unknown_uid_to_default_user - computed: true, optional: true, required: false
  private _mapUnknownUidToDefaultUser?: boolean | cdktf.IResolvable; 
  public get mapUnknownUidToDefaultUser() {
    return this.getBooleanAttribute('map_unknown_uid_to_default_user');
  }
  public set mapUnknownUidToDefaultUser(value: boolean | cdktf.IResolvable) {
    this._mapUnknownUidToDefaultUser = value;
  }
  public resetMapUnknownUidToDefaultUser() {
    this._mapUnknownUidToDefaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapUnknownUidToDefaultUserInput() {
    return this._mapUnknownUidToDefaultUser;
  }

  // v3_ms_dos_client_enabled - computed: true, optional: true, required: false
  private _v3MsDosClientEnabled?: boolean | cdktf.IResolvable; 
  public get v3MsDosClientEnabled() {
    return this.getBooleanAttribute('v3_ms_dos_client_enabled');
  }
  public set v3MsDosClientEnabled(value: boolean | cdktf.IResolvable) {
    this._v3MsDosClientEnabled = value;
  }
  public resetV3MsDosClientEnabled() {
    this._v3MsDosClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3MsDosClientEnabledInput() {
    return this._v3MsDosClientEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service netapp-ontap_nfs_service}
*/
export class NfsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_nfs_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfsService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfsService to import
  * @param importFromId The id of the existing NfsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_nfs_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/nfs_service netapp-ontap_nfs_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: NfsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_nfs_service',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._enabled = config.enabled;
    this._protocol.internalValue = config.protocol;
    this._root.internalValue = config.root;
    this._security.internalValue = config.security;
    this._showmountEnabled = config.showmountEnabled;
    this._svmName = config.svmName;
    this._transport.internalValue = config.transport;
    this._vstorageEnabled = config.vstorageEnabled;
    this._windows.internalValue = config.windows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol = new NfsServiceProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: NfsServiceProtocol) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // root - computed: true, optional: true, required: false
  private _root = new NfsServiceRootOutputReference(this, "root");
  public get root() {
    return this._root;
  }
  public putRoot(value: NfsServiceRoot) {
    this._root.internalValue = value;
  }
  public resetRoot() {
    this._root.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInput() {
    return this._root.internalValue;
  }

  // security - computed: true, optional: true, required: false
  private _security = new NfsServiceSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: NfsServiceSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // showmount_enabled - computed: true, optional: true, required: false
  private _showmountEnabled?: boolean | cdktf.IResolvable; 
  public get showmountEnabled() {
    return this.getBooleanAttribute('showmount_enabled');
  }
  public set showmountEnabled(value: boolean | cdktf.IResolvable) {
    this._showmountEnabled = value;
  }
  public resetShowmountEnabled() {
    this._showmountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showmountEnabledInput() {
    return this._showmountEnabled;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new NfsServiceTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: NfsServiceTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // vstorage_enabled - computed: true, optional: true, required: false
  private _vstorageEnabled?: boolean | cdktf.IResolvable; 
  public get vstorageEnabled() {
    return this.getBooleanAttribute('vstorage_enabled');
  }
  public set vstorageEnabled(value: boolean | cdktf.IResolvable) {
    this._vstorageEnabled = value;
  }
  public resetVstorageEnabled() {
    this._vstorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vstorageEnabledInput() {
    return this._vstorageEnabled;
  }

  // windows - computed: true, optional: true, required: false
  private _windows = new NfsServiceWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: NfsServiceWindows) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      protocol: nfsServiceProtocolToTerraform(this._protocol.internalValue),
      root: nfsServiceRootToTerraform(this._root.internalValue),
      security: nfsServiceSecurityToTerraform(this._security.internalValue),
      showmount_enabled: cdktf.booleanToTerraform(this._showmountEnabled),
      svm_name: cdktf.stringToTerraform(this._svmName),
      transport: nfsServiceTransportToTerraform(this._transport.internalValue),
      vstorage_enabled: cdktf.booleanToTerraform(this._vstorageEnabled),
      windows: nfsServiceWindowsToTerraform(this._windows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
      protocol: {
        value: nfsServiceProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsServiceProtocol",
      },
      root: {
        value: nfsServiceRootToHclTerraform(this._root.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsServiceRoot",
      },
      security: {
        value: nfsServiceSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsServiceSecurity",
      },
      showmount_enabled: {
        value: cdktf.booleanToHclTerraform(this._showmountEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: nfsServiceTransportToHclTerraform(this._transport.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsServiceTransport",
      },
      vstorage_enabled: {
        value: cdktf.booleanToHclTerraform(this._vstorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      windows: {
        value: nfsServiceWindowsToHclTerraform(this._windows.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NfsServiceWindows",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
