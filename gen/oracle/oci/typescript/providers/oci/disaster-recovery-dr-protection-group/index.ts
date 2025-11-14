// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisasterRecoveryDrProtectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#compartment_id DisasterRecoveryDrProtectionGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#defined_tags DisasterRecoveryDrProtectionGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#disassociate_trigger DisasterRecoveryDrProtectionGroup#disassociate_trigger}
  */
  readonly disassociateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#display_name DisasterRecoveryDrProtectionGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#freeform_tags DisasterRecoveryDrProtectionGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#association DisasterRecoveryDrProtectionGroup#association}
  */
  readonly association?: DisasterRecoveryDrProtectionGroupAssociation;
  /**
  * log_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#log_location DisasterRecoveryDrProtectionGroup#log_location}
  */
  readonly logLocation: DisasterRecoveryDrProtectionGroupLogLocation;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#members DisasterRecoveryDrProtectionGroup#members}
  */
  readonly members?: DisasterRecoveryDrProtectionGroupMembers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#timeouts DisasterRecoveryDrProtectionGroup#timeouts}
  */
  readonly timeouts?: DisasterRecoveryDrProtectionGroupTimeouts;
}
export interface DisasterRecoveryDrProtectionGroupAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#peer_id DisasterRecoveryDrProtectionGroup#peer_id}
  */
  readonly peerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#peer_region DisasterRecoveryDrProtectionGroup#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#role DisasterRecoveryDrProtectionGroup#role}
  */
  readonly role: string;
}

export function disasterRecoveryDrProtectionGroupAssociationToTerraform(struct?: DisasterRecoveryDrProtectionGroupAssociationOutputReference | DisasterRecoveryDrProtectionGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_id: cdktf.stringToTerraform(struct!.peerId),
    peer_region: cdktf.stringToTerraform(struct!.peerRegion),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function disasterRecoveryDrProtectionGroupAssociationToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupAssociationOutputReference | DisasterRecoveryDrProtectionGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_id: {
      value: cdktf.stringToHclTerraform(struct!.peerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_region: {
      value: cdktf.stringToHclTerraform(struct!.peerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupAssociationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerId = this._peerId;
    }
    if (this._peerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRegion = this._peerRegion;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._peerId = undefined;
      this._peerRegion = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._peerId = value.peerId;
      this._peerRegion = value.peerRegion;
      this._role = value.role;
    }
  }

  // peer_id - computed: true, optional: true, required: false
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  public resetPeerRegion() {
    this._peerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface DisasterRecoveryDrProtectionGroupLogLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}
  */
  readonly namespace: string;
}

export function disasterRecoveryDrProtectionGroupLogLocationToTerraform(struct?: DisasterRecoveryDrProtectionGroupLogLocationOutputReference | DisasterRecoveryDrProtectionGroupLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function disasterRecoveryDrProtectionGroupLogLocationToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupLogLocationOutputReference | DisasterRecoveryDrProtectionGroupLogLocation): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupLogLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupLogLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBackendSetMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_backend_set_name DisasterRecoveryDrProtectionGroup#destination_backend_set_name}
  */
  readonly destinationBackendSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#is_backend_set_for_non_movable DisasterRecoveryDrProtectionGroup#is_backend_set_for_non_movable}
  */
  readonly isBackendSetForNonMovable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_backend_set_name DisasterRecoveryDrProtectionGroup#source_backend_set_name}
  */
  readonly sourceBackendSetName?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_backend_set_name: cdktf.stringToTerraform(struct!.destinationBackendSetName),
    is_backend_set_for_non_movable: cdktf.booleanToTerraform(struct!.isBackendSetForNonMovable),
    source_backend_set_name: cdktf.stringToTerraform(struct!.sourceBackendSetName),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_backend_set_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationBackendSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_backend_set_for_non_movable: {
      value: cdktf.booleanToHclTerraform(struct!.isBackendSetForNonMovable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_backend_set_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceBackendSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBackendSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBackendSetName = this._destinationBackendSetName;
    }
    if (this._isBackendSetForNonMovable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackendSetForNonMovable = this._isBackendSetForNonMovable;
    }
    if (this._sourceBackendSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBackendSetName = this._sourceBackendSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBackendSetName = undefined;
      this._isBackendSetForNonMovable = undefined;
      this._sourceBackendSetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBackendSetName = value.destinationBackendSetName;
      this._isBackendSetForNonMovable = value.isBackendSetForNonMovable;
      this._sourceBackendSetName = value.sourceBackendSetName;
    }
  }

  // destination_backend_set_name - computed: true, optional: true, required: false
  private _destinationBackendSetName?: string; 
  public get destinationBackendSetName() {
    return this.getStringAttribute('destination_backend_set_name');
  }
  public set destinationBackendSetName(value: string) {
    this._destinationBackendSetName = value;
  }
  public resetDestinationBackendSetName() {
    this._destinationBackendSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBackendSetNameInput() {
    return this._destinationBackendSetName;
  }

  // is_backend_set_for_non_movable - computed: true, optional: true, required: false
  private _isBackendSetForNonMovable?: boolean | cdktf.IResolvable; 
  public get isBackendSetForNonMovable() {
    return this.getBooleanAttribute('is_backend_set_for_non_movable');
  }
  public set isBackendSetForNonMovable(value: boolean | cdktf.IResolvable) {
    this._isBackendSetForNonMovable = value;
  }
  public resetIsBackendSetForNonMovable() {
    this._isBackendSetForNonMovable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackendSetForNonMovableInput() {
    return this._isBackendSetForNonMovable;
  }

  // source_backend_set_name - computed: true, optional: true, required: false
  private _sourceBackendSetName?: string; 
  public get sourceBackendSetName() {
    return this.getStringAttribute('source_backend_set_name');
  }
  public set sourceBackendSetName(value: string) {
    this._sourceBackendSetName = value;
  }
  public resetSourceBackendSetName() {
    this._sourceBackendSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBackendSetNameInput() {
    return this._sourceBackendSetName;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#backup_schedule DisasterRecoveryDrProtectionGroup#backup_schedule}
  */
  readonly backupSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#exclude_namespaces DisasterRecoveryDrProtectionGroup#exclude_namespaces}
  */
  readonly excludeNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#image_replication_vault_secret_id DisasterRecoveryDrProtectionGroup#image_replication_vault_secret_id}
  */
  readonly imageReplicationVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#max_number_of_backups_retained DisasterRecoveryDrProtectionGroup#max_number_of_backups_retained}
  */
  readonly maxNumberOfBackupsRetained?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#namespaces DisasterRecoveryDrProtectionGroup#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#replicate_images DisasterRecoveryDrProtectionGroup#replicate_images}
  */
  readonly replicateImages?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBackupConfigToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference | DisasterRecoveryDrProtectionGroupMembersBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_schedule: cdktf.stringToTerraform(struct!.backupSchedule),
    exclude_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeNamespaces),
    image_replication_vault_secret_id: cdktf.stringToTerraform(struct!.imageReplicationVaultSecretId),
    max_number_of_backups_retained: cdktf.numberToTerraform(struct!.maxNumberOfBackupsRetained),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    replicate_images: cdktf.stringToTerraform(struct!.replicateImages),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBackupConfigToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference | DisasterRecoveryDrProtectionGroupMembersBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_schedule: {
      value: cdktf.stringToHclTerraform(struct!.backupSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_replication_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.imageReplicationVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_number_of_backups_retained: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfBackupsRetained),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replicate_images: {
      value: cdktf.stringToHclTerraform(struct!.replicateImages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSchedule = this._backupSchedule;
    }
    if (this._excludeNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespaces = this._excludeNamespaces;
    }
    if (this._imageReplicationVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReplicationVaultSecretId = this._imageReplicationVaultSecretId;
    }
    if (this._maxNumberOfBackupsRetained !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfBackupsRetained = this._maxNumberOfBackupsRetained;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._replicateImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicateImages = this._replicateImages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupSchedule = undefined;
      this._excludeNamespaces = undefined;
      this._imageReplicationVaultSecretId = undefined;
      this._maxNumberOfBackupsRetained = undefined;
      this._namespaces = undefined;
      this._replicateImages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupSchedule = value.backupSchedule;
      this._excludeNamespaces = value.excludeNamespaces;
      this._imageReplicationVaultSecretId = value.imageReplicationVaultSecretId;
      this._maxNumberOfBackupsRetained = value.maxNumberOfBackupsRetained;
      this._namespaces = value.namespaces;
      this._replicateImages = value.replicateImages;
    }
  }

  // backup_schedule - computed: true, optional: true, required: false
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
    this._backupSchedule = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // exclude_namespaces - computed: true, optional: true, required: false
  private _excludeNamespaces?: string[]; 
  public get excludeNamespaces() {
    return this.getListAttribute('exclude_namespaces');
  }
  public set excludeNamespaces(value: string[]) {
    this._excludeNamespaces = value;
  }
  public resetExcludeNamespaces() {
    this._excludeNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespacesInput() {
    return this._excludeNamespaces;
  }

  // image_replication_vault_secret_id - computed: true, optional: true, required: false
  private _imageReplicationVaultSecretId?: string; 
  public get imageReplicationVaultSecretId() {
    return this.getStringAttribute('image_replication_vault_secret_id');
  }
  public set imageReplicationVaultSecretId(value: string) {
    this._imageReplicationVaultSecretId = value;
  }
  public resetImageReplicationVaultSecretId() {
    this._imageReplicationVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReplicationVaultSecretIdInput() {
    return this._imageReplicationVaultSecretId;
  }

  // max_number_of_backups_retained - computed: true, optional: true, required: false
  private _maxNumberOfBackupsRetained?: number; 
  public get maxNumberOfBackupsRetained() {
    return this.getNumberAttribute('max_number_of_backups_retained');
  }
  public set maxNumberOfBackupsRetained(value: number) {
    this._maxNumberOfBackupsRetained = value;
  }
  public resetMaxNumberOfBackupsRetained() {
    this._maxNumberOfBackupsRetained = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfBackupsRetainedInput() {
    return this._maxNumberOfBackupsRetained;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // replicate_images - computed: true, optional: true, required: false
  private _replicateImages?: string; 
  public get replicateImages() {
    return this.getStringAttribute('replicate_images');
  }
  public set replicateImages(value: string) {
    this._replicateImages = value;
  }
  public resetReplicateImages() {
    this._replicateImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateImagesInput() {
    return this._replicateImages;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBackupLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}
  */
  readonly namespace?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBackupLocationToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference | DisasterRecoveryDrProtectionGroupMembersBackupLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBackupLocationToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference | DisasterRecoveryDrProtectionGroupMembersBackupLocation): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBackupLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBackupLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}
  */
  readonly blockVolumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}
  */
  readonly volumeAttachmentReferenceInstanceId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_id: cdktf.stringToTerraform(struct!.blockVolumeId),
    volume_attachment_reference_instance_id: cdktf.stringToTerraform(struct!.volumeAttachmentReferenceInstanceId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attachment_reference_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttachmentReferenceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeId = this._blockVolumeId;
    }
    if (this._volumeAttachmentReferenceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttachmentReferenceInstanceId = this._volumeAttachmentReferenceInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockVolumeId = undefined;
      this._volumeAttachmentReferenceInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockVolumeId = value.blockVolumeId;
      this._volumeAttachmentReferenceInstanceId = value.volumeAttachmentReferenceInstanceId;
    }
  }

  // block_volume_id - computed: true, optional: true, required: false
  private _blockVolumeId?: string; 
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }
  public set blockVolumeId(value: string) {
    this._blockVolumeId = value;
  }
  public resetBlockVolumeId() {
    this._blockVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeIdInput() {
    return this._blockVolumeId;
  }

  // volume_attachment_reference_instance_id - computed: true, optional: true, required: false
  private _volumeAttachmentReferenceInstanceId?: string; 
  public get volumeAttachmentReferenceInstanceId() {
    return this.getStringAttribute('volume_attachment_reference_instance_id');
  }
  public set volumeAttachmentReferenceInstanceId(value: string) {
    this._volumeAttachmentReferenceInstanceId = value;
  }
  public resetVolumeAttachmentReferenceInstanceId() {
    this._volumeAttachmentReferenceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttachmentReferenceInstanceIdInput() {
    return this._volumeAttachmentReferenceInstanceId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}
  */
  readonly mountPoint?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPoint = value.mountPoint;
    }
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations {
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#attachments DisasterRecoveryDrProtectionGroup#attachments}
  */
  readonly attachments?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments[] | cdktf.IResolvable;
  /**
  * mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mounts DisasterRecoveryDrProtectionGroup#mounts}
  */
  readonly mounts?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts[] | cdktf.IResolvable;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachments: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsToTerraform, true)(struct!.attachments),
    mounts: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsToTerraform, true)(struct!.mounts),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachments: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsToHclTerraform, true)(struct!.attachments),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsList",
    },
    mounts: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsToHclTerraform, true)(struct!.mounts),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachments = this._attachments?.internalValue;
    }
    if (this._mounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mounts = this._mounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachments.internalValue = undefined;
      this._mounts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachments.internalValue = value.attachments;
      this._mounts.internalValue = value.mounts;
    }
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#volume_attachment_reference_instance_id DisasterRecoveryDrProtectionGroup#volume_attachment_reference_instance_id}
  */
  readonly volumeAttachmentReferenceInstanceId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_attachment_reference_instance_id: cdktf.stringToTerraform(struct!.volumeAttachmentReferenceInstanceId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_attachment_reference_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttachmentReferenceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeAttachmentReferenceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttachmentReferenceInstanceId = this._volumeAttachmentReferenceInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._volumeAttachmentReferenceInstanceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._volumeAttachmentReferenceInstanceId = value.volumeAttachmentReferenceInstanceId;
    }
  }

  // volume_attachment_reference_instance_id - computed: true, optional: true, required: false
  private _volumeAttachmentReferenceInstanceId?: string; 
  public get volumeAttachmentReferenceInstanceId() {
    return this.getStringAttribute('volume_attachment_reference_instance_id');
  }
  public set volumeAttachmentReferenceInstanceId(value: string) {
    this._volumeAttachmentReferenceInstanceId = value;
  }
  public resetVolumeAttachmentReferenceInstanceId() {
    this._volumeAttachmentReferenceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttachmentReferenceInstanceIdInput() {
    return this._volumeAttachmentReferenceInstanceId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}
  */
  readonly mountPoint?: string;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountPoint = value.mountPoint;
    }
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#block_volume_id DisasterRecoveryDrProtectionGroup#block_volume_id}
  */
  readonly blockVolumeId?: string;
  /**
  * attachment_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#attachment_details DisasterRecoveryDrProtectionGroup#attachment_details}
  */
  readonly attachmentDetails?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails;
  /**
  * mount_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}
  */
  readonly mountDetails?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails;
}

export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volume_id: cdktf.stringToTerraform(struct!.blockVolumeId),
    attachment_details: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToTerraform(struct!.attachmentDetails),
    mount_details: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToTerraform(struct!.mountDetails),
  }
}


export function disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.blockVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attachment_details: {
      value: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsToHclTerraform(struct!.attachmentDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList",
    },
    mount_details: {
      value: disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsToHclTerraform(struct!.mountDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeId = this._blockVolumeId;
    }
    if (this._attachmentDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentDetails = this._attachmentDetails?.internalValue;
    }
    if (this._mountDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDetails = this._mountDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockVolumeId = undefined;
      this._attachmentDetails.internalValue = undefined;
      this._mountDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockVolumeId = value.blockVolumeId;
      this._attachmentDetails.internalValue = value.attachmentDetails;
      this._mountDetails.internalValue = value.mountDetails;
    }
  }

  // block_volume_id - computed: true, optional: true, required: false
  private _blockVolumeId?: string; 
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }
  public set blockVolumeId(value: string) {
    this._blockVolumeId = value;
  }
  public resetBlockVolumeId() {
    this._blockVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeIdInput() {
    return this._blockVolumeId;
  }

  // attachment_details - computed: false, optional: true, required: false
  private _attachmentDetails = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(this, "attachment_details");
  public get attachmentDetails() {
    return this._attachmentDetails;
  }
  public putAttachmentDetails(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails) {
    this._attachmentDetails.internalValue = value;
  }
  public resetAttachmentDetails() {
    this._attachmentDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentDetailsInput() {
    return this._attachmentDetails.internalValue;
  }

  // mount_details - computed: false, optional: true, required: false
  private _mountDetails = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(this, "mount_details");
  public get mountDetails() {
    return this._mountDetails;
  }
  public putMountDetails(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails) {
    this._mountDetails.internalValue = value;
  }
  public resetMountDetails() {
    this._mountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDetailsInput() {
    return this._mountDetails.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#encryption_key_id DisasterRecoveryDrProtectionGroup#encryption_key_id}
  */
  readonly encryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#vault_id DisasterRecoveryDrProtectionGroup#vault_id}
  */
  readonly vaultId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersCommonDestinationKeyToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference | DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key_id: cdktf.stringToTerraform(struct!.encryptionKeyId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersCommonDestinationKeyToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference | DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key_id: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyId = this._encryptionKeyId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKeyId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKeyId = value.encryptionKeyId;
      this._vaultId = value.vaultId;
    }
  }

  // encryption_key_id - computed: true, optional: true, required: false
  private _encryptionKeyId?: string; 
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }
  public set encryptionKeyId(value: string) {
    this._encryptionKeyId = value;
  }
  public resetEncryptionKeyId() {
    this._encryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyIdInput() {
    return this._encryptionKeyId;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}
  */
  readonly passwordVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#username DisasterRecoveryDrProtectionGroup#username}
  */
  readonly username?: string;
}

export function disasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_vault_secret_id: cdktf.stringToTerraform(struct!.passwordVaultSecretId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function disasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVaultSecretId = this._passwordVaultSecretId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordVaultSecretId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordVaultSecretId = value.passwordVaultSecretId;
      this._username = value.username;
    }
  }

  // password_vault_secret_id - computed: true, optional: true, required: false
  private _passwordVaultSecretId?: string; 
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }
  public set passwordVaultSecretId(value: string) {
    this._passwordVaultSecretId = value;
  }
  public resetPasswordVaultSecretId() {
    this._passwordVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVaultSecretIdInput() {
    return this._passwordVaultSecretId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}
  */
  readonly passwordVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#username DisasterRecoveryDrProtectionGroup#username}
  */
  readonly username?: string;
}

export function disasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_vault_secret_id: cdktf.stringToTerraform(struct!.passwordVaultSecretId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function disasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVaultSecretId = this._passwordVaultSecretId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordVaultSecretId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordVaultSecretId = value.passwordVaultSecretId;
      this._username = value.username;
    }
  }

  // password_vault_secret_id - computed: true, optional: true, required: false
  private _passwordVaultSecretId?: string; 
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }
  public set passwordVaultSecretId(value: string) {
    this._passwordVaultSecretId = value;
  }
  public resetPasswordVaultSecretId() {
    this._passwordVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVaultSecretIdInput() {
    return this._passwordVaultSecretId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#encryption_key_id DisasterRecoveryDrProtectionGroup#encryption_key_id}
  */
  readonly encryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#vault_id DisasterRecoveryDrProtectionGroup#vault_id}
  */
  readonly vaultId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference | DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key_id: cdktf.stringToTerraform(struct!.encryptionKeyId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference | DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key_id: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyId = this._encryptionKeyId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKeyId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKeyId = value.encryptionKeyId;
      this._vaultId = value.vaultId;
    }
  }

  // encryption_key_id - computed: true, optional: true, required: false
  private _encryptionKeyId?: string; 
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }
  public set encryptionKeyId(value: string) {
    this._encryptionKeyId = value;
  }
  public resetEncryptionKeyId() {
    this._encryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyIdInput() {
    return this._encryptionKeyId;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersExportMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_mount_target_id DisasterRecoveryDrProtectionGroup#destination_mount_target_id}
  */
  readonly destinationMountTargetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#export_id DisasterRecoveryDrProtectionGroup#export_id}
  */
  readonly exportId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersExportMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_mount_target_id: cdktf.stringToTerraform(struct!.destinationMountTargetId),
    export_id: cdktf.stringToTerraform(struct!.exportId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersExportMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationMountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_id: {
      value: cdktf.stringToHclTerraform(struct!.exportId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationMountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMountTargetId = this._destinationMountTargetId;
    }
    if (this._exportId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportId = this._exportId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersExportMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationMountTargetId = undefined;
      this._exportId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationMountTargetId = value.destinationMountTargetId;
      this._exportId = value.exportId;
    }
  }

  // destination_mount_target_id - computed: true, optional: true, required: false
  private _destinationMountTargetId?: string; 
  public get destinationMountTargetId() {
    return this.getStringAttribute('destination_mount_target_id');
  }
  public set destinationMountTargetId(value: string) {
    this._destinationMountTargetId = value;
  }
  public resetDestinationMountTargetId() {
    this._destinationMountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMountTargetIdInput() {
    return this._destinationMountTargetId;
  }

  // export_id - computed: true, optional: true, required: false
  private _exportId?: string; 
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
  public set exportId(value: string) {
    this._exportId = value;
  }
  public resetExportId() {
    this._exportId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIdInput() {
    return this._exportId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersExportMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersExportMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}
  */
  readonly mountTargetId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountTargetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountTargetId = value.mountTargetId;
    }
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}
  */
  readonly mountTargetId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference | DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountTargetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountTargetId = value.mountTargetId;
    }
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersFileSystemOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#export_path DisasterRecoveryDrProtectionGroup#export_path}
  */
  readonly exportPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_point DisasterRecoveryDrProtectionGroup#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_target_id DisasterRecoveryDrProtectionGroup#mount_target_id}
  */
  readonly mountTargetId?: string;
  /**
  * mount_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#mount_details DisasterRecoveryDrProtectionGroup#mount_details}
  */
  readonly mountDetails?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails;
  /**
  * unmount_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#unmount_details DisasterRecoveryDrProtectionGroup#unmount_details}
  */
  readonly unmountDetails?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails;
}

export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_path: cdktf.stringToTerraform(struct!.exportPath),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
    mount_details: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToTerraform(struct!.mountDetails),
    unmount_details: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToTerraform(struct!.unmountDetails),
  }
}


export function disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_path: {
      value: cdktf.stringToHclTerraform(struct!.exportPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_details: {
      value: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsToHclTerraform(struct!.mountDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList",
    },
    unmount_details: {
      value: disasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsToHclTerraform(struct!.unmountDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPath = this._exportPath;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    if (this._mountDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDetails = this._mountDetails?.internalValue;
    }
    if (this._unmountDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmountDetails = this._unmountDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportPath = undefined;
      this._mountPoint = undefined;
      this._mountTargetId = undefined;
      this._mountDetails.internalValue = undefined;
      this._unmountDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportPath = value.exportPath;
      this._mountPoint = value.mountPoint;
      this._mountTargetId = value.mountTargetId;
      this._mountDetails.internalValue = value.mountDetails;
      this._unmountDetails.internalValue = value.unmountDetails;
    }
  }

  // export_path - computed: true, optional: true, required: false
  private _exportPath?: string; 
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }
  public set exportPath(value: string) {
    this._exportPath = value;
  }
  public resetExportPath() {
    this._exportPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPathInput() {
    return this._exportPath;
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }

  // mount_details - computed: false, optional: true, required: false
  private _mountDetails = new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(this, "mount_details");
  public get mountDetails() {
    return this._mountDetails;
  }
  public putMountDetails(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails) {
    this._mountDetails.internalValue = value;
  }
  public resetMountDetails() {
    this._mountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDetailsInput() {
    return this._mountDetails.internalValue;
  }

  // unmount_details - computed: false, optional: true, required: false
  private _unmountDetails = new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(this, "unmount_details");
  public get unmountDetails() {
    return this._unmountDetails;
  }
  public putUnmountDetails(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails) {
    this._unmountDetails.internalValue = value;
  }
  public resetUnmountDetails() {
    this._unmountDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmountDetailsInput() {
    return this._unmountDetails.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}
  */
  readonly destinationLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_load_balancer_id DisasterRecoveryDrProtectionGroup#source_load_balancer_id}
  */
  readonly sourceLoadBalancerId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_load_balancer_id: cdktf.stringToTerraform(struct!.destinationLoadBalancerId),
    source_load_balancer_id: cdktf.stringToTerraform(struct!.sourceLoadBalancerId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLoadBalancerId = this._destinationLoadBalancerId;
    }
    if (this._sourceLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLoadBalancerId = this._sourceLoadBalancerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationLoadBalancerId = undefined;
      this._sourceLoadBalancerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationLoadBalancerId = value.destinationLoadBalancerId;
      this._sourceLoadBalancerId = value.sourceLoadBalancerId;
    }
  }

  // destination_load_balancer_id - computed: true, optional: true, required: false
  private _destinationLoadBalancerId?: string; 
  public get destinationLoadBalancerId() {
    return this.getStringAttribute('destination_load_balancer_id');
  }
  public set destinationLoadBalancerId(value: string) {
    this._destinationLoadBalancerId = value;
  }
  public resetDestinationLoadBalancerId() {
    this._destinationLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLoadBalancerIdInput() {
    return this._destinationLoadBalancerId;
  }

  // source_load_balancer_id - computed: true, optional: true, required: false
  private _sourceLoadBalancerId?: string; 
  public get sourceLoadBalancerId() {
    return this.getStringAttribute('source_load_balancer_id');
  }
  public set sourceLoadBalancerId(value: string) {
    this._sourceLoadBalancerId = value;
  }
  public resetSourceLoadBalancerId() {
    this._sourceLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLoadBalancerIdInput() {
    return this._sourceLoadBalancerId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#maximum DisasterRecoveryDrProtectionGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#minimum DisasterRecoveryDrProtectionGroup#minimum}
  */
  readonly minimum?: number;
}

export function disasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}


export function disasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
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

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}
  */
  readonly destinationNetworkLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_network_load_balancer_id DisasterRecoveryDrProtectionGroup#source_network_load_balancer_id}
  */
  readonly sourceNetworkLoadBalancerId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_network_load_balancer_id: cdktf.stringToTerraform(struct!.destinationNetworkLoadBalancerId),
    source_network_load_balancer_id: cdktf.stringToTerraform(struct!.sourceNetworkLoadBalancerId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_network_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationNetworkLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_network_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceNetworkLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNetworkLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNetworkLoadBalancerId = this._destinationNetworkLoadBalancerId;
    }
    if (this._sourceNetworkLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNetworkLoadBalancerId = this._sourceNetworkLoadBalancerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationNetworkLoadBalancerId = undefined;
      this._sourceNetworkLoadBalancerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationNetworkLoadBalancerId = value.destinationNetworkLoadBalancerId;
      this._sourceNetworkLoadBalancerId = value.sourceNetworkLoadBalancerId;
    }
  }

  // destination_network_load_balancer_id - computed: true, optional: true, required: false
  private _destinationNetworkLoadBalancerId?: string; 
  public get destinationNetworkLoadBalancerId() {
    return this.getStringAttribute('destination_network_load_balancer_id');
  }
  public set destinationNetworkLoadBalancerId(value: string) {
    this._destinationNetworkLoadBalancerId = value;
  }
  public resetDestinationNetworkLoadBalancerId() {
    this._destinationNetworkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkLoadBalancerIdInput() {
    return this._destinationNetworkLoadBalancerId;
  }

  // source_network_load_balancer_id - computed: true, optional: true, required: false
  private _sourceNetworkLoadBalancerId?: string; 
  public get sourceNetworkLoadBalancerId() {
    return this.getStringAttribute('source_network_load_balancer_id');
  }
  public set sourceNetworkLoadBalancerId(value: string) {
    this._sourceNetworkLoadBalancerId = value;
  }
  public resetSourceNetworkLoadBalancerId() {
    this._sourceNetworkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkLoadBalancerIdInput() {
    return this._sourceNetworkLoadBalancerId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#encryption_key_id DisasterRecoveryDrProtectionGroup#encryption_key_id}
  */
  readonly encryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#vault_id DisasterRecoveryDrProtectionGroup#vault_id}
  */
  readonly vaultId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference | DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key_id: cdktf.stringToTerraform(struct!.encryptionKeyId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference | DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key_id: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyId = this._encryptionKeyId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKeyId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKeyId = value.encryptionKeyId;
      this._vaultId = value.vaultId;
    }
  }

  // encryption_key_id - computed: true, optional: true, required: false
  private _encryptionKeyId?: string; 
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }
  public set encryptionKeyId(value: string) {
    this._encryptionKeyId = value;
  }
  public resetEncryptionKeyId() {
    this._encryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyIdInput() {
    return this._encryptionKeyId;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_volume_id DisasterRecoveryDrProtectionGroup#source_volume_id}
  */
  readonly sourceVolumeId?: string;
  /**
  * destination_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_encryption_key DisasterRecoveryDrProtectionGroup#destination_encryption_key}
  */
  readonly destinationEncryptionKey?: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey;
}

export function disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_volume_id: cdktf.stringToTerraform(struct!.sourceVolumeId),
    destination_encryption_key: disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyToTerraform(struct!.destinationEncryptionKey),
  }
}


export function disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_encryption_key: {
      value: disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyToHclTerraform(struct!.destinationEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVolumeId = this._sourceVolumeId;
    }
    if (this._destinationEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEncryptionKey = this._destinationEncryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceVolumeId = undefined;
      this._destinationEncryptionKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceVolumeId = value.sourceVolumeId;
      this._destinationEncryptionKey.internalValue = value.destinationEncryptionKey;
    }
  }

  // source_volume_id - computed: true, optional: true, required: false
  private _sourceVolumeId?: string; 
  public get sourceVolumeId() {
    return this.getStringAttribute('source_volume_id');
  }
  public set sourceVolumeId(value: string) {
    this._sourceVolumeId = value;
  }
  public resetSourceVolumeId() {
    this._sourceVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeIdInput() {
    return this._sourceVolumeId;
  }

  // destination_encryption_key - computed: false, optional: true, required: false
  private _destinationEncryptionKey = new DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKeyOutputReference(this, "destination_encryption_key");
  public get destinationEncryptionKey() {
    return this._destinationEncryptionKey;
  }
  public putDestinationEncryptionKey(value: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsDestinationEncryptionKey) {
    this._destinationEncryptionKey.internalValue = value;
  }
  public resetDestinationEncryptionKey() {
    this._destinationEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionKeyInput() {
    return this._destinationEncryptionKey.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersVaultMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_vault_id DisasterRecoveryDrProtectionGroup#destination_vault_id}
  */
  readonly destinationVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_vault_id DisasterRecoveryDrProtectionGroup#source_vault_id}
  */
  readonly sourceVaultId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersVaultMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVaultMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_vault_id: cdktf.stringToTerraform(struct!.destinationVaultId),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersVaultMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVaultMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersVaultMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersVaultMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVaultId = this._destinationVaultId;
    }
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersVaultMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationVaultId = undefined;
      this._sourceVaultId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationVaultId = value.destinationVaultId;
      this._sourceVaultId = value.sourceVaultId;
    }
  }

  // destination_vault_id - computed: true, optional: true, required: false
  private _destinationVaultId?: string; 
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }
  public set destinationVaultId(value: string) {
    this._destinationVaultId = value;
  }
  public resetDestinationVaultId() {
    this._destinationVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVaultIdInput() {
    return this._destinationVaultId;
  }

  // source_vault_id - computed: true, optional: true, required: false
  private _sourceVaultId?: string; 
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
  public set sourceVaultId(value: string) {
    this._sourceVaultId = value;
  }
  public resetSourceVaultId() {
    this._sourceVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultIdInput() {
    return this._sourceVaultId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersVaultMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersVaultMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersVaultMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersVaultMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#id DisasterRecoveryDrProtectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#maximum DisasterRecoveryDrProtectionGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#minimum DisasterRecoveryDrProtectionGroup#minimum}
  */
  readonly minimum?: number;
}

export function disasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}


export function disasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
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

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersVnicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}
  */
  readonly destinationNsgIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}
  */
  readonly destinationSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}
  */
  readonly sourceVnicId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersVnicMappingToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_nsg_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationNsgIdList),
    destination_subnet_id: cdktf.stringToTerraform(struct!.destinationSubnetId),
    source_vnic_id: cdktf.stringToTerraform(struct!.sourceVnicId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersVnicMappingToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_nsg_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationNsgIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vnic_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVnicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNsgIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNsgIdList = this._destinationNsgIdList;
    }
    if (this._destinationSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubnetId = this._destinationSubnetId;
    }
    if (this._sourceVnicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVnicId = this._sourceVnicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersVnicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = undefined;
      this._destinationSubnetId = undefined;
      this._sourceVnicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = value.destinationNsgIdList;
      this._destinationSubnetId = value.destinationSubnetId;
      this._sourceVnicId = value.sourceVnicId;
    }
  }

  // destination_nsg_id_list - computed: true, optional: true, required: false
  private _destinationNsgIdList?: string[]; 
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }
  public set destinationNsgIdList(value: string[]) {
    this._destinationNsgIdList = value;
  }
  public resetDestinationNsgIdList() {
    this._destinationNsgIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNsgIdListInput() {
    return this._destinationNsgIdList;
  }

  // destination_subnet_id - computed: true, optional: true, required: false
  private _destinationSubnetId?: string; 
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }
  public set destinationSubnetId(value: string) {
    this._destinationSubnetId = value;
  }
  public resetDestinationSubnetId() {
    this._destinationSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubnetIdInput() {
    return this._destinationSubnetId;
  }

  // source_vnic_id - computed: true, optional: true, required: false
  private _sourceVnicId?: string; 
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
  public set sourceVnicId(value: string) {
    this._sourceVnicId = value;
  }
  public resetSourceVnicId() {
    this._sourceVnicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVnicIdInput() {
    return this._sourceVnicId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersVnicMapping[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembersVnicMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_nsg_id_list DisasterRecoveryDrProtectionGroup#destination_nsg_id_list}
  */
  readonly destinationNsgIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_address DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_address}
  */
  readonly destinationPrimaryPrivateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_primary_private_ip_hostname_label DisasterRecoveryDrProtectionGroup#destination_primary_private_ip_hostname_label}
  */
  readonly destinationPrimaryPrivateIpHostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_reserved_public_ip_id DisasterRecoveryDrProtectionGroup#destination_reserved_public_ip_id}
  */
  readonly destinationReservedPublicIpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_subnet_id DisasterRecoveryDrProtectionGroup#destination_subnet_id}
  */
  readonly destinationSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_vnic_id DisasterRecoveryDrProtectionGroup#source_vnic_id}
  */
  readonly sourceVnicId?: string;
}

export function disasterRecoveryDrProtectionGroupMembersVnicMappingsToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_nsg_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationNsgIdList),
    destination_primary_private_ip_address: cdktf.stringToTerraform(struct!.destinationPrimaryPrivateIpAddress),
    destination_primary_private_ip_hostname_label: cdktf.stringToTerraform(struct!.destinationPrimaryPrivateIpHostnameLabel),
    destination_reserved_public_ip_id: cdktf.stringToTerraform(struct!.destinationReservedPublicIpId),
    destination_subnet_id: cdktf.stringToTerraform(struct!.destinationSubnetId),
    source_vnic_id: cdktf.stringToTerraform(struct!.sourceVnicId),
  }
}


export function disasterRecoveryDrProtectionGroupMembersVnicMappingsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_nsg_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationNsgIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_primary_private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrimaryPrivateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_primary_private_ip_hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrimaryPrivateIpHostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_reserved_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationReservedPublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vnic_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVnicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNsgIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNsgIdList = this._destinationNsgIdList;
    }
    if (this._destinationPrimaryPrivateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrimaryPrivateIpAddress = this._destinationPrimaryPrivateIpAddress;
    }
    if (this._destinationPrimaryPrivateIpHostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrimaryPrivateIpHostnameLabel = this._destinationPrimaryPrivateIpHostnameLabel;
    }
    if (this._destinationReservedPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationReservedPublicIpId = this._destinationReservedPublicIpId;
    }
    if (this._destinationSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubnetId = this._destinationSubnetId;
    }
    if (this._sourceVnicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVnicId = this._sourceVnicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembersVnicMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = undefined;
      this._destinationPrimaryPrivateIpAddress = undefined;
      this._destinationPrimaryPrivateIpHostnameLabel = undefined;
      this._destinationReservedPublicIpId = undefined;
      this._destinationSubnetId = undefined;
      this._sourceVnicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationNsgIdList = value.destinationNsgIdList;
      this._destinationPrimaryPrivateIpAddress = value.destinationPrimaryPrivateIpAddress;
      this._destinationPrimaryPrivateIpHostnameLabel = value.destinationPrimaryPrivateIpHostnameLabel;
      this._destinationReservedPublicIpId = value.destinationReservedPublicIpId;
      this._destinationSubnetId = value.destinationSubnetId;
      this._sourceVnicId = value.sourceVnicId;
    }
  }

  // destination_nsg_id_list - computed: true, optional: true, required: false
  private _destinationNsgIdList?: string[]; 
  public get destinationNsgIdList() {
    return this.getListAttribute('destination_nsg_id_list');
  }
  public set destinationNsgIdList(value: string[]) {
    this._destinationNsgIdList = value;
  }
  public resetDestinationNsgIdList() {
    this._destinationNsgIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNsgIdListInput() {
    return this._destinationNsgIdList;
  }

  // destination_primary_private_ip_address - computed: true, optional: true, required: false
  private _destinationPrimaryPrivateIpAddress?: string; 
  public get destinationPrimaryPrivateIpAddress() {
    return this.getStringAttribute('destination_primary_private_ip_address');
  }
  public set destinationPrimaryPrivateIpAddress(value: string) {
    this._destinationPrimaryPrivateIpAddress = value;
  }
  public resetDestinationPrimaryPrivateIpAddress() {
    this._destinationPrimaryPrivateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrimaryPrivateIpAddressInput() {
    return this._destinationPrimaryPrivateIpAddress;
  }

  // destination_primary_private_ip_hostname_label - computed: true, optional: true, required: false
  private _destinationPrimaryPrivateIpHostnameLabel?: string; 
  public get destinationPrimaryPrivateIpHostnameLabel() {
    return this.getStringAttribute('destination_primary_private_ip_hostname_label');
  }
  public set destinationPrimaryPrivateIpHostnameLabel(value: string) {
    this._destinationPrimaryPrivateIpHostnameLabel = value;
  }
  public resetDestinationPrimaryPrivateIpHostnameLabel() {
    this._destinationPrimaryPrivateIpHostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrimaryPrivateIpHostnameLabelInput() {
    return this._destinationPrimaryPrivateIpHostnameLabel;
  }

  // destination_reserved_public_ip_id - computed: true, optional: true, required: false
  private _destinationReservedPublicIpId?: string; 
  public get destinationReservedPublicIpId() {
    return this.getStringAttribute('destination_reserved_public_ip_id');
  }
  public set destinationReservedPublicIpId(value: string) {
    this._destinationReservedPublicIpId = value;
  }
  public resetDestinationReservedPublicIpId() {
    this._destinationReservedPublicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationReservedPublicIpIdInput() {
    return this._destinationReservedPublicIpId;
  }

  // destination_subnet_id - computed: true, optional: true, required: false
  private _destinationSubnetId?: string; 
  public get destinationSubnetId() {
    return this.getStringAttribute('destination_subnet_id');
  }
  public set destinationSubnetId(value: string) {
    this._destinationSubnetId = value;
  }
  public resetDestinationSubnetId() {
    this._destinationSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubnetIdInput() {
    return this._destinationSubnetId;
  }

  // source_vnic_id - computed: true, optional: true, required: false
  private _sourceVnicId?: string; 
  public get sourceVnicId() {
    return this.getStringAttribute('source_vnic_id');
  }
  public set sourceVnicId(value: string) {
    this._sourceVnicId = value;
  }
  public resetSourceVnicId() {
    this._sourceVnicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVnicIdInput() {
    return this._sourceVnicId;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersVnicMappingsList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembersVnicMappings[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#autonomous_database_standby_type_for_dr_drills DisasterRecoveryDrProtectionGroup#autonomous_database_standby_type_for_dr_drills}
  */
  readonly autonomousDatabaseStandbyTypeForDrDrills?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#bucket DisasterRecoveryDrProtectionGroup#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#connection_string_type DisasterRecoveryDrProtectionGroup#connection_string_type}
  */
  readonly connectionStringType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_availability_domain DisasterRecoveryDrProtectionGroup#destination_availability_domain}
  */
  readonly destinationAvailabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_backup_policy_id DisasterRecoveryDrProtectionGroup#destination_backup_policy_id}
  */
  readonly destinationBackupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_capacity_reservation_id DisasterRecoveryDrProtectionGroup#destination_capacity_reservation_id}
  */
  readonly destinationCapacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_compartment_id DisasterRecoveryDrProtectionGroup#destination_compartment_id}
  */
  readonly destinationCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_dedicated_vm_host_id DisasterRecoveryDrProtectionGroup#destination_dedicated_vm_host_id}
  */
  readonly destinationDedicatedVmHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_load_balancer_id}
  */
  readonly destinationLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_network_load_balancer_id DisasterRecoveryDrProtectionGroup#destination_network_load_balancer_id}
  */
  readonly destinationNetworkLoadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_snapshot_policy_id DisasterRecoveryDrProtectionGroup#destination_snapshot_policy_id}
  */
  readonly destinationSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#gtid_reconciliation_timeout DisasterRecoveryDrProtectionGroup#gtid_reconciliation_timeout}
  */
  readonly gtidReconciliationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#is_continue_on_gtid_reconciliation_timeout DisasterRecoveryDrProtectionGroup#is_continue_on_gtid_reconciliation_timeout}
  */
  readonly isContinueOnGtidReconciliationTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#is_movable DisasterRecoveryDrProtectionGroup#is_movable}
  */
  readonly isMovable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#is_retain_fault_domain DisasterRecoveryDrProtectionGroup#is_retain_fault_domain}
  */
  readonly isRetainFaultDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#is_start_stop_enabled DisasterRecoveryDrProtectionGroup#is_start_stop_enabled}
  */
  readonly isStartStopEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#jump_host_id DisasterRecoveryDrProtectionGroup#jump_host_id}
  */
  readonly jumpHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#member_id DisasterRecoveryDrProtectionGroup#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#member_type DisasterRecoveryDrProtectionGroup#member_type}
  */
  readonly memberType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#namespace DisasterRecoveryDrProtectionGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#password_vault_secret_id DisasterRecoveryDrProtectionGroup#password_vault_secret_id}
  */
  readonly passwordVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#peer_cluster_id DisasterRecoveryDrProtectionGroup#peer_cluster_id}
  */
  readonly peerClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#peer_db_system_id DisasterRecoveryDrProtectionGroup#peer_db_system_id}
  */
  readonly peerDbSystemId?: string;
  /**
  * backend_set_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#backend_set_mappings DisasterRecoveryDrProtectionGroup#backend_set_mappings}
  */
  readonly backendSetMappings?: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[] | cdktf.IResolvable;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#backup_config DisasterRecoveryDrProtectionGroup#backup_config}
  */
  readonly backupConfig?: DisasterRecoveryDrProtectionGroupMembersBackupConfig;
  /**
  * backup_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#backup_location DisasterRecoveryDrProtectionGroup#backup_location}
  */
  readonly backupLocation?: DisasterRecoveryDrProtectionGroupMembersBackupLocation;
  /**
  * block_volume_attach_and_mount_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#block_volume_attach_and_mount_operations DisasterRecoveryDrProtectionGroup#block_volume_attach_and_mount_operations}
  */
  readonly blockVolumeAttachAndMountOperations?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations;
  /**
  * block_volume_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#block_volume_operations DisasterRecoveryDrProtectionGroup#block_volume_operations}
  */
  readonly blockVolumeOperations?: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[] | cdktf.IResolvable;
  /**
  * common_destination_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#common_destination_key DisasterRecoveryDrProtectionGroup#common_destination_key}
  */
  readonly commonDestinationKey?: DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey;
  /**
  * db_system_admin_user_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#db_system_admin_user_details DisasterRecoveryDrProtectionGroup#db_system_admin_user_details}
  */
  readonly dbSystemAdminUserDetails?: DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails;
  /**
  * db_system_replication_user_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#db_system_replication_user_details DisasterRecoveryDrProtectionGroup#db_system_replication_user_details}
  */
  readonly dbSystemReplicationUserDetails?: DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails;
  /**
  * destination_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#destination_encryption_key DisasterRecoveryDrProtectionGroup#destination_encryption_key}
  */
  readonly destinationEncryptionKey?: DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey;
  /**
  * export_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#export_mappings DisasterRecoveryDrProtectionGroup#export_mappings}
  */
  readonly exportMappings?: DisasterRecoveryDrProtectionGroupMembersExportMappings[] | cdktf.IResolvable;
  /**
  * file_system_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#file_system_operations DisasterRecoveryDrProtectionGroup#file_system_operations}
  */
  readonly fileSystemOperations?: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[] | cdktf.IResolvable;
  /**
  * load_balancer_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#load_balancer_mappings DisasterRecoveryDrProtectionGroup#load_balancer_mappings}
  */
  readonly loadBalancerMappings?: DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings[] | cdktf.IResolvable;
  /**
  * managed_node_pool_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#managed_node_pool_configs DisasterRecoveryDrProtectionGroup#managed_node_pool_configs}
  */
  readonly managedNodePoolConfigs?: DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs[] | cdktf.IResolvable;
  /**
  * network_load_balancer_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#network_load_balancer_mappings DisasterRecoveryDrProtectionGroup#network_load_balancer_mappings}
  */
  readonly networkLoadBalancerMappings?: DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings[] | cdktf.IResolvable;
  /**
  * source_volume_to_destination_encryption_key_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#source_volume_to_destination_encryption_key_mappings DisasterRecoveryDrProtectionGroup#source_volume_to_destination_encryption_key_mappings}
  */
  readonly sourceVolumeToDestinationEncryptionKeyMappings?: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings[] | cdktf.IResolvable;
  /**
  * vault_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#vault_mappings DisasterRecoveryDrProtectionGroup#vault_mappings}
  */
  readonly vaultMappings?: DisasterRecoveryDrProtectionGroupMembersVaultMappings[] | cdktf.IResolvable;
  /**
  * virtual_node_pool_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#virtual_node_pool_configs DisasterRecoveryDrProtectionGroup#virtual_node_pool_configs}
  */
  readonly virtualNodePoolConfigs?: DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs[] | cdktf.IResolvable;
  /**
  * vnic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#vnic_mapping DisasterRecoveryDrProtectionGroup#vnic_mapping}
  */
  readonly vnicMapping?: DisasterRecoveryDrProtectionGroupMembersVnicMapping[] | cdktf.IResolvable;
  /**
  * vnic_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#vnic_mappings DisasterRecoveryDrProtectionGroup#vnic_mappings}
  */
  readonly vnicMappings?: DisasterRecoveryDrProtectionGroupMembersVnicMappings[] | cdktf.IResolvable;
}

export function disasterRecoveryDrProtectionGroupMembersToTerraform(struct?: DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_database_standby_type_for_dr_drills: cdktf.stringToTerraform(struct!.autonomousDatabaseStandbyTypeForDrDrills),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    connection_string_type: cdktf.stringToTerraform(struct!.connectionStringType),
    destination_availability_domain: cdktf.stringToTerraform(struct!.destinationAvailabilityDomain),
    destination_backup_policy_id: cdktf.stringToTerraform(struct!.destinationBackupPolicyId),
    destination_capacity_reservation_id: cdktf.stringToTerraform(struct!.destinationCapacityReservationId),
    destination_compartment_id: cdktf.stringToTerraform(struct!.destinationCompartmentId),
    destination_dedicated_vm_host_id: cdktf.stringToTerraform(struct!.destinationDedicatedVmHostId),
    destination_load_balancer_id: cdktf.stringToTerraform(struct!.destinationLoadBalancerId),
    destination_network_load_balancer_id: cdktf.stringToTerraform(struct!.destinationNetworkLoadBalancerId),
    destination_snapshot_policy_id: cdktf.stringToTerraform(struct!.destinationSnapshotPolicyId),
    gtid_reconciliation_timeout: cdktf.numberToTerraform(struct!.gtidReconciliationTimeout),
    is_continue_on_gtid_reconciliation_timeout: cdktf.booleanToTerraform(struct!.isContinueOnGtidReconciliationTimeout),
    is_movable: cdktf.booleanToTerraform(struct!.isMovable),
    is_retain_fault_domain: cdktf.booleanToTerraform(struct!.isRetainFaultDomain),
    is_start_stop_enabled: cdktf.booleanToTerraform(struct!.isStartStopEnabled),
    jump_host_id: cdktf.stringToTerraform(struct!.jumpHostId),
    member_id: cdktf.stringToTerraform(struct!.memberId),
    member_type: cdktf.stringToTerraform(struct!.memberType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    password_vault_secret_id: cdktf.stringToTerraform(struct!.passwordVaultSecretId),
    peer_cluster_id: cdktf.stringToTerraform(struct!.peerClusterId),
    peer_db_system_id: cdktf.stringToTerraform(struct!.peerDbSystemId),
    backend_set_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToTerraform, true)(struct!.backendSetMappings),
    backup_config: disasterRecoveryDrProtectionGroupMembersBackupConfigToTerraform(struct!.backupConfig),
    backup_location: disasterRecoveryDrProtectionGroupMembersBackupLocationToTerraform(struct!.backupLocation),
    block_volume_attach_and_mount_operations: disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsToTerraform(struct!.blockVolumeAttachAndMountOperations),
    block_volume_operations: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToTerraform, true)(struct!.blockVolumeOperations),
    common_destination_key: disasterRecoveryDrProtectionGroupMembersCommonDestinationKeyToTerraform(struct!.commonDestinationKey),
    db_system_admin_user_details: disasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsToTerraform(struct!.dbSystemAdminUserDetails),
    db_system_replication_user_details: disasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsToTerraform(struct!.dbSystemReplicationUserDetails),
    destination_encryption_key: disasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyToTerraform(struct!.destinationEncryptionKey),
    export_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersExportMappingsToTerraform, true)(struct!.exportMappings),
    file_system_operations: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToTerraform, true)(struct!.fileSystemOperations),
    load_balancer_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsToTerraform, true)(struct!.loadBalancerMappings),
    managed_node_pool_configs: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsToTerraform, true)(struct!.managedNodePoolConfigs),
    network_load_balancer_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsToTerraform, true)(struct!.networkLoadBalancerMappings),
    source_volume_to_destination_encryption_key_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsToTerraform, true)(struct!.sourceVolumeToDestinationEncryptionKeyMappings),
    vault_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersVaultMappingsToTerraform, true)(struct!.vaultMappings),
    virtual_node_pool_configs: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsToTerraform, true)(struct!.virtualNodePoolConfigs),
    vnic_mapping: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersVnicMappingToTerraform, true)(struct!.vnicMapping),
    vnic_mappings: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersVnicMappingsToTerraform, true)(struct!.vnicMappings),
  }
}


export function disasterRecoveryDrProtectionGroupMembersToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_database_standby_type_for_dr_drills: {
      value: cdktf.stringToHclTerraform(struct!.autonomousDatabaseStandbyTypeForDrDrills),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionStringType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.destinationAvailabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_backup_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationBackupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationCapacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_dedicated_vm_host_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDedicatedVmHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_network_load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationNetworkLoadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_snapshot_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationSnapshotPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtid_reconciliation_timeout: {
      value: cdktf.numberToHclTerraform(struct!.gtidReconciliationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_continue_on_gtid_reconciliation_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.isContinueOnGtidReconciliationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_movable: {
      value: cdktf.booleanToHclTerraform(struct!.isMovable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_retain_fault_domain: {
      value: cdktf.booleanToHclTerraform(struct!.isRetainFaultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_start_stop_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isStartStopEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jump_host_id: {
      value: cdktf.stringToHclTerraform(struct!.jumpHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_id: {
      value: cdktf.stringToHclTerraform(struct!.memberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.peerClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.peerDbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_set_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersBackendSetMappingsToHclTerraform, true)(struct!.backendSetMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList",
    },
    backup_config: {
      value: disasterRecoveryDrProtectionGroupMembersBackupConfigToHclTerraform(struct!.backupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBackupConfigList",
    },
    backup_location: {
      value: disasterRecoveryDrProtectionGroupMembersBackupLocationToHclTerraform(struct!.backupLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBackupLocationList",
    },
    block_volume_attach_and_mount_operations: {
      value: disasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsToHclTerraform(struct!.blockVolumeAttachAndMountOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsList",
    },
    block_volume_operations: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsToHclTerraform, true)(struct!.blockVolumeOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList",
    },
    common_destination_key: {
      value: disasterRecoveryDrProtectionGroupMembersCommonDestinationKeyToHclTerraform(struct!.commonDestinationKey),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyList",
    },
    db_system_admin_user_details: {
      value: disasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsToHclTerraform(struct!.dbSystemAdminUserDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsList",
    },
    db_system_replication_user_details: {
      value: disasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsToHclTerraform(struct!.dbSystemReplicationUserDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsList",
    },
    destination_encryption_key: {
      value: disasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyToHclTerraform(struct!.destinationEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyList",
    },
    export_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersExportMappingsToHclTerraform, true)(struct!.exportMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersExportMappingsList",
    },
    file_system_operations: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersFileSystemOperationsToHclTerraform, true)(struct!.fileSystemOperations),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList",
    },
    load_balancer_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsToHclTerraform, true)(struct!.loadBalancerMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsList",
    },
    managed_node_pool_configs: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsToHclTerraform, true)(struct!.managedNodePoolConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsList",
    },
    network_load_balancer_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsToHclTerraform, true)(struct!.networkLoadBalancerMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsList",
    },
    source_volume_to_destination_encryption_key_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsToHclTerraform, true)(struct!.sourceVolumeToDestinationEncryptionKeyMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsList",
    },
    vault_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersVaultMappingsToHclTerraform, true)(struct!.vaultMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersVaultMappingsList",
    },
    virtual_node_pool_configs: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsToHclTerraform, true)(struct!.virtualNodePoolConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsList",
    },
    vnic_mapping: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersVnicMappingToHclTerraform, true)(struct!.vnicMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersVnicMappingList",
    },
    vnic_mappings: {
      value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersVnicMappingsToHclTerraform, true)(struct!.vnicMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryDrProtectionGroupMembersVnicMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryDrProtectionGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousDatabaseStandbyTypeForDrDrills !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousDatabaseStandbyTypeForDrDrills = this._autonomousDatabaseStandbyTypeForDrDrills;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._connectionStringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionStringType = this._connectionStringType;
    }
    if (this._destinationAvailabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAvailabilityDomain = this._destinationAvailabilityDomain;
    }
    if (this._destinationBackupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBackupPolicyId = this._destinationBackupPolicyId;
    }
    if (this._destinationCapacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCapacityReservationId = this._destinationCapacityReservationId;
    }
    if (this._destinationCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCompartmentId = this._destinationCompartmentId;
    }
    if (this._destinationDedicatedVmHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDedicatedVmHostId = this._destinationDedicatedVmHostId;
    }
    if (this._destinationLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLoadBalancerId = this._destinationLoadBalancerId;
    }
    if (this._destinationNetworkLoadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNetworkLoadBalancerId = this._destinationNetworkLoadBalancerId;
    }
    if (this._destinationSnapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSnapshotPolicyId = this._destinationSnapshotPolicyId;
    }
    if (this._gtidReconciliationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtidReconciliationTimeout = this._gtidReconciliationTimeout;
    }
    if (this._isContinueOnGtidReconciliationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContinueOnGtidReconciliationTimeout = this._isContinueOnGtidReconciliationTimeout;
    }
    if (this._isMovable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMovable = this._isMovable;
    }
    if (this._isRetainFaultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRetainFaultDomain = this._isRetainFaultDomain;
    }
    if (this._isStartStopEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStartStopEnabled = this._isStartStopEnabled;
    }
    if (this._jumpHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumpHostId = this._jumpHostId;
    }
    if (this._memberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberId = this._memberId;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._passwordVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVaultSecretId = this._passwordVaultSecretId;
    }
    if (this._peerClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerClusterId = this._peerClusterId;
    }
    if (this._peerDbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerDbSystemId = this._peerDbSystemId;
    }
    if (this._backendSetMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendSetMappings = this._backendSetMappings?.internalValue;
    }
    if (this._backupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfig = this._backupConfig?.internalValue;
    }
    if (this._backupLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupLocation = this._backupLocation?.internalValue;
    }
    if (this._blockVolumeAttachAndMountOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeAttachAndMountOperations = this._blockVolumeAttachAndMountOperations?.internalValue;
    }
    if (this._blockVolumeOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeOperations = this._blockVolumeOperations?.internalValue;
    }
    if (this._commonDestinationKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonDestinationKey = this._commonDestinationKey?.internalValue;
    }
    if (this._dbSystemAdminUserDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemAdminUserDetails = this._dbSystemAdminUserDetails?.internalValue;
    }
    if (this._dbSystemReplicationUserDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemReplicationUserDetails = this._dbSystemReplicationUserDetails?.internalValue;
    }
    if (this._destinationEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEncryptionKey = this._destinationEncryptionKey?.internalValue;
    }
    if (this._exportMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportMappings = this._exportMappings?.internalValue;
    }
    if (this._fileSystemOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemOperations = this._fileSystemOperations?.internalValue;
    }
    if (this._loadBalancerMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerMappings = this._loadBalancerMappings?.internalValue;
    }
    if (this._managedNodePoolConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNodePoolConfigs = this._managedNodePoolConfigs?.internalValue;
    }
    if (this._networkLoadBalancerMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkLoadBalancerMappings = this._networkLoadBalancerMappings?.internalValue;
    }
    if (this._sourceVolumeToDestinationEncryptionKeyMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVolumeToDestinationEncryptionKeyMappings = this._sourceVolumeToDestinationEncryptionKeyMappings?.internalValue;
    }
    if (this._vaultMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultMappings = this._vaultMappings?.internalValue;
    }
    if (this._virtualNodePoolConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodePoolConfigs = this._virtualNodePoolConfigs?.internalValue;
    }
    if (this._vnicMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicMapping = this._vnicMapping?.internalValue;
    }
    if (this._vnicMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicMappings = this._vnicMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryDrProtectionGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousDatabaseStandbyTypeForDrDrills = undefined;
      this._bucket = undefined;
      this._connectionStringType = undefined;
      this._destinationAvailabilityDomain = undefined;
      this._destinationBackupPolicyId = undefined;
      this._destinationCapacityReservationId = undefined;
      this._destinationCompartmentId = undefined;
      this._destinationDedicatedVmHostId = undefined;
      this._destinationLoadBalancerId = undefined;
      this._destinationNetworkLoadBalancerId = undefined;
      this._destinationSnapshotPolicyId = undefined;
      this._gtidReconciliationTimeout = undefined;
      this._isContinueOnGtidReconciliationTimeout = undefined;
      this._isMovable = undefined;
      this._isRetainFaultDomain = undefined;
      this._isStartStopEnabled = undefined;
      this._jumpHostId = undefined;
      this._memberId = undefined;
      this._memberType = undefined;
      this._namespace = undefined;
      this._passwordVaultSecretId = undefined;
      this._peerClusterId = undefined;
      this._peerDbSystemId = undefined;
      this._backendSetMappings.internalValue = undefined;
      this._backupConfig.internalValue = undefined;
      this._backupLocation.internalValue = undefined;
      this._blockVolumeAttachAndMountOperations.internalValue = undefined;
      this._blockVolumeOperations.internalValue = undefined;
      this._commonDestinationKey.internalValue = undefined;
      this._dbSystemAdminUserDetails.internalValue = undefined;
      this._dbSystemReplicationUserDetails.internalValue = undefined;
      this._destinationEncryptionKey.internalValue = undefined;
      this._exportMappings.internalValue = undefined;
      this._fileSystemOperations.internalValue = undefined;
      this._loadBalancerMappings.internalValue = undefined;
      this._managedNodePoolConfigs.internalValue = undefined;
      this._networkLoadBalancerMappings.internalValue = undefined;
      this._sourceVolumeToDestinationEncryptionKeyMappings.internalValue = undefined;
      this._vaultMappings.internalValue = undefined;
      this._virtualNodePoolConfigs.internalValue = undefined;
      this._vnicMapping.internalValue = undefined;
      this._vnicMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousDatabaseStandbyTypeForDrDrills = value.autonomousDatabaseStandbyTypeForDrDrills;
      this._bucket = value.bucket;
      this._connectionStringType = value.connectionStringType;
      this._destinationAvailabilityDomain = value.destinationAvailabilityDomain;
      this._destinationBackupPolicyId = value.destinationBackupPolicyId;
      this._destinationCapacityReservationId = value.destinationCapacityReservationId;
      this._destinationCompartmentId = value.destinationCompartmentId;
      this._destinationDedicatedVmHostId = value.destinationDedicatedVmHostId;
      this._destinationLoadBalancerId = value.destinationLoadBalancerId;
      this._destinationNetworkLoadBalancerId = value.destinationNetworkLoadBalancerId;
      this._destinationSnapshotPolicyId = value.destinationSnapshotPolicyId;
      this._gtidReconciliationTimeout = value.gtidReconciliationTimeout;
      this._isContinueOnGtidReconciliationTimeout = value.isContinueOnGtidReconciliationTimeout;
      this._isMovable = value.isMovable;
      this._isRetainFaultDomain = value.isRetainFaultDomain;
      this._isStartStopEnabled = value.isStartStopEnabled;
      this._jumpHostId = value.jumpHostId;
      this._memberId = value.memberId;
      this._memberType = value.memberType;
      this._namespace = value.namespace;
      this._passwordVaultSecretId = value.passwordVaultSecretId;
      this._peerClusterId = value.peerClusterId;
      this._peerDbSystemId = value.peerDbSystemId;
      this._backendSetMappings.internalValue = value.backendSetMappings;
      this._backupConfig.internalValue = value.backupConfig;
      this._backupLocation.internalValue = value.backupLocation;
      this._blockVolumeAttachAndMountOperations.internalValue = value.blockVolumeAttachAndMountOperations;
      this._blockVolumeOperations.internalValue = value.blockVolumeOperations;
      this._commonDestinationKey.internalValue = value.commonDestinationKey;
      this._dbSystemAdminUserDetails.internalValue = value.dbSystemAdminUserDetails;
      this._dbSystemReplicationUserDetails.internalValue = value.dbSystemReplicationUserDetails;
      this._destinationEncryptionKey.internalValue = value.destinationEncryptionKey;
      this._exportMappings.internalValue = value.exportMappings;
      this._fileSystemOperations.internalValue = value.fileSystemOperations;
      this._loadBalancerMappings.internalValue = value.loadBalancerMappings;
      this._managedNodePoolConfigs.internalValue = value.managedNodePoolConfigs;
      this._networkLoadBalancerMappings.internalValue = value.networkLoadBalancerMappings;
      this._sourceVolumeToDestinationEncryptionKeyMappings.internalValue = value.sourceVolumeToDestinationEncryptionKeyMappings;
      this._vaultMappings.internalValue = value.vaultMappings;
      this._virtualNodePoolConfigs.internalValue = value.virtualNodePoolConfigs;
      this._vnicMapping.internalValue = value.vnicMapping;
      this._vnicMappings.internalValue = value.vnicMappings;
    }
  }

  // autonomous_database_standby_type_for_dr_drills - computed: true, optional: true, required: false
  private _autonomousDatabaseStandbyTypeForDrDrills?: string; 
  public get autonomousDatabaseStandbyTypeForDrDrills() {
    return this.getStringAttribute('autonomous_database_standby_type_for_dr_drills');
  }
  public set autonomousDatabaseStandbyTypeForDrDrills(value: string) {
    this._autonomousDatabaseStandbyTypeForDrDrills = value;
  }
  public resetAutonomousDatabaseStandbyTypeForDrDrills() {
    this._autonomousDatabaseStandbyTypeForDrDrills = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseStandbyTypeForDrDrillsInput() {
    return this._autonomousDatabaseStandbyTypeForDrDrills;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // connection_string_type - computed: true, optional: true, required: false
  private _connectionStringType?: string; 
  public get connectionStringType() {
    return this.getStringAttribute('connection_string_type');
  }
  public set connectionStringType(value: string) {
    this._connectionStringType = value;
  }
  public resetConnectionStringType() {
    this._connectionStringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringTypeInput() {
    return this._connectionStringType;
  }

  // destination_availability_domain - computed: true, optional: true, required: false
  private _destinationAvailabilityDomain?: string; 
  public get destinationAvailabilityDomain() {
    return this.getStringAttribute('destination_availability_domain');
  }
  public set destinationAvailabilityDomain(value: string) {
    this._destinationAvailabilityDomain = value;
  }
  public resetDestinationAvailabilityDomain() {
    this._destinationAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAvailabilityDomainInput() {
    return this._destinationAvailabilityDomain;
  }

  // destination_backup_policy_id - computed: true, optional: true, required: false
  private _destinationBackupPolicyId?: string; 
  public get destinationBackupPolicyId() {
    return this.getStringAttribute('destination_backup_policy_id');
  }
  public set destinationBackupPolicyId(value: string) {
    this._destinationBackupPolicyId = value;
  }
  public resetDestinationBackupPolicyId() {
    this._destinationBackupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBackupPolicyIdInput() {
    return this._destinationBackupPolicyId;
  }

  // destination_capacity_reservation_id - computed: true, optional: true, required: false
  private _destinationCapacityReservationId?: string; 
  public get destinationCapacityReservationId() {
    return this.getStringAttribute('destination_capacity_reservation_id');
  }
  public set destinationCapacityReservationId(value: string) {
    this._destinationCapacityReservationId = value;
  }
  public resetDestinationCapacityReservationId() {
    this._destinationCapacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCapacityReservationIdInput() {
    return this._destinationCapacityReservationId;
  }

  // destination_compartment_id - computed: true, optional: true, required: false
  private _destinationCompartmentId?: string; 
  public get destinationCompartmentId() {
    return this.getStringAttribute('destination_compartment_id');
  }
  public set destinationCompartmentId(value: string) {
    this._destinationCompartmentId = value;
  }
  public resetDestinationCompartmentId() {
    this._destinationCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCompartmentIdInput() {
    return this._destinationCompartmentId;
  }

  // destination_dedicated_vm_host_id - computed: true, optional: true, required: false
  private _destinationDedicatedVmHostId?: string; 
  public get destinationDedicatedVmHostId() {
    return this.getStringAttribute('destination_dedicated_vm_host_id');
  }
  public set destinationDedicatedVmHostId(value: string) {
    this._destinationDedicatedVmHostId = value;
  }
  public resetDestinationDedicatedVmHostId() {
    this._destinationDedicatedVmHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDedicatedVmHostIdInput() {
    return this._destinationDedicatedVmHostId;
  }

  // destination_load_balancer_id - computed: true, optional: true, required: false
  private _destinationLoadBalancerId?: string; 
  public get destinationLoadBalancerId() {
    return this.getStringAttribute('destination_load_balancer_id');
  }
  public set destinationLoadBalancerId(value: string) {
    this._destinationLoadBalancerId = value;
  }
  public resetDestinationLoadBalancerId() {
    this._destinationLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLoadBalancerIdInput() {
    return this._destinationLoadBalancerId;
  }

  // destination_network_load_balancer_id - computed: true, optional: true, required: false
  private _destinationNetworkLoadBalancerId?: string; 
  public get destinationNetworkLoadBalancerId() {
    return this.getStringAttribute('destination_network_load_balancer_id');
  }
  public set destinationNetworkLoadBalancerId(value: string) {
    this._destinationNetworkLoadBalancerId = value;
  }
  public resetDestinationNetworkLoadBalancerId() {
    this._destinationNetworkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkLoadBalancerIdInput() {
    return this._destinationNetworkLoadBalancerId;
  }

  // destination_snapshot_policy_id - computed: true, optional: true, required: false
  private _destinationSnapshotPolicyId?: string; 
  public get destinationSnapshotPolicyId() {
    return this.getStringAttribute('destination_snapshot_policy_id');
  }
  public set destinationSnapshotPolicyId(value: string) {
    this._destinationSnapshotPolicyId = value;
  }
  public resetDestinationSnapshotPolicyId() {
    this._destinationSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSnapshotPolicyIdInput() {
    return this._destinationSnapshotPolicyId;
  }

  // gtid_reconciliation_timeout - computed: true, optional: true, required: false
  private _gtidReconciliationTimeout?: number; 
  public get gtidReconciliationTimeout() {
    return this.getNumberAttribute('gtid_reconciliation_timeout');
  }
  public set gtidReconciliationTimeout(value: number) {
    this._gtidReconciliationTimeout = value;
  }
  public resetGtidReconciliationTimeout() {
    this._gtidReconciliationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtidReconciliationTimeoutInput() {
    return this._gtidReconciliationTimeout;
  }

  // is_continue_on_gtid_reconciliation_timeout - computed: true, optional: true, required: false
  private _isContinueOnGtidReconciliationTimeout?: boolean | cdktf.IResolvable; 
  public get isContinueOnGtidReconciliationTimeout() {
    return this.getBooleanAttribute('is_continue_on_gtid_reconciliation_timeout');
  }
  public set isContinueOnGtidReconciliationTimeout(value: boolean | cdktf.IResolvable) {
    this._isContinueOnGtidReconciliationTimeout = value;
  }
  public resetIsContinueOnGtidReconciliationTimeout() {
    this._isContinueOnGtidReconciliationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContinueOnGtidReconciliationTimeoutInput() {
    return this._isContinueOnGtidReconciliationTimeout;
  }

  // is_movable - computed: true, optional: true, required: false
  private _isMovable?: boolean | cdktf.IResolvable; 
  public get isMovable() {
    return this.getBooleanAttribute('is_movable');
  }
  public set isMovable(value: boolean | cdktf.IResolvable) {
    this._isMovable = value;
  }
  public resetIsMovable() {
    this._isMovable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMovableInput() {
    return this._isMovable;
  }

  // is_retain_fault_domain - computed: true, optional: true, required: false
  private _isRetainFaultDomain?: boolean | cdktf.IResolvable; 
  public get isRetainFaultDomain() {
    return this.getBooleanAttribute('is_retain_fault_domain');
  }
  public set isRetainFaultDomain(value: boolean | cdktf.IResolvable) {
    this._isRetainFaultDomain = value;
  }
  public resetIsRetainFaultDomain() {
    this._isRetainFaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRetainFaultDomainInput() {
    return this._isRetainFaultDomain;
  }

  // is_start_stop_enabled - computed: true, optional: true, required: false
  private _isStartStopEnabled?: boolean | cdktf.IResolvable; 
  public get isStartStopEnabled() {
    return this.getBooleanAttribute('is_start_stop_enabled');
  }
  public set isStartStopEnabled(value: boolean | cdktf.IResolvable) {
    this._isStartStopEnabled = value;
  }
  public resetIsStartStopEnabled() {
    this._isStartStopEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStartStopEnabledInput() {
    return this._isStartStopEnabled;
  }

  // jump_host_id - computed: true, optional: true, required: false
  private _jumpHostId?: string; 
  public get jumpHostId() {
    return this.getStringAttribute('jump_host_id');
  }
  public set jumpHostId(value: string) {
    this._jumpHostId = value;
  }
  public resetJumpHostId() {
    this._jumpHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumpHostIdInput() {
    return this._jumpHostId;
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // member_type - computed: false, optional: false, required: true
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // password_vault_secret_id - computed: true, optional: true, required: false
  private _passwordVaultSecretId?: string; 
  public get passwordVaultSecretId() {
    return this.getStringAttribute('password_vault_secret_id');
  }
  public set passwordVaultSecretId(value: string) {
    this._passwordVaultSecretId = value;
  }
  public resetPasswordVaultSecretId() {
    this._passwordVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVaultSecretIdInput() {
    return this._passwordVaultSecretId;
  }

  // peer_cluster_id - computed: true, optional: true, required: false
  private _peerClusterId?: string; 
  public get peerClusterId() {
    return this.getStringAttribute('peer_cluster_id');
  }
  public set peerClusterId(value: string) {
    this._peerClusterId = value;
  }
  public resetPeerClusterId() {
    this._peerClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerClusterIdInput() {
    return this._peerClusterId;
  }

  // peer_db_system_id - computed: true, optional: true, required: false
  private _peerDbSystemId?: string; 
  public get peerDbSystemId() {
    return this.getStringAttribute('peer_db_system_id');
  }
  public set peerDbSystemId(value: string) {
    this._peerDbSystemId = value;
  }
  public resetPeerDbSystemId() {
    this._peerDbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbSystemIdInput() {
    return this._peerDbSystemId;
  }

  // backend_set_mappings - computed: false, optional: true, required: false
  private _backendSetMappings = new DisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(this, "backend_set_mappings", false);
  public get backendSetMappings() {
    return this._backendSetMappings;
  }
  public putBackendSetMappings(value: DisasterRecoveryDrProtectionGroupMembersBackendSetMappings[] | cdktf.IResolvable) {
    this._backendSetMappings.internalValue = value;
  }
  public resetBackendSetMappings() {
    this._backendSetMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetMappingsInput() {
    return this._backendSetMappings.internalValue;
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new DisasterRecoveryDrProtectionGroupMembersBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: DisasterRecoveryDrProtectionGroupMembersBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }

  // backup_location - computed: false, optional: true, required: false
  private _backupLocation = new DisasterRecoveryDrProtectionGroupMembersBackupLocationOutputReference(this, "backup_location");
  public get backupLocation() {
    return this._backupLocation;
  }
  public putBackupLocation(value: DisasterRecoveryDrProtectionGroupMembersBackupLocation) {
    this._backupLocation.internalValue = value;
  }
  public resetBackupLocation() {
    this._backupLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocationInput() {
    return this._backupLocation.internalValue;
  }

  // block_volume_attach_and_mount_operations - computed: false, optional: true, required: false
  private _blockVolumeAttachAndMountOperations = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperationsOutputReference(this, "block_volume_attach_and_mount_operations");
  public get blockVolumeAttachAndMountOperations() {
    return this._blockVolumeAttachAndMountOperations;
  }
  public putBlockVolumeAttachAndMountOperations(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeAttachAndMountOperations) {
    this._blockVolumeAttachAndMountOperations.internalValue = value;
  }
  public resetBlockVolumeAttachAndMountOperations() {
    this._blockVolumeAttachAndMountOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeAttachAndMountOperationsInput() {
    return this._blockVolumeAttachAndMountOperations.internalValue;
  }

  // block_volume_operations - computed: false, optional: true, required: false
  private _blockVolumeOperations = new DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(this, "block_volume_operations", false);
  public get blockVolumeOperations() {
    return this._blockVolumeOperations;
  }
  public putBlockVolumeOperations(value: DisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations[] | cdktf.IResolvable) {
    this._blockVolumeOperations.internalValue = value;
  }
  public resetBlockVolumeOperations() {
    this._blockVolumeOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeOperationsInput() {
    return this._blockVolumeOperations.internalValue;
  }

  // common_destination_key - computed: false, optional: true, required: false
  private _commonDestinationKey = new DisasterRecoveryDrProtectionGroupMembersCommonDestinationKeyOutputReference(this, "common_destination_key");
  public get commonDestinationKey() {
    return this._commonDestinationKey;
  }
  public putCommonDestinationKey(value: DisasterRecoveryDrProtectionGroupMembersCommonDestinationKey) {
    this._commonDestinationKey.internalValue = value;
  }
  public resetCommonDestinationKey() {
    this._commonDestinationKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonDestinationKeyInput() {
    return this._commonDestinationKey.internalValue;
  }

  // db_system_admin_user_details - computed: false, optional: true, required: false
  private _dbSystemAdminUserDetails = new DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetailsOutputReference(this, "db_system_admin_user_details");
  public get dbSystemAdminUserDetails() {
    return this._dbSystemAdminUserDetails;
  }
  public putDbSystemAdminUserDetails(value: DisasterRecoveryDrProtectionGroupMembersDbSystemAdminUserDetails) {
    this._dbSystemAdminUserDetails.internalValue = value;
  }
  public resetDbSystemAdminUserDetails() {
    this._dbSystemAdminUserDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemAdminUserDetailsInput() {
    return this._dbSystemAdminUserDetails.internalValue;
  }

  // db_system_replication_user_details - computed: false, optional: true, required: false
  private _dbSystemReplicationUserDetails = new DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetailsOutputReference(this, "db_system_replication_user_details");
  public get dbSystemReplicationUserDetails() {
    return this._dbSystemReplicationUserDetails;
  }
  public putDbSystemReplicationUserDetails(value: DisasterRecoveryDrProtectionGroupMembersDbSystemReplicationUserDetails) {
    this._dbSystemReplicationUserDetails.internalValue = value;
  }
  public resetDbSystemReplicationUserDetails() {
    this._dbSystemReplicationUserDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemReplicationUserDetailsInput() {
    return this._dbSystemReplicationUserDetails.internalValue;
  }

  // destination_encryption_key - computed: false, optional: true, required: false
  private _destinationEncryptionKey = new DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKeyOutputReference(this, "destination_encryption_key");
  public get destinationEncryptionKey() {
    return this._destinationEncryptionKey;
  }
  public putDestinationEncryptionKey(value: DisasterRecoveryDrProtectionGroupMembersDestinationEncryptionKey) {
    this._destinationEncryptionKey.internalValue = value;
  }
  public resetDestinationEncryptionKey() {
    this._destinationEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionKeyInput() {
    return this._destinationEncryptionKey.internalValue;
  }

  // export_mappings - computed: false, optional: true, required: false
  private _exportMappings = new DisasterRecoveryDrProtectionGroupMembersExportMappingsList(this, "export_mappings", false);
  public get exportMappings() {
    return this._exportMappings;
  }
  public putExportMappings(value: DisasterRecoveryDrProtectionGroupMembersExportMappings[] | cdktf.IResolvable) {
    this._exportMappings.internalValue = value;
  }
  public resetExportMappings() {
    this._exportMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportMappingsInput() {
    return this._exportMappings.internalValue;
  }

  // file_system_operations - computed: false, optional: true, required: false
  private _fileSystemOperations = new DisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(this, "file_system_operations", false);
  public get fileSystemOperations() {
    return this._fileSystemOperations;
  }
  public putFileSystemOperations(value: DisasterRecoveryDrProtectionGroupMembersFileSystemOperations[] | cdktf.IResolvable) {
    this._fileSystemOperations.internalValue = value;
  }
  public resetFileSystemOperations() {
    this._fileSystemOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemOperationsInput() {
    return this._fileSystemOperations.internalValue;
  }

  // load_balancer_mappings - computed: false, optional: true, required: false
  private _loadBalancerMappings = new DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappingsList(this, "load_balancer_mappings", false);
  public get loadBalancerMappings() {
    return this._loadBalancerMappings;
  }
  public putLoadBalancerMappings(value: DisasterRecoveryDrProtectionGroupMembersLoadBalancerMappings[] | cdktf.IResolvable) {
    this._loadBalancerMappings.internalValue = value;
  }
  public resetLoadBalancerMappings() {
    this._loadBalancerMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerMappingsInput() {
    return this._loadBalancerMappings.internalValue;
  }

  // managed_node_pool_configs - computed: false, optional: true, required: false
  private _managedNodePoolConfigs = new DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigsList(this, "managed_node_pool_configs", false);
  public get managedNodePoolConfigs() {
    return this._managedNodePoolConfigs;
  }
  public putManagedNodePoolConfigs(value: DisasterRecoveryDrProtectionGroupMembersManagedNodePoolConfigs[] | cdktf.IResolvable) {
    this._managedNodePoolConfigs.internalValue = value;
  }
  public resetManagedNodePoolConfigs() {
    this._managedNodePoolConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNodePoolConfigsInput() {
    return this._managedNodePoolConfigs.internalValue;
  }

  // network_load_balancer_mappings - computed: false, optional: true, required: false
  private _networkLoadBalancerMappings = new DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappingsList(this, "network_load_balancer_mappings", false);
  public get networkLoadBalancerMappings() {
    return this._networkLoadBalancerMappings;
  }
  public putNetworkLoadBalancerMappings(value: DisasterRecoveryDrProtectionGroupMembersNetworkLoadBalancerMappings[] | cdktf.IResolvable) {
    this._networkLoadBalancerMappings.internalValue = value;
  }
  public resetNetworkLoadBalancerMappings() {
    this._networkLoadBalancerMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerMappingsInput() {
    return this._networkLoadBalancerMappings.internalValue;
  }

  // source_volume_to_destination_encryption_key_mappings - computed: false, optional: true, required: false
  private _sourceVolumeToDestinationEncryptionKeyMappings = new DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappingsList(this, "source_volume_to_destination_encryption_key_mappings", false);
  public get sourceVolumeToDestinationEncryptionKeyMappings() {
    return this._sourceVolumeToDestinationEncryptionKeyMappings;
  }
  public putSourceVolumeToDestinationEncryptionKeyMappings(value: DisasterRecoveryDrProtectionGroupMembersSourceVolumeToDestinationEncryptionKeyMappings[] | cdktf.IResolvable) {
    this._sourceVolumeToDestinationEncryptionKeyMappings.internalValue = value;
  }
  public resetSourceVolumeToDestinationEncryptionKeyMappings() {
    this._sourceVolumeToDestinationEncryptionKeyMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeToDestinationEncryptionKeyMappingsInput() {
    return this._sourceVolumeToDestinationEncryptionKeyMappings.internalValue;
  }

  // vault_mappings - computed: false, optional: true, required: false
  private _vaultMappings = new DisasterRecoveryDrProtectionGroupMembersVaultMappingsList(this, "vault_mappings", false);
  public get vaultMappings() {
    return this._vaultMappings;
  }
  public putVaultMappings(value: DisasterRecoveryDrProtectionGroupMembersVaultMappings[] | cdktf.IResolvable) {
    this._vaultMappings.internalValue = value;
  }
  public resetVaultMappings() {
    this._vaultMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultMappingsInput() {
    return this._vaultMappings.internalValue;
  }

  // virtual_node_pool_configs - computed: false, optional: true, required: false
  private _virtualNodePoolConfigs = new DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigsList(this, "virtual_node_pool_configs", false);
  public get virtualNodePoolConfigs() {
    return this._virtualNodePoolConfigs;
  }
  public putVirtualNodePoolConfigs(value: DisasterRecoveryDrProtectionGroupMembersVirtualNodePoolConfigs[] | cdktf.IResolvable) {
    this._virtualNodePoolConfigs.internalValue = value;
  }
  public resetVirtualNodePoolConfigs() {
    this._virtualNodePoolConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodePoolConfigsInput() {
    return this._virtualNodePoolConfigs.internalValue;
  }

  // vnic_mapping - computed: false, optional: true, required: false
  private _vnicMapping = new DisasterRecoveryDrProtectionGroupMembersVnicMappingList(this, "vnic_mapping", false);
  public get vnicMapping() {
    return this._vnicMapping;
  }
  public putVnicMapping(value: DisasterRecoveryDrProtectionGroupMembersVnicMapping[] | cdktf.IResolvable) {
    this._vnicMapping.internalValue = value;
  }
  public resetVnicMapping() {
    this._vnicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicMappingInput() {
    return this._vnicMapping.internalValue;
  }

  // vnic_mappings - computed: false, optional: true, required: false
  private _vnicMappings = new DisasterRecoveryDrProtectionGroupMembersVnicMappingsList(this, "vnic_mappings", false);
  public get vnicMappings() {
    return this._vnicMappings;
  }
  public putVnicMappings(value: DisasterRecoveryDrProtectionGroupMembersVnicMappings[] | cdktf.IResolvable) {
    this._vnicMappings.internalValue = value;
  }
  public resetVnicMappings() {
    this._vnicMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicMappingsInput() {
    return this._vnicMappings.internalValue;
  }
}

export class DisasterRecoveryDrProtectionGroupMembersList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryDrProtectionGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryDrProtectionGroupMembersOutputReference {
    return new DisasterRecoveryDrProtectionGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryDrProtectionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#create DisasterRecoveryDrProtectionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#delete DisasterRecoveryDrProtectionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#update DisasterRecoveryDrProtectionGroup#update}
  */
  readonly update?: string;
}

export function disasterRecoveryDrProtectionGroupTimeoutsToTerraform(struct?: DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable): any {
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


export function disasterRecoveryDrProtectionGroupTimeoutsToHclTerraform(struct?: DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable): any {
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

export class DisasterRecoveryDrProtectionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DisasterRecoveryDrProtectionGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}
*/
export class DisasterRecoveryDrProtectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_protection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisasterRecoveryDrProtectionGroup to import
  * @param importFromId The id of the existing DisasterRecoveryDrProtectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisasterRecoveryDrProtectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_protection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisasterRecoveryDrProtectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DisasterRecoveryDrProtectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_protection_group',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._disassociateTrigger = config.disassociateTrigger;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._association.internalValue = config.association;
    this._logLocation.internalValue = config.logLocation;
    this._members.internalValue = config.members;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // disassociate_trigger - computed: false, optional: true, required: false
  private _disassociateTrigger?: number; 
  public get disassociateTrigger() {
    return this.getNumberAttribute('disassociate_trigger');
  }
  public set disassociateTrigger(value: number) {
    this._disassociateTrigger = value;
  }
  public resetDisassociateTrigger() {
    this._disassociateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disassociateTriggerInput() {
    return this._disassociateTrigger;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // life_cycle_details - computed: true, optional: false, required: false
  public get lifeCycleDetails() {
    return this.getStringAttribute('life_cycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // association - computed: false, optional: true, required: false
  private _association = new DisasterRecoveryDrProtectionGroupAssociationOutputReference(this, "association");
  public get association() {
    return this._association;
  }
  public putAssociation(value: DisasterRecoveryDrProtectionGroupAssociation) {
    this._association.internalValue = value;
  }
  public resetAssociation() {
    this._association.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association.internalValue;
  }

  // log_location - computed: false, optional: false, required: true
  private _logLocation = new DisasterRecoveryDrProtectionGroupLogLocationOutputReference(this, "log_location");
  public get logLocation() {
    return this._logLocation;
  }
  public putLogLocation(value: DisasterRecoveryDrProtectionGroupLogLocation) {
    this._logLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocationInput() {
    return this._logLocation.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new DisasterRecoveryDrProtectionGroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DisasterRecoveryDrProtectionGroupMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DisasterRecoveryDrProtectionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DisasterRecoveryDrProtectionGroupTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      disassociate_trigger: cdktf.numberToTerraform(this._disassociateTrigger),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      association: disasterRecoveryDrProtectionGroupAssociationToTerraform(this._association.internalValue),
      log_location: disasterRecoveryDrProtectionGroupLogLocationToTerraform(this._logLocation.internalValue),
      members: cdktf.listMapper(disasterRecoveryDrProtectionGroupMembersToTerraform, true)(this._members.internalValue),
      timeouts: disasterRecoveryDrProtectionGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disassociate_trigger: {
        value: cdktf.numberToHclTerraform(this._disassociateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association: {
        value: disasterRecoveryDrProtectionGroupAssociationToHclTerraform(this._association.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryDrProtectionGroupAssociationList",
      },
      log_location: {
        value: disasterRecoveryDrProtectionGroupLogLocationToHclTerraform(this._logLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryDrProtectionGroupLogLocationList",
      },
      members: {
        value: cdktf.listMapperHcl(disasterRecoveryDrProtectionGroupMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryDrProtectionGroupMembersList",
      },
      timeouts: {
        value: disasterRecoveryDrProtectionGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DisasterRecoveryDrProtectionGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
