// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbOpensearchClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication settings for Dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#auth_settings DataYandexMdbOpensearchCluster#auth_settings}
  */
  readonly authSettings?: DataYandexMdbOpensearchClusterAuthSettings;
  /**
  * The ID of the OpenSearch cluster that the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#cluster_id DataYandexMdbOpensearchCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#deletion_protection DataYandexMdbOpensearchCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#description DataYandexMdbOpensearchCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#disk_encryption_key_id DataYandexMdbOpensearchCluster#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#folder_id DataYandexMdbOpensearchCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#labels DataYandexMdbOpensearchCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the OpenSearch cluster. The name must be unique within the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#name DataYandexMdbOpensearchCluster#name}
  */
  readonly name?: string;
  /**
  * A set of security groups IDs which assigned to hosts of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#security_group_ids DataYandexMdbOpensearchCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * ID of the service account authorized for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#service_account_id DataYandexMdbOpensearchCluster#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#config DataYandexMdbOpensearchCluster#config}
  */
  readonly config?: DataYandexMdbOpensearchClusterConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#timeouts DataYandexMdbOpensearchCluster#timeouts}
  */
  readonly timeouts?: DataYandexMdbOpensearchClusterTimeouts;
}
export interface DataYandexMdbOpensearchClusterAuthSettingsSaml {
  /**
  * Roles key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#roles_key DataYandexMdbOpensearchCluster#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Subject key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#subject_key DataYandexMdbOpensearchCluster#subject_key}
  */
  readonly subjectKey?: string;
}

export function dataYandexMdbOpensearchClusterAuthSettingsSamlToTerraform(struct?: DataYandexMdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function dataYandexMdbOpensearchClusterAuthSettingsSamlToHclTerraform(struct?: DataYandexMdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterAuthSettingsSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rolesKey = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rolesKey = value.rolesKey;
      this._subjectKey = value.subjectKey;
    }
  }

  // dashboards_url - computed: true, optional: false, required: false
  public get dashboardsUrl() {
    return this.getStringAttribute('dashboards_url');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // idp_entity_id - computed: true, optional: false, required: false
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }

  // idp_metadata_file_content - computed: true, optional: false, required: false
  public get idpMetadataFileContent() {
    return this.getStringAttribute('idp_metadata_file_content');
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface DataYandexMdbOpensearchClusterAuthSettings {
  /**
  * SAML authentication options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#saml DataYandexMdbOpensearchCluster#saml}
  */
  readonly saml?: DataYandexMdbOpensearchClusterAuthSettingsSaml;
}

export function dataYandexMdbOpensearchClusterAuthSettingsToTerraform(struct?: DataYandexMdbOpensearchClusterAuthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml: dataYandexMdbOpensearchClusterAuthSettingsSamlToTerraform(struct!.saml),
  }
}


export function dataYandexMdbOpensearchClusterAuthSettingsToHclTerraform(struct?: DataYandexMdbOpensearchClusterAuthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml: {
      value: dataYandexMdbOpensearchClusterAuthSettingsSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexMdbOpensearchClusterAuthSettingsSaml",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterAuthSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterAuthSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saml.internalValue = value.saml;
    }
  }

  // saml - computed: true, optional: true, required: false
  private _saml = new DataYandexMdbOpensearchClusterAuthSettingsSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: DataYandexMdbOpensearchClusterAuthSettingsSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}
export interface DataYandexMdbOpensearchClusterHosts {
  /**
  * Sets whether the host should get a public IP address. Can be either `true` or `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#assign_public_ip DataYandexMdbOpensearchCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * The ID of the subnet, to which the host belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#subnet_id DataYandexMdbOpensearchCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataYandexMdbOpensearchClusterHostsToTerraform(struct?: DataYandexMdbOpensearchClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataYandexMdbOpensearchClusterHostsToHclTerraform(struct?: DataYandexMdbOpensearchClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._subnetId = value.subnetId;
    }
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // node_group - computed: true, optional: false, required: false
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataYandexMdbOpensearchClusterHostsList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbOpensearchClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbOpensearchClusterHostsOutputReference {
    return new DataYandexMdbOpensearchClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbOpensearchClusterConfigAccess {
}

export function dataYandexMdbOpensearchClusterConfigAccessToTerraform(struct?: DataYandexMdbOpensearchClusterConfigAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbOpensearchClusterConfigAccessToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbOpensearchClusterConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // data_transfer - computed: true, optional: false, required: false
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }

  // serverless - computed: true, optional: false, required: false
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
}
export interface DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources {
  /**
  * Volume of the storage available to a host, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#disk_size DataYandexMdbOpensearchCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of OpenSearch hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#disk_type_id DataYandexMdbOpensearchCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-opensearch/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#resource_preset_id DataYandexMdbOpensearchCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToTerraform(struct?: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups {
  /**
  * Sets whether the hosts should get a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#assign_public_ip DataYandexMdbOpensearchCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Number of hosts in this node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#hosts_count DataYandexMdbOpensearchCluster#hosts_count}
  */
  readonly hostsCount: number;
  /**
  * Name of OpenSearch node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#name DataYandexMdbOpensearchCluster#name}
  */
  readonly name: string;
  /**
  * A set of the subnets, to which the hosts belongs. The subnets must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#subnet_ids DataYandexMdbOpensearchCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * A set of availability zones where hosts of node group may be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#zone_ids DataYandexMdbOpensearchCluster#zone_ids}
  */
  readonly zoneIds?: string[];
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#resources DataYandexMdbOpensearchCluster#resources}
  */
  readonly resources: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources;
}

export function dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsToTerraform(struct?: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    hosts_count: cdktf.numberToTerraform(struct!.hostsCount),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zoneIds),
    resources: dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts_count: {
      value: cdktf.numberToHclTerraform(struct!.hostsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zone_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zoneIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._hostsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsCount = this._hostsCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._zoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIds = this._zoneIds;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._hostsCount = undefined;
      this._name = undefined;
      this._subnetIds = undefined;
      this._zoneIds = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._hostsCount = value.hostsCount;
      this._name = value.name;
      this._subnetIds = value.subnetIds;
      this._zoneIds = value.zoneIds;
      this._resources.internalValue = value.resources;
    }
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // hosts_count - computed: false, optional: false, required: true
  private _hostsCount?: number; 
  public get hostsCount() {
    return this.getNumberAttribute('hosts_count');
  }
  public set hostsCount(value: number) {
    this._hostsCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsCountInput() {
    return this._hostsCount;
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

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // zone_ids - computed: true, optional: true, required: false
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  public resetZoneIds() {
    this._zoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsOutputReference {
    return new DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbOpensearchClusterConfigDashboards {
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#node_groups DataYandexMdbOpensearchCluster#node_groups}
  */
  readonly nodeGroups?: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups[] | cdktf.IResolvable;
}

export function dataYandexMdbOpensearchClusterConfigDashboardsToTerraform(struct?: DataYandexMdbOpensearchClusterConfigDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_groups: cdktf.listMapper(dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsToTerraform, true)(struct!.nodeGroups),
  }
}


export function dataYandexMdbOpensearchClusterConfigDashboardsToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_groups: {
      value: cdktf.listMapperHcl(dataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsToHclTerraform, true)(struct!.nodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigDashboards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroups = this._nodeGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeGroups.internalValue = value.nodeGroups;
    }
  }

  // node_groups - computed: false, optional: true, required: false
  private _nodeGroups = new DataYandexMdbOpensearchClusterConfigDashboardsNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: DataYandexMdbOpensearchClusterConfigDashboardsNodeGroups[] | cdktf.IResolvable) {
    this._nodeGroups.internalValue = value;
  }
  public resetNodeGroups() {
    this._nodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsInput() {
    return this._nodeGroups.internalValue;
  }
}
export interface DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling {
  /**
  * Threshold of storage usage (in percent) that triggers immediate automatic scaling of the storage. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#emergency_usage_threshold DataYandexMdbOpensearchCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Threshold of storage usage (in percent) that triggers automatic scaling of the storage during the maintenance window. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#planned_usage_threshold DataYandexMdbOpensearchCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emergency_usage_threshold: cdktf.numberToTerraform(struct!.emergencyUsageThreshold),
    planned_usage_threshold: cdktf.numberToTerraform(struct!.plannedUsageThreshold),
  }
}


export function dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emergency_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.emergencyUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    planned_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.plannedUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emergencyUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyUsageThreshold = this._emergencyUsageThreshold;
    }
    if (this._plannedUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.plannedUsageThreshold = this._plannedUsageThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: true, optional: false, required: false
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }

  // emergency_usage_threshold - computed: true, optional: true, required: false
  private _emergencyUsageThreshold?: number; 
  public get emergencyUsageThreshold() {
    return this.getNumberAttribute('emergency_usage_threshold');
  }
  public set emergencyUsageThreshold(value: number) {
    this._emergencyUsageThreshold = value;
  }
  public resetEmergencyUsageThreshold() {
    this._emergencyUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyUsageThresholdInput() {
    return this._emergencyUsageThreshold;
  }

  // planned_usage_threshold - computed: true, optional: true, required: false
  private _plannedUsageThreshold?: number; 
  public get plannedUsageThreshold() {
    return this.getNumberAttribute('planned_usage_threshold');
  }
  public set plannedUsageThreshold(value: number) {
    this._plannedUsageThreshold = value;
  }
  public resetPlannedUsageThreshold() {
    this._plannedUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedUsageThresholdInput() {
    return this._plannedUsageThreshold;
  }
}
export interface DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources {
  /**
  * Volume of the storage available to a host, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#disk_size DataYandexMdbOpensearchCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of OpenSearch hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#disk_type_id DataYandexMdbOpensearchCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-opensearch/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#resource_preset_id DataYandexMdbOpensearchCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups {
  /**
  * Sets whether the hosts should get a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#assign_public_ip DataYandexMdbOpensearchCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Node group disk size autoscaling settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#disk_size_autoscaling DataYandexMdbOpensearchCluster#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling;
  /**
  * A set of OpenSearch roles assigned to hosts. Available roles are: `DATA`, `MANAGER`. Default: [`DATA`, `MANAGER`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#roles DataYandexMdbOpensearchCluster#roles}
  */
  readonly roles?: string[];
  /**
  * A set of the subnets, to which the hosts belongs. The subnets must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#subnet_ids DataYandexMdbOpensearchCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * A set of availability zones where hosts of node group may be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#zone_ids DataYandexMdbOpensearchCluster#zone_ids}
  */
  readonly zoneIds?: string[];
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#resources DataYandexMdbOpensearchCluster#resources}
  */
  readonly resources: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources;
}

export function dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsToTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    disk_size_autoscaling: dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToTerraform(struct!.diskSizeAutoscaling),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zoneIds),
    resources: dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size_autoscaling: {
      value: dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToHclTerraform(struct!.diskSizeAutoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zone_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zoneIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._diskSizeAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeAutoscaling = this._diskSizeAutoscaling?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._zoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIds = this._zoneIds;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._diskSizeAutoscaling.internalValue = undefined;
      this._roles = undefined;
      this._subnetIds = undefined;
      this._zoneIds = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._diskSizeAutoscaling.internalValue = value.diskSizeAutoscaling;
      this._roles = value.roles;
      this._subnetIds = value.subnetIds;
      this._zoneIds = value.zoneIds;
      this._resources.internalValue = value.resources;
    }
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // disk_size_autoscaling - computed: true, optional: true, required: false
  private _diskSizeAutoscaling = new DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
  }

  // hosts_count - computed: true, optional: false, required: false
  public get hostsCount() {
    return this.getNumberAttribute('hosts_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // zone_ids - computed: true, optional: true, required: false
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  public resetZoneIds() {
    this._zoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsOutputReference {
    return new DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbOpensearchClusterConfigOpensearch {
  /**
  * A set of requested OpenSearch plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#plugins DataYandexMdbOpensearchCluster#plugins}
  */
  readonly plugins?: string[];
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#node_groups DataYandexMdbOpensearchCluster#node_groups}
  */
  readonly nodeGroups?: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups[] | cdktf.IResolvable;
}

export function dataYandexMdbOpensearchClusterConfigOpensearchToTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.plugins),
    node_groups: cdktf.listMapper(dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsToTerraform, true)(struct!.nodeGroups),
  }
}


export function dataYandexMdbOpensearchClusterConfigOpensearchToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.plugins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    node_groups: {
      value: cdktf.listMapperHcl(dataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsToHclTerraform, true)(struct!.nodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigOpensearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins;
    }
    if (this._nodeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroups = this._nodeGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigOpensearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plugins = undefined;
      this._nodeGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plugins = value.plugins;
      this._nodeGroups.internalValue = value.nodeGroups;
    }
  }

  // plugins - computed: true, optional: true, required: false
  private _plugins?: string[]; 
  public get plugins() {
    return cdktf.Fn.tolist(this.getListAttribute('plugins'));
  }
  public set plugins(value: string[]) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
  }

  // node_groups - computed: false, optional: true, required: false
  private _nodeGroups = new DataYandexMdbOpensearchClusterConfigOpensearchNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: DataYandexMdbOpensearchClusterConfigOpensearchNodeGroups[] | cdktf.IResolvable) {
    this._nodeGroups.internalValue = value;
  }
  public resetNodeGroups() {
    this._nodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsInput() {
    return this._nodeGroups.internalValue;
  }
}
export interface DataYandexMdbOpensearchClusterConfigA {
  /**
  * Password for admin user of OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#admin_password DataYandexMdbOpensearchCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Version of OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#version DataYandexMdbOpensearchCluster#version}
  */
  readonly version?: string;
  /**
  * dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#dashboards DataYandexMdbOpensearchCluster#dashboards}
  */
  readonly dashboards?: DataYandexMdbOpensearchClusterConfigDashboards;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#opensearch DataYandexMdbOpensearchCluster#opensearch}
  */
  readonly opensearch?: DataYandexMdbOpensearchClusterConfigOpensearch;
}

export function dataYandexMdbOpensearchClusterConfigAToTerraform(struct?: DataYandexMdbOpensearchClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    version: cdktf.stringToTerraform(struct!.version),
    dashboards: dataYandexMdbOpensearchClusterConfigDashboardsToTerraform(struct!.dashboards),
    opensearch: dataYandexMdbOpensearchClusterConfigOpensearchToTerraform(struct!.opensearch),
  }
}


export function dataYandexMdbOpensearchClusterConfigAToHclTerraform(struct?: DataYandexMdbOpensearchClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
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
    dashboards: {
      value: dataYandexMdbOpensearchClusterConfigDashboardsToHclTerraform(struct!.dashboards),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexMdbOpensearchClusterConfigDashboards",
    },
    opensearch: {
      value: dataYandexMdbOpensearchClusterConfigOpensearchToHclTerraform(struct!.opensearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexMdbOpensearchClusterConfigOpensearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbOpensearchClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._dashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboards = this._dashboards?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._version = undefined;
      this._dashboards.internalValue = undefined;
      this._opensearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._version = value.version;
      this._dashboards.internalValue = value.dashboards;
      this._opensearch.internalValue = value.opensearch;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
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

  // access - computed: false, optional: false, required: false
  private _access = new DataYandexMdbOpensearchClusterConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new DataYandexMdbOpensearchClusterConfigDashboardsOutputReference(this, "dashboards");
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: DataYandexMdbOpensearchClusterConfigDashboards) {
    this._dashboards.internalValue = value;
  }
  public resetDashboards() {
    this._dashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsInput() {
    return this._dashboards.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new DataYandexMdbOpensearchClusterConfigOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: DataYandexMdbOpensearchClusterConfigOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }
}
export interface DataYandexMdbOpensearchClusterMaintenanceWindow {
}

export function dataYandexMdbOpensearchClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbOpensearchClusterMaintenanceWindowToHclTerraform(struct?: DataYandexMdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbOpensearchClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataYandexMdbOpensearchClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#create DataYandexMdbOpensearchCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#delete DataYandexMdbOpensearchCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#update DataYandexMdbOpensearchCluster#update}
  */
  readonly update?: string;
}

export function dataYandexMdbOpensearchClusterTimeoutsToTerraform(struct?: DataYandexMdbOpensearchClusterTimeouts | cdktf.IResolvable): any {
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


export function dataYandexMdbOpensearchClusterTimeoutsToHclTerraform(struct?: DataYandexMdbOpensearchClusterTimeouts | cdktf.IResolvable): any {
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

export class DataYandexMdbOpensearchClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbOpensearchClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexMdbOpensearchClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster yandex_mdb_opensearch_cluster}
*/
export class DataYandexMdbOpensearchCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_opensearch_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbOpensearchCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbOpensearchCluster to import
  * @param importFromId The id of the existing DataYandexMdbOpensearchCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbOpensearchCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_opensearch_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_opensearch_cluster yandex_mdb_opensearch_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbOpensearchClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbOpensearchClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_opensearch_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authSettings.internalValue = config.authSettings;
    this._clusterId = config.clusterId;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceAccountId = config.serviceAccountId;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_settings - computed: true, optional: true, required: false
  private _authSettings = new DataYandexMdbOpensearchClusterAuthSettingsOutputReference(this, "auth_settings");
  public get authSettings() {
    return this._authSettings;
  }
  public putAuthSettings(value: DataYandexMdbOpensearchClusterAuthSettings) {
    this._authSettings.internalValue = value;
  }
  public resetAuthSettings() {
    this._authSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsInput() {
    return this._authSettings.internalValue;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: true, optional: true, required: false
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

  // disk_encryption_key_id - computed: true, optional: true, required: false
  private _diskEncryptionKeyId?: string; 
  public get diskEncryptionKeyId() {
    return this.getStringAttribute('disk_encryption_key_id');
  }
  public set diskEncryptionKeyId(value: string) {
    this._diskEncryptionKeyId = value;
  }
  public resetDiskEncryptionKeyId() {
    this._diskEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyIdInput() {
    return this._diskEncryptionKeyId;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexMdbOpensearchClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataYandexMdbOpensearchClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataYandexMdbOpensearchClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // maintenance_window - computed: false, optional: false, required: false
  private _maintenanceWindow = new DataYandexMdbOpensearchClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexMdbOpensearchClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexMdbOpensearchClusterTimeouts) {
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
      auth_settings: dataYandexMdbOpensearchClusterAuthSettingsToTerraform(this._authSettings.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      config: dataYandexMdbOpensearchClusterConfigAToTerraform(this._config.internalValue),
      timeouts: dataYandexMdbOpensearchClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_settings: {
        value: dataYandexMdbOpensearchClusterAuthSettingsToHclTerraform(this._authSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexMdbOpensearchClusterAuthSettings",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._diskEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: dataYandexMdbOpensearchClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexMdbOpensearchClusterConfigA",
      },
      timeouts: {
        value: dataYandexMdbOpensearchClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexMdbOpensearchClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
