// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIFS volume id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#cifs_volume_id KubernetesEngine#cifs_volume_id}
  */
  readonly cifsVolumeId?: string;
  /**
  * Enable cloud logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#cloud_logging_enabled KubernetesEngine#cloud_logging_enabled}
  */
  readonly cloudLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#id KubernetesEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kubernetes version (Contact administrator to check supported version)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#kubernetes_version KubernetesEngine#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * Load balancer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#load_balancer_id KubernetesEngine#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Kubernetes engine name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#name KubernetesEngine#name}
  */
  readonly name: string;
  /**
  * List of comma separated IP addresses (CIDR or Single IP) for access control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#public_acl_ip_address KubernetesEngine#public_acl_ip_address}
  */
  readonly publicAclIpAddress?: string;
  /**
  * Security group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#security_group_id KubernetesEngine#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Subnet ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#subnet_id KubernetesEngine#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#tags KubernetesEngine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * File storage volume ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#volume_id KubernetesEngine#volume_id}
  */
  readonly volumeId: string;
  /**
  * VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#vpc_id KubernetesEngine#vpc_id}
  */
  readonly vpcId: string;
  /**
  * private_acl_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#private_acl_resources KubernetesEngine#private_acl_resources}
  */
  readonly privateAclResources?: KubernetesEnginePrivateAclResources[] | cdktf.IResolvable;
}
export interface KubernetesEnginePrivateAclResources {
  /**
  * Resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#resource_id KubernetesEngine#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#resource_type KubernetesEngine#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Resource Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#resource_value KubernetesEngine#resource_value}
  */
  readonly resourceValue?: string;
}

export function kubernetesEnginePrivateAclResourcesToTerraform(struct?: KubernetesEnginePrivateAclResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resource_value: cdktf.stringToTerraform(struct!.resourceValue),
  }
}


export function kubernetesEnginePrivateAclResourcesToHclTerraform(struct?: KubernetesEnginePrivateAclResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_value: {
      value: cdktf.stringToHclTerraform(struct!.resourceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesEnginePrivateAclResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KubernetesEnginePrivateAclResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceValue = this._resourceValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesEnginePrivateAclResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._resourceValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._resourceValue = value.resourceValue;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_value - computed: false, optional: true, required: false
  private _resourceValue?: string; 
  public get resourceValue() {
    return this.getStringAttribute('resource_value');
  }
  public set resourceValue(value: string) {
    this._resourceValue = value;
  }
  public resetResourceValue() {
    this._resourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceValueInput() {
    return this._resourceValue;
  }
}

export class KubernetesEnginePrivateAclResourcesList extends cdktf.ComplexList {
  public internalValue? : KubernetesEnginePrivateAclResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KubernetesEnginePrivateAclResourcesOutputReference {
    return new KubernetesEnginePrivateAclResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine samsungcloudplatform_kubernetes_engine}
*/
export class KubernetesEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesEngine to import
  * @param importFromId The id of the existing KubernetesEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kubernetes_engine samsungcloudplatform_kubernetes_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesEngineConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_engine',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cifsVolumeId = config.cifsVolumeId;
    this._cloudLoggingEnabled = config.cloudLoggingEnabled;
    this._id = config.id;
    this._kubernetesVersion = config.kubernetesVersion;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._publicAclIpAddress = config.publicAclIpAddress;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volumeId = config.volumeId;
    this._vpcId = config.vpcId;
    this._privateAclResources.internalValue = config.privateAclResources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs_volume_id - computed: false, optional: true, required: false
  private _cifsVolumeId?: string; 
  public get cifsVolumeId() {
    return this.getStringAttribute('cifs_volume_id');
  }
  public set cifsVolumeId(value: string) {
    this._cifsVolumeId = value;
  }
  public resetCifsVolumeId() {
    this._cifsVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsVolumeIdInput() {
    return this._cifsVolumeId;
  }

  // cloud_logging_enabled - computed: true, optional: true, required: false
  private _cloudLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get cloudLoggingEnabled() {
    return this.getBooleanAttribute('cloud_logging_enabled');
  }
  public set cloudLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudLoggingEnabled = value;
  }
  public resetCloudLoggingEnabled() {
    this._cloudLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLoggingEnabledInput() {
    return this._cloudLoggingEnabled;
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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // load_balancer_id - computed: false, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // public_acl_ip_address - computed: false, optional: true, required: false
  private _publicAclIpAddress?: string; 
  public get publicAclIpAddress() {
    return this.getStringAttribute('public_acl_ip_address');
  }
  public set publicAclIpAddress(value: string) {
    this._publicAclIpAddress = value;
  }
  public resetPublicAclIpAddress() {
    this._publicAclIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAclIpAddressInput() {
    return this._publicAclIpAddress;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // private_acl_resources - computed: false, optional: true, required: false
  private _privateAclResources = new KubernetesEnginePrivateAclResourcesList(this, "private_acl_resources", false);
  public get privateAclResources() {
    return this._privateAclResources;
  }
  public putPrivateAclResources(value: KubernetesEnginePrivateAclResources[] | cdktf.IResolvable) {
    this._privateAclResources.internalValue = value;
  }
  public resetPrivateAclResources() {
    this._privateAclResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAclResourcesInput() {
    return this._privateAclResources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cifs_volume_id: cdktf.stringToTerraform(this._cifsVolumeId),
      cloud_logging_enabled: cdktf.booleanToTerraform(this._cloudLoggingEnabled),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      public_acl_ip_address: cdktf.stringToTerraform(this._publicAclIpAddress),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      private_acl_resources: cdktf.listMapper(kubernetesEnginePrivateAclResourcesToTerraform, true)(this._privateAclResources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cifs_volume_id: {
        value: cdktf.stringToHclTerraform(this._cifsVolumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      public_acl_ip_address: {
        value: cdktf.stringToHclTerraform(this._publicAclIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_acl_resources: {
        value: cdktf.listMapperHcl(kubernetesEnginePrivateAclResourcesToHclTerraform, true)(this._privateAclResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesEnginePrivateAclResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
