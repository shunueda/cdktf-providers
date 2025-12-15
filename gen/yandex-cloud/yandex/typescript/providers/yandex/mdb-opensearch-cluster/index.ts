// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbOpensearchClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication settings for Dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#auth_settings MdbOpensearchCluster#auth_settings}
  */
  readonly authSettings?: MdbOpensearchClusterAuthSettings;
  /**
  * The ID of the OpenSearch cluster that the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#cluster_id MdbOpensearchCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#deletion_protection MdbOpensearchCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#description MdbOpensearchCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_encryption_key_id MdbOpensearchCluster#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Deployment environment of the OpenSearch cluster. Can be either `PRESTABLE` or `PRODUCTION`. Default: `PRODUCTION`. **It is not possible to change this value after cluster creation**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#environment MdbOpensearchCluster#environment}
  */
  readonly environment?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#folder_id MdbOpensearchCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#labels MdbOpensearchCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the OpenSearch cluster. The name must be unique within the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#name MdbOpensearchCluster#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#network_id MdbOpensearchCluster#network_id}
  */
  readonly networkId: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#security_group_ids MdbOpensearchCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * ID of the service account authorized for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#service_account_id MdbOpensearchCluster#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#config MdbOpensearchCluster#config}
  */
  readonly config?: MdbOpensearchClusterConfigA;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#maintenance_window MdbOpensearchCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbOpensearchClusterMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#timeouts MdbOpensearchCluster#timeouts}
  */
  readonly timeouts?: MdbOpensearchClusterTimeouts;
}
export interface MdbOpensearchClusterAuthSettingsSaml {
  /**
  * Dashboards URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#dashboards_url MdbOpensearchCluster#dashboards_url}
  */
  readonly dashboardsUrl: string;
  /**
  * Enables SAML authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#enabled MdbOpensearchCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ID of the SAML Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#idp_entity_id MdbOpensearchCluster#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * Metadata file content of the SAML Identity Provider. You can either put file content manually or use [`file` function](https://developer.hashicorp.com/terraform/language/functions/file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#idp_metadata_file_content MdbOpensearchCluster#idp_metadata_file_content}
  */
  readonly idpMetadataFileContent: string;
  /**
  * Roles key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#roles_key MdbOpensearchCluster#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Service provider entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#sp_entity_id MdbOpensearchCluster#sp_entity_id}
  */
  readonly spEntityId: string;
  /**
  * Subject key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#subject_key MdbOpensearchCluster#subject_key}
  */
  readonly subjectKey?: string;
}

export function mdbOpensearchClusterAuthSettingsSamlToTerraform(struct?: MdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboards_url: cdktf.stringToTerraform(struct!.dashboardsUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_metadata_file_content: cdktf.stringToTerraform(struct!.idpMetadataFileContent),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function mdbOpensearchClusterAuthSettingsSamlToHclTerraform(struct?: MdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboards_url: {
      value: cdktf.stringToHclTerraform(struct!.dashboardsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_file_content: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
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

export class MdbOpensearchClusterAuthSettingsSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardsUrl = this._dashboardsUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._idpMetadataFileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataFileContent = this._idpMetadataFileContent;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbOpensearchClusterAuthSettingsSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardsUrl = undefined;
      this._enabled = undefined;
      this._idpEntityId = undefined;
      this._idpMetadataFileContent = undefined;
      this._rolesKey = undefined;
      this._spEntityId = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardsUrl = value.dashboardsUrl;
      this._enabled = value.enabled;
      this._idpEntityId = value.idpEntityId;
      this._idpMetadataFileContent = value.idpMetadataFileContent;
      this._rolesKey = value.rolesKey;
      this._spEntityId = value.spEntityId;
      this._subjectKey = value.subjectKey;
    }
  }

  // dashboards_url - computed: false, optional: false, required: true
  private _dashboardsUrl?: string; 
  public get dashboardsUrl() {
    return this.getStringAttribute('dashboards_url');
  }
  public set dashboardsUrl(value: string) {
    this._dashboardsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsUrlInput() {
    return this._dashboardsUrl;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_metadata_file_content - computed: false, optional: false, required: true
  private _idpMetadataFileContent?: string; 
  public get idpMetadataFileContent() {
    return this.getStringAttribute('idp_metadata_file_content');
  }
  public set idpMetadataFileContent(value: string) {
    this._idpMetadataFileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataFileContentInput() {
    return this._idpMetadataFileContent;
  }

  // roles_key - computed: false, optional: true, required: false
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

  // sp_entity_id - computed: false, optional: false, required: true
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // subject_key - computed: false, optional: true, required: false
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
export interface MdbOpensearchClusterAuthSettings {
  /**
  * SAML authentication options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#saml MdbOpensearchCluster#saml}
  */
  readonly saml?: MdbOpensearchClusterAuthSettingsSaml;
}

export function mdbOpensearchClusterAuthSettingsToTerraform(struct?: MdbOpensearchClusterAuthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml: mdbOpensearchClusterAuthSettingsSamlToTerraform(struct!.saml),
  }
}


export function mdbOpensearchClusterAuthSettingsToHclTerraform(struct?: MdbOpensearchClusterAuthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml: {
      value: mdbOpensearchClusterAuthSettingsSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterAuthSettingsSaml",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterAuthSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterAuthSettings | cdktf.IResolvable | undefined) {
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

  // saml - computed: false, optional: true, required: false
  private _saml = new MdbOpensearchClusterAuthSettingsSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: MdbOpensearchClusterAuthSettingsSaml) {
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
export interface MdbOpensearchClusterHosts {
  /**
  * Sets whether the host should get a public IP address. Can be either `true` or `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#assign_public_ip MdbOpensearchCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * The ID of the subnet, to which the host belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#subnet_id MdbOpensearchCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function mdbOpensearchClusterHostsToTerraform(struct?: MdbOpensearchClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function mdbOpensearchClusterHostsToHclTerraform(struct?: MdbOpensearchClusterHosts): any {
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

export class MdbOpensearchClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbOpensearchClusterHosts | undefined {
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

  public set internalValue(value: MdbOpensearchClusterHosts | undefined) {
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

export class MdbOpensearchClusterHostsList extends cdktf.ComplexList {
  public internalValue? : MdbOpensearchClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): MdbOpensearchClusterHostsOutputReference {
    return new MdbOpensearchClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbOpensearchClusterConfigAccess {
  /**
  * Enable access to the [Data Transfer](https://yandex.cloud/docs/data-transfer) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#data_transfer MdbOpensearchCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Enable access to the [Cloud Functions](https://yandex.cloud/docs/functions) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#serverless MdbOpensearchCluster#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
}

export function mdbOpensearchClusterConfigAccessToTerraform(struct?: MdbOpensearchClusterConfigAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    serverless: cdktf.booleanToTerraform(struct!.serverless),
  }
}


export function mdbOpensearchClusterConfigAccessToHclTerraform(struct?: MdbOpensearchClusterConfigAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.dataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serverless: {
      value: cdktf.booleanToHclTerraform(struct!.serverless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransfer = this._dataTransfer;
    }
    if (this._serverless !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbOpensearchClusterConfigAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTransfer = undefined;
      this._serverless = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTransfer = value.dataTransfer;
      this._serverless = value.serverless;
    }
  }

  // data_transfer - computed: false, optional: true, required: false
  private _dataTransfer?: boolean | cdktf.IResolvable; 
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }
  public set dataTransfer(value: boolean | cdktf.IResolvable) {
    this._dataTransfer = value;
  }
  public resetDataTransfer() {
    this._dataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferInput() {
    return this._dataTransfer;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless?: boolean | cdktf.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktf.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
  }
}
export interface MdbOpensearchClusterConfigDashboardsNodeGroupsResources {
  /**
  * Volume of the storage available to a host, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_size MdbOpensearchCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of OpenSearch hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_type_id MdbOpensearchCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-opensearch/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#resource_preset_id MdbOpensearchCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToTerraform(struct?: MdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable): any {
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


export function mdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToHclTerraform(struct?: MdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable): any {
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

export class MdbOpensearchClusterConfigDashboardsNodeGroupsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterConfigDashboardsNodeGroupsResources | cdktf.IResolvable | undefined) {
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
export interface MdbOpensearchClusterConfigDashboardsNodeGroups {
  /**
  * Sets whether the hosts should get a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#assign_public_ip MdbOpensearchCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Number of hosts in this node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#hosts_count MdbOpensearchCluster#hosts_count}
  */
  readonly hostsCount: number;
  /**
  * Name of OpenSearch node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#name MdbOpensearchCluster#name}
  */
  readonly name: string;
  /**
  * A set of the subnets, to which the hosts belongs. The subnets must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#subnet_ids MdbOpensearchCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * A set of availability zones where hosts of node group may be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#zone_ids MdbOpensearchCluster#zone_ids}
  */
  readonly zoneIds: string[];
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#resources MdbOpensearchCluster#resources}
  */
  readonly resources: MdbOpensearchClusterConfigDashboardsNodeGroupsResources;
}

export function mdbOpensearchClusterConfigDashboardsNodeGroupsToTerraform(struct?: MdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable): any {
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
    resources: mdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToTerraform(struct!.resources),
  }
}


export function mdbOpensearchClusterConfigDashboardsNodeGroupsToHclTerraform(struct?: MdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable): any {
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
      value: mdbOpensearchClusterConfigDashboardsNodeGroupsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterConfigDashboardsNodeGroupsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterConfigDashboardsNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterConfigDashboardsNodeGroups | cdktf.IResolvable | undefined) {
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

  // zone_ids - computed: false, optional: false, required: true
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbOpensearchClusterConfigDashboardsNodeGroupsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbOpensearchClusterConfigDashboardsNodeGroupsResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class MdbOpensearchClusterConfigDashboardsNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : MdbOpensearchClusterConfigDashboardsNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): MdbOpensearchClusterConfigDashboardsNodeGroupsOutputReference {
    return new MdbOpensearchClusterConfigDashboardsNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbOpensearchClusterConfigDashboards {
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#node_groups MdbOpensearchCluster#node_groups}
  */
  readonly nodeGroups?: MdbOpensearchClusterConfigDashboardsNodeGroups[] | cdktf.IResolvable;
}

export function mdbOpensearchClusterConfigDashboardsToTerraform(struct?: MdbOpensearchClusterConfigDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_groups: cdktf.listMapper(mdbOpensearchClusterConfigDashboardsNodeGroupsToTerraform, true)(struct!.nodeGroups),
  }
}


export function mdbOpensearchClusterConfigDashboardsToHclTerraform(struct?: MdbOpensearchClusterConfigDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_groups: {
      value: cdktf.listMapperHcl(mdbOpensearchClusterConfigDashboardsNodeGroupsToHclTerraform, true)(struct!.nodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "MdbOpensearchClusterConfigDashboardsNodeGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterConfigDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigDashboards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterConfigDashboards | cdktf.IResolvable | undefined) {
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
  private _nodeGroups = new MdbOpensearchClusterConfigDashboardsNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: MdbOpensearchClusterConfigDashboardsNodeGroups[] | cdktf.IResolvable) {
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
export interface MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling {
  /**
  * The overall maximum for disk size that limit all autoscaling iterations. See the [documentation](https://yandex.cloud/en/docs/managed-opensearch/concepts/storage#auto-rescale) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_size_limit MdbOpensearchCluster#disk_size_limit}
  */
  readonly diskSizeLimit: number;
  /**
  * Threshold of storage usage (in percent) that triggers immediate automatic scaling of the storage. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#emergency_usage_threshold MdbOpensearchCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Threshold of storage usage (in percent) that triggers automatic scaling of the storage during the maintenance window. Zero value means disabled threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#planned_usage_threshold MdbOpensearchCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function mdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToTerraform(struct?: MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_limit: cdktf.numberToTerraform(struct!.diskSizeLimit),
    emergency_usage_threshold: cdktf.numberToTerraform(struct!.emergencyUsageThreshold),
    planned_usage_threshold: cdktf.numberToTerraform(struct!.plannedUsageThreshold),
  }
}


export function mdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToHclTerraform(struct?: MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeLimit = this._diskSizeLimit;
    }
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

  public set internalValue(value: MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeLimit = undefined;
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
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: true, optional: false, required: true
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
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
export interface MdbOpensearchClusterConfigOpensearchNodeGroupsResources {
  /**
  * Volume of the storage available to a host, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_size MdbOpensearchCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of OpenSearch hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_type_id MdbOpensearchCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-opensearch/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#resource_preset_id MdbOpensearchCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToTerraform(struct?: MdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable): any {
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


export function mdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToHclTerraform(struct?: MdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable): any {
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

export class MdbOpensearchClusterConfigOpensearchNodeGroupsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterConfigOpensearchNodeGroupsResources | cdktf.IResolvable | undefined) {
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
export interface MdbOpensearchClusterConfigOpensearchNodeGroups {
  /**
  * Sets whether the hosts should get a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#assign_public_ip MdbOpensearchCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Node group disk size autoscaling settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#disk_size_autoscaling MdbOpensearchCluster#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling;
  /**
  * Number of hosts in this node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#hosts_count MdbOpensearchCluster#hosts_count}
  */
  readonly hostsCount: number;
  /**
  * Name of OpenSearch node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#name MdbOpensearchCluster#name}
  */
  readonly name: string;
  /**
  * A set of OpenSearch roles assigned to hosts. Available roles are: `DATA`, `MANAGER`. Default: [`DATA`, `MANAGER`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#roles MdbOpensearchCluster#roles}
  */
  readonly roles: string[];
  /**
  * A set of the subnets, to which the hosts belongs. The subnets must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#subnet_ids MdbOpensearchCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * A set of availability zones where hosts of node group may be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#zone_ids MdbOpensearchCluster#zone_ids}
  */
  readonly zoneIds: string[];
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#resources MdbOpensearchCluster#resources}
  */
  readonly resources: MdbOpensearchClusterConfigOpensearchNodeGroupsResources;
}

export function mdbOpensearchClusterConfigOpensearchNodeGroupsToTerraform(struct?: MdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    disk_size_autoscaling: mdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToTerraform(struct!.diskSizeAutoscaling),
    hosts_count: cdktf.numberToTerraform(struct!.hostsCount),
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zoneIds),
    resources: mdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToTerraform(struct!.resources),
  }
}


export function mdbOpensearchClusterConfigOpensearchNodeGroupsToHclTerraform(struct?: MdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable): any {
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
      value: mdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingToHclTerraform(struct!.diskSizeAutoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling",
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
      value: mdbOpensearchClusterConfigOpensearchNodeGroupsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterConfigOpensearchNodeGroupsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterConfigOpensearchNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable | undefined {
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
    if (this._hostsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsCount = this._hostsCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: MdbOpensearchClusterConfigOpensearchNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._diskSizeAutoscaling.internalValue = undefined;
      this._hostsCount = undefined;
      this._name = undefined;
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
      this._hostsCount = value.hostsCount;
      this._name = value.name;
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
  private _diskSizeAutoscaling = new MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: MdbOpensearchClusterConfigOpensearchNodeGroupsDiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
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

  // zone_ids - computed: false, optional: false, required: true
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbOpensearchClusterConfigOpensearchNodeGroupsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbOpensearchClusterConfigOpensearchNodeGroupsResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class MdbOpensearchClusterConfigOpensearchNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : MdbOpensearchClusterConfigOpensearchNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): MdbOpensearchClusterConfigOpensearchNodeGroupsOutputReference {
    return new MdbOpensearchClusterConfigOpensearchNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbOpensearchClusterConfigOpensearch {
  /**
  * A set of requested OpenSearch plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#plugins MdbOpensearchCluster#plugins}
  */
  readonly plugins?: string[];
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#node_groups MdbOpensearchCluster#node_groups}
  */
  readonly nodeGroups?: MdbOpensearchClusterConfigOpensearchNodeGroups[] | cdktf.IResolvable;
}

export function mdbOpensearchClusterConfigOpensearchToTerraform(struct?: MdbOpensearchClusterConfigOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.plugins),
    node_groups: cdktf.listMapper(mdbOpensearchClusterConfigOpensearchNodeGroupsToTerraform, true)(struct!.nodeGroups),
  }
}


export function mdbOpensearchClusterConfigOpensearchToHclTerraform(struct?: MdbOpensearchClusterConfigOpensearch | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(mdbOpensearchClusterConfigOpensearchNodeGroupsToHclTerraform, true)(struct!.nodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "MdbOpensearchClusterConfigOpensearchNodeGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterConfigOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigOpensearch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterConfigOpensearch | cdktf.IResolvable | undefined) {
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
  private _nodeGroups = new MdbOpensearchClusterConfigOpensearchNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: MdbOpensearchClusterConfigOpensearchNodeGroups[] | cdktf.IResolvable) {
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
export interface MdbOpensearchClusterConfigA {
  /**
  * Password for admin user of OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#admin_password MdbOpensearchCluster#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Version of OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#version MdbOpensearchCluster#version}
  */
  readonly version?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#access MdbOpensearchCluster#access}
  */
  readonly access?: MdbOpensearchClusterConfigAccess;
  /**
  * dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#dashboards MdbOpensearchCluster#dashboards}
  */
  readonly dashboards?: MdbOpensearchClusterConfigDashboards;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#opensearch MdbOpensearchCluster#opensearch}
  */
  readonly opensearch?: MdbOpensearchClusterConfigOpensearch;
}

export function mdbOpensearchClusterConfigAToTerraform(struct?: MdbOpensearchClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    version: cdktf.stringToTerraform(struct!.version),
    access: mdbOpensearchClusterConfigAccessToTerraform(struct!.access),
    dashboards: mdbOpensearchClusterConfigDashboardsToTerraform(struct!.dashboards),
    opensearch: mdbOpensearchClusterConfigOpensearchToTerraform(struct!.opensearch),
  }
}


export function mdbOpensearchClusterConfigAToHclTerraform(struct?: MdbOpensearchClusterConfigA | cdktf.IResolvable): any {
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
    access: {
      value: mdbOpensearchClusterConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterConfigAccess",
    },
    dashboards: {
      value: mdbOpensearchClusterConfigDashboardsToHclTerraform(struct!.dashboards),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterConfigDashboards",
    },
    opensearch: {
      value: mdbOpensearchClusterConfigOpensearchToHclTerraform(struct!.opensearch),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbOpensearchClusterConfigOpensearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterConfigA | cdktf.IResolvable | undefined {
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
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
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

  public set internalValue(value: MdbOpensearchClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._version = undefined;
      this._access.internalValue = undefined;
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
      this._access.internalValue = value.access;
      this._dashboards.internalValue = value.dashboards;
      this._opensearch.internalValue = value.opensearch;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
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

  // access - computed: false, optional: true, required: false
  private _access = new MdbOpensearchClusterConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbOpensearchClusterConfigAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new MdbOpensearchClusterConfigDashboardsOutputReference(this, "dashboards");
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: MdbOpensearchClusterConfigDashboards) {
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
  private _opensearch = new MdbOpensearchClusterConfigOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: MdbOpensearchClusterConfigOpensearch) {
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
export interface MdbOpensearchClusterMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#day MdbOpensearchCluster#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#hour MdbOpensearchCluster#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#type MdbOpensearchCluster#type}
  */
  readonly type: string;
}

export function mdbOpensearchClusterMaintenanceWindowToTerraform(struct?: MdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mdbOpensearchClusterMaintenanceWindowToHclTerraform(struct?: MdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbOpensearchClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbOpensearchClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MdbOpensearchClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#create MdbOpensearchCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#delete MdbOpensearchCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#update MdbOpensearchCluster#update}
  */
  readonly update?: string;
}

export function mdbOpensearchClusterTimeoutsToTerraform(struct?: MdbOpensearchClusterTimeouts | cdktf.IResolvable): any {
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


export function mdbOpensearchClusterTimeoutsToHclTerraform(struct?: MdbOpensearchClusterTimeouts | cdktf.IResolvable): any {
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

export class MdbOpensearchClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbOpensearchClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbOpensearchClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster yandex_mdb_opensearch_cluster}
*/
export class MdbOpensearchCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_opensearch_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbOpensearchCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbOpensearchCluster to import
  * @param importFromId The id of the existing MdbOpensearchCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbOpensearchCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_opensearch_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_opensearch_cluster yandex_mdb_opensearch_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbOpensearchClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbOpensearchClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_opensearch_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
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
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceAccountId = config.serviceAccountId;
    this._config.internalValue = config.config;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings = new MdbOpensearchClusterAuthSettingsOutputReference(this, "auth_settings");
  public get authSettings() {
    return this._authSettings;
  }
  public putAuthSettings(value: MdbOpensearchClusterAuthSettings) {
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

  // disk_encryption_key_id - computed: false, optional: true, required: false
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

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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
  private _hosts = new MdbOpensearchClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // service_account_id - computed: false, optional: true, required: false
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
  private _config = new MdbOpensearchClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbOpensearchClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MdbOpensearchClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbOpensearchClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbOpensearchClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbOpensearchClusterTimeouts) {
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
      auth_settings: mdbOpensearchClusterAuthSettingsToTerraform(this._authSettings.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      config: mdbOpensearchClusterConfigAToTerraform(this._config.internalValue),
      maintenance_window: mdbOpensearchClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: mdbOpensearchClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_settings: {
        value: mdbOpensearchClusterAuthSettingsToHclTerraform(this._authSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbOpensearchClusterAuthSettings",
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
        value: mdbOpensearchClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbOpensearchClusterConfigA",
      },
      maintenance_window: {
        value: mdbOpensearchClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbOpensearchClusterMaintenanceWindow",
      },
      timeouts: {
        value: mdbOpensearchClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbOpensearchClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
