// https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedhatopenshiftClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#cluster_resource_group RedhatopenshiftCluster#cluster_resource_group}
  */
  readonly clusterResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#id RedhatopenshiftCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#kubeadmin_password RedhatopenshiftCluster#kubeadmin_password}
  */
  readonly kubeadminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#kubeadmin_username RedhatopenshiftCluster#kubeadmin_username}
  */
  readonly kubeadminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#location RedhatopenshiftCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#name RedhatopenshiftCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#resource_group_name RedhatopenshiftCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#tags RedhatopenshiftCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * api_server_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#api_server_profile RedhatopenshiftCluster#api_server_profile}
  */
  readonly apiServerProfile?: RedhatopenshiftClusterApiServerProfile;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#cluster_profile RedhatopenshiftCluster#cluster_profile}
  */
  readonly clusterProfile?: RedhatopenshiftClusterClusterProfile;
  /**
  * ingress_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#ingress_profile RedhatopenshiftCluster#ingress_profile}
  */
  readonly ingressProfile?: RedhatopenshiftClusterIngressProfile;
  /**
  * master_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#master_profile RedhatopenshiftCluster#master_profile}
  */
  readonly masterProfile: RedhatopenshiftClusterMasterProfile;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#network_profile RedhatopenshiftCluster#network_profile}
  */
  readonly networkProfile?: RedhatopenshiftClusterNetworkProfile;
  /**
  * service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#service_principal RedhatopenshiftCluster#service_principal}
  */
  readonly servicePrincipal: RedhatopenshiftClusterServicePrincipal;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#timeouts RedhatopenshiftCluster#timeouts}
  */
  readonly timeouts?: RedhatopenshiftClusterTimeouts;
  /**
  * worker_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#worker_profile RedhatopenshiftCluster#worker_profile}
  */
  readonly workerProfile: RedhatopenshiftClusterWorkerProfile;
}
export interface RedhatopenshiftClusterApiServerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#visibility RedhatopenshiftCluster#visibility}
  */
  readonly visibility?: string;
}

export function redhatopenshiftClusterApiServerProfileToTerraform(struct?: RedhatopenshiftClusterApiServerProfileOutputReference | RedhatopenshiftClusterApiServerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function redhatopenshiftClusterApiServerProfileToHclTerraform(struct?: RedhatopenshiftClusterApiServerProfileOutputReference | RedhatopenshiftClusterApiServerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterApiServerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterApiServerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterApiServerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface RedhatopenshiftClusterClusterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#domain RedhatopenshiftCluster#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#fips_validated_modules RedhatopenshiftCluster#fips_validated_modules}
  */
  readonly fipsValidatedModules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#pull_secret RedhatopenshiftCluster#pull_secret}
  */
  readonly pullSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#resource_group_id RedhatopenshiftCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#version RedhatopenshiftCluster#version}
  */
  readonly version?: string;
}

export function redhatopenshiftClusterClusterProfileToTerraform(struct?: RedhatopenshiftClusterClusterProfileOutputReference | RedhatopenshiftClusterClusterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    fips_validated_modules: cdktf.stringToTerraform(struct!.fipsValidatedModules),
    pull_secret: cdktf.stringToTerraform(struct!.pullSecret),
    resource_group_id: cdktf.stringToTerraform(struct!.resourceGroupId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function redhatopenshiftClusterClusterProfileToHclTerraform(struct?: RedhatopenshiftClusterClusterProfileOutputReference | RedhatopenshiftClusterClusterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fips_validated_modules: {
      value: cdktf.stringToHclTerraform(struct!.fipsValidatedModules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.pullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterClusterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterClusterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._fipsValidatedModules !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsValidatedModules = this._fipsValidatedModules;
    }
    if (this._pullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecret = this._pullSecret;
    }
    if (this._resourceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupId = this._resourceGroupId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterClusterProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._fipsValidatedModules = undefined;
      this._pullSecret = undefined;
      this._resourceGroupId = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._fipsValidatedModules = value.fipsValidatedModules;
      this._pullSecret = value.pullSecret;
      this._resourceGroupId = value.resourceGroupId;
      this._version = value.version;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // fips_validated_modules - computed: false, optional: true, required: false
  private _fipsValidatedModules?: string; 
  public get fipsValidatedModules() {
    return this.getStringAttribute('fips_validated_modules');
  }
  public set fipsValidatedModules(value: string) {
    this._fipsValidatedModules = value;
  }
  public resetFipsValidatedModules() {
    this._fipsValidatedModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsValidatedModulesInput() {
    return this._fipsValidatedModules;
  }

  // pull_secret - computed: false, optional: true, required: false
  private _pullSecret?: string; 
  public get pullSecret() {
    return this.getStringAttribute('pull_secret');
  }
  public set pullSecret(value: string) {
    this._pullSecret = value;
  }
  public resetPullSecret() {
    this._pullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretInput() {
    return this._pullSecret;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RedhatopenshiftClusterIngressProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#visibility RedhatopenshiftCluster#visibility}
  */
  readonly visibility?: string;
}

export function redhatopenshiftClusterIngressProfileToTerraform(struct?: RedhatopenshiftClusterIngressProfileOutputReference | RedhatopenshiftClusterIngressProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function redhatopenshiftClusterIngressProfileToHclTerraform(struct?: RedhatopenshiftClusterIngressProfileOutputReference | RedhatopenshiftClusterIngressProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterIngressProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterIngressProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterIngressProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface RedhatopenshiftClusterMasterProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#disk_encryption_set RedhatopenshiftCluster#disk_encryption_set}
  */
  readonly diskEncryptionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#encryption_at_host RedhatopenshiftCluster#encryption_at_host}
  */
  readonly encryptionAtHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#subnet_id RedhatopenshiftCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#vm_size RedhatopenshiftCluster#vm_size}
  */
  readonly vmSize?: string;
}

export function redhatopenshiftClusterMasterProfileToTerraform(struct?: RedhatopenshiftClusterMasterProfileOutputReference | RedhatopenshiftClusterMasterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set: cdktf.stringToTerraform(struct!.diskEncryptionSet),
    encryption_at_host: cdktf.stringToTerraform(struct!.encryptionAtHost),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function redhatopenshiftClusterMasterProfileToHclTerraform(struct?: RedhatopenshiftClusterMasterProfileOutputReference | RedhatopenshiftClusterMasterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_at_host: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAtHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterMasterProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterMasterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSet = this._diskEncryptionSet;
    }
    if (this._encryptionAtHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtHost = this._encryptionAtHost;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterMasterProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryptionSet = undefined;
      this._encryptionAtHost = undefined;
      this._subnetId = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryptionSet = value.diskEncryptionSet;
      this._encryptionAtHost = value.encryptionAtHost;
      this._subnetId = value.subnetId;
      this._vmSize = value.vmSize;
    }
  }

  // disk_encryption_set - computed: false, optional: true, required: false
  private _diskEncryptionSet?: string; 
  public get diskEncryptionSet() {
    return this.getStringAttribute('disk_encryption_set');
  }
  public set diskEncryptionSet(value: string) {
    this._diskEncryptionSet = value;
  }
  public resetDiskEncryptionSet() {
    this._diskEncryptionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetInput() {
    return this._diskEncryptionSet;
  }

  // encryption_at_host - computed: false, optional: true, required: false
  private _encryptionAtHost?: string; 
  public get encryptionAtHost() {
    return this.getStringAttribute('encryption_at_host');
  }
  public set encryptionAtHost(value: string) {
    this._encryptionAtHost = value;
  }
  public resetEncryptionAtHost() {
    this._encryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostInput() {
    return this._encryptionAtHost;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vm_size - computed: false, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }
}
export interface RedhatopenshiftClusterNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#outbound_type RedhatopenshiftCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#pod_cidr RedhatopenshiftCluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#service_cidr RedhatopenshiftCluster#service_cidr}
  */
  readonly serviceCidr?: string;
}

export function redhatopenshiftClusterNetworkProfileToTerraform(struct?: RedhatopenshiftClusterNetworkProfileOutputReference | RedhatopenshiftClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
  }
}


export function redhatopenshiftClusterNetworkProfileToHclTerraform(struct?: RedhatopenshiftClusterNetworkProfileOutputReference | RedhatopenshiftClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outbound_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outboundType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundType = this._outboundType;
    }
    if (this._podCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidr = this._podCidr;
    }
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outboundType = undefined;
      this._podCidr = undefined;
      this._serviceCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outboundType = value.outboundType;
      this._podCidr = value.podCidr;
      this._serviceCidr = value.serviceCidr;
    }
  }

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }
}
export interface RedhatopenshiftClusterServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#client_id RedhatopenshiftCluster#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#client_secret RedhatopenshiftCluster#client_secret}
  */
  readonly clientSecret: string;
}

export function redhatopenshiftClusterServicePrincipalToTerraform(struct?: RedhatopenshiftClusterServicePrincipalOutputReference | RedhatopenshiftClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function redhatopenshiftClusterServicePrincipalToHclTerraform(struct?: RedhatopenshiftClusterServicePrincipalOutputReference | RedhatopenshiftClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}
export interface RedhatopenshiftClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#create RedhatopenshiftCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#delete RedhatopenshiftCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#read RedhatopenshiftCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#update RedhatopenshiftCluster#update}
  */
  readonly update?: string;
}

export function redhatopenshiftClusterTimeoutsToTerraform(struct?: RedhatopenshiftClusterTimeouts | cdktf.IResolvable): any {
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


export function redhatopenshiftClusterTimeoutsToHclTerraform(struct?: RedhatopenshiftClusterTimeouts | cdktf.IResolvable): any {
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

export class RedhatopenshiftClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedhatopenshiftClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedhatopenshiftClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface RedhatopenshiftClusterWorkerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#disk_encryption_set RedhatopenshiftCluster#disk_encryption_set}
  */
  readonly diskEncryptionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#disk_size_gb RedhatopenshiftCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#encryption_at_host RedhatopenshiftCluster#encryption_at_host}
  */
  readonly encryptionAtHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#node_count RedhatopenshiftCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#subnet_id RedhatopenshiftCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#vm_size RedhatopenshiftCluster#vm_size}
  */
  readonly vmSize?: string;
}

export function redhatopenshiftClusterWorkerProfileToTerraform(struct?: RedhatopenshiftClusterWorkerProfileOutputReference | RedhatopenshiftClusterWorkerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set: cdktf.stringToTerraform(struct!.diskEncryptionSet),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    encryption_at_host: cdktf.stringToTerraform(struct!.encryptionAtHost),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function redhatopenshiftClusterWorkerProfileToHclTerraform(struct?: RedhatopenshiftClusterWorkerProfileOutputReference | RedhatopenshiftClusterWorkerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_set: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_at_host: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAtHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedhatopenshiftClusterWorkerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedhatopenshiftClusterWorkerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSet = this._diskEncryptionSet;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._encryptionAtHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtHost = this._encryptionAtHost;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedhatopenshiftClusterWorkerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryptionSet = undefined;
      this._diskSizeGb = undefined;
      this._encryptionAtHost = undefined;
      this._nodeCount = undefined;
      this._subnetId = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryptionSet = value.diskEncryptionSet;
      this._diskSizeGb = value.diskSizeGb;
      this._encryptionAtHost = value.encryptionAtHost;
      this._nodeCount = value.nodeCount;
      this._subnetId = value.subnetId;
      this._vmSize = value.vmSize;
    }
  }

  // disk_encryption_set - computed: false, optional: true, required: false
  private _diskEncryptionSet?: string; 
  public get diskEncryptionSet() {
    return this.getStringAttribute('disk_encryption_set');
  }
  public set diskEncryptionSet(value: string) {
    this._diskEncryptionSet = value;
  }
  public resetDiskEncryptionSet() {
    this._diskEncryptionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetInput() {
    return this._diskEncryptionSet;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // encryption_at_host - computed: false, optional: true, required: false
  private _encryptionAtHost?: string; 
  public get encryptionAtHost() {
    return this.getStringAttribute('encryption_at_host');
  }
  public set encryptionAtHost(value: string) {
    this._encryptionAtHost = value;
  }
  public resetEncryptionAtHost() {
    this._encryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostInput() {
    return this._encryptionAtHost;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vm_size - computed: false, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster azureopenshift_redhatopenshift_cluster}
*/
export class RedhatopenshiftCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azureopenshift_redhatopenshift_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedhatopenshiftCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedhatopenshiftCluster to import
  * @param importFromId The id of the existing RedhatopenshiftCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedhatopenshiftCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azureopenshift_redhatopenshift_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rh-mobb/azureopenshift/0.4.0/docs/resources/redhatopenshift_cluster azureopenshift_redhatopenshift_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedhatopenshiftClusterConfig
  */
  public constructor(scope: Construct, id: string, config: RedhatopenshiftClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azureopenshift_redhatopenshift_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azureopenshift',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterResourceGroup = config.clusterResourceGroup;
    this._id = config.id;
    this._kubeadminPassword = config.kubeadminPassword;
    this._kubeadminUsername = config.kubeadminUsername;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._apiServerProfile.internalValue = config.apiServerProfile;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._ingressProfile.internalValue = config.ingressProfile;
    this._masterProfile.internalValue = config.masterProfile;
    this._networkProfile.internalValue = config.networkProfile;
    this._servicePrincipal.internalValue = config.servicePrincipal;
    this._timeouts.internalValue = config.timeouts;
    this._workerProfile.internalValue = config.workerProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_resource_group - computed: false, optional: true, required: false
  private _clusterResourceGroup?: string; 
  public get clusterResourceGroup() {
    return this.getStringAttribute('cluster_resource_group');
  }
  public set clusterResourceGroup(value: string) {
    this._clusterResourceGroup = value;
  }
  public resetClusterResourceGroup() {
    this._clusterResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceGroupInput() {
    return this._clusterResourceGroup;
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
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

  // kubeadmin_password - computed: true, optional: true, required: false
  private _kubeadminPassword?: string; 
  public get kubeadminPassword() {
    return this.getStringAttribute('kubeadmin_password');
  }
  public set kubeadminPassword(value: string) {
    this._kubeadminPassword = value;
  }
  public resetKubeadminPassword() {
    this._kubeadminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeadminPasswordInput() {
    return this._kubeadminPassword;
  }

  // kubeadmin_username - computed: true, optional: true, required: false
  private _kubeadminUsername?: string; 
  public get kubeadminUsername() {
    return this.getStringAttribute('kubeadmin_username');
  }
  public set kubeadminUsername(value: string) {
    this._kubeadminUsername = value;
  }
  public resetKubeadminUsername() {
    this._kubeadminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeadminUsernameInput() {
    return this._kubeadminUsername;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // api_server_profile - computed: false, optional: true, required: false
  private _apiServerProfile = new RedhatopenshiftClusterApiServerProfileOutputReference(this, "api_server_profile");
  public get apiServerProfile() {
    return this._apiServerProfile;
  }
  public putApiServerProfile(value: RedhatopenshiftClusterApiServerProfile) {
    this._apiServerProfile.internalValue = value;
  }
  public resetApiServerProfile() {
    this._apiServerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerProfileInput() {
    return this._apiServerProfile.internalValue;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new RedhatopenshiftClusterClusterProfileOutputReference(this, "cluster_profile");
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: RedhatopenshiftClusterClusterProfile) {
    this._clusterProfile.internalValue = value;
  }
  public resetClusterProfile() {
    this._clusterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile.internalValue;
  }

  // ingress_profile - computed: false, optional: true, required: false
  private _ingressProfile = new RedhatopenshiftClusterIngressProfileOutputReference(this, "ingress_profile");
  public get ingressProfile() {
    return this._ingressProfile;
  }
  public putIngressProfile(value: RedhatopenshiftClusterIngressProfile) {
    this._ingressProfile.internalValue = value;
  }
  public resetIngressProfile() {
    this._ingressProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressProfileInput() {
    return this._ingressProfile.internalValue;
  }

  // master_profile - computed: false, optional: false, required: true
  private _masterProfile = new RedhatopenshiftClusterMasterProfileOutputReference(this, "master_profile");
  public get masterProfile() {
    return this._masterProfile;
  }
  public putMasterProfile(value: RedhatopenshiftClusterMasterProfile) {
    this._masterProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterProfileInput() {
    return this._masterProfile.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new RedhatopenshiftClusterNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: RedhatopenshiftClusterNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // service_principal - computed: false, optional: false, required: true
  private _servicePrincipal = new RedhatopenshiftClusterServicePrincipalOutputReference(this, "service_principal");
  public get servicePrincipal() {
    return this._servicePrincipal;
  }
  public putServicePrincipal(value: RedhatopenshiftClusterServicePrincipal) {
    this._servicePrincipal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedhatopenshiftClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedhatopenshiftClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_profile - computed: false, optional: false, required: true
  private _workerProfile = new RedhatopenshiftClusterWorkerProfileOutputReference(this, "worker_profile");
  public get workerProfile() {
    return this._workerProfile;
  }
  public putWorkerProfile(value: RedhatopenshiftClusterWorkerProfile) {
    this._workerProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerProfileInput() {
    return this._workerProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_resource_group: cdktf.stringToTerraform(this._clusterResourceGroup),
      id: cdktf.stringToTerraform(this._id),
      kubeadmin_password: cdktf.stringToTerraform(this._kubeadminPassword),
      kubeadmin_username: cdktf.stringToTerraform(this._kubeadminUsername),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      api_server_profile: redhatopenshiftClusterApiServerProfileToTerraform(this._apiServerProfile.internalValue),
      cluster_profile: redhatopenshiftClusterClusterProfileToTerraform(this._clusterProfile.internalValue),
      ingress_profile: redhatopenshiftClusterIngressProfileToTerraform(this._ingressProfile.internalValue),
      master_profile: redhatopenshiftClusterMasterProfileToTerraform(this._masterProfile.internalValue),
      network_profile: redhatopenshiftClusterNetworkProfileToTerraform(this._networkProfile.internalValue),
      service_principal: redhatopenshiftClusterServicePrincipalToTerraform(this._servicePrincipal.internalValue),
      timeouts: redhatopenshiftClusterTimeoutsToTerraform(this._timeouts.internalValue),
      worker_profile: redhatopenshiftClusterWorkerProfileToTerraform(this._workerProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_resource_group: {
        value: cdktf.stringToHclTerraform(this._clusterResourceGroup),
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
      kubeadmin_password: {
        value: cdktf.stringToHclTerraform(this._kubeadminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeadmin_username: {
        value: cdktf.stringToHclTerraform(this._kubeadminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      api_server_profile: {
        value: redhatopenshiftClusterApiServerProfileToHclTerraform(this._apiServerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterApiServerProfileList",
      },
      cluster_profile: {
        value: redhatopenshiftClusterClusterProfileToHclTerraform(this._clusterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterClusterProfileList",
      },
      ingress_profile: {
        value: redhatopenshiftClusterIngressProfileToHclTerraform(this._ingressProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterIngressProfileList",
      },
      master_profile: {
        value: redhatopenshiftClusterMasterProfileToHclTerraform(this._masterProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterMasterProfileList",
      },
      network_profile: {
        value: redhatopenshiftClusterNetworkProfileToHclTerraform(this._networkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterNetworkProfileList",
      },
      service_principal: {
        value: redhatopenshiftClusterServicePrincipalToHclTerraform(this._servicePrincipal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterServicePrincipalList",
      },
      timeouts: {
        value: redhatopenshiftClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedhatopenshiftClusterTimeouts",
      },
      worker_profile: {
        value: redhatopenshiftClusterWorkerProfileToHclTerraform(this._workerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedhatopenshiftClusterWorkerProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
