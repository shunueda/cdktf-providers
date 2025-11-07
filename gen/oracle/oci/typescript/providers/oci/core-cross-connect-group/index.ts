// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreCrossConnectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}
  */
  readonly customerReferenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * macsec_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#macsec_properties CoreCrossConnectGroup#macsec_properties}
  */
  readonly macsecProperties?: CoreCrossConnectGroupMacsecProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#timeouts CoreCrossConnectGroup#timeouts}
  */
  readonly timeouts?: CoreCrossConnectGroupTimeouts;
}
export interface CoreCrossConnectGroupMacsecPropertiesPrimaryKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}
  */
  readonly connectivityAssociationKeySecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}
  */
  readonly connectivityAssociationKeySecretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}
  */
  readonly connectivityAssociationNameSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}
  */
  readonly connectivityAssociationNameSecretVersion?: string;
}

export function coreCrossConnectGroupMacsecPropertiesPrimaryKeyToTerraform(struct?: CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference | CoreCrossConnectGroupMacsecPropertiesPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_association_key_secret_id: cdktf.stringToTerraform(struct!.connectivityAssociationKeySecretId),
    connectivity_association_key_secret_version: cdktf.stringToTerraform(struct!.connectivityAssociationKeySecretVersion),
    connectivity_association_name_secret_id: cdktf.stringToTerraform(struct!.connectivityAssociationNameSecretId),
    connectivity_association_name_secret_version: cdktf.stringToTerraform(struct!.connectivityAssociationNameSecretVersion),
  }
}


export function coreCrossConnectGroupMacsecPropertiesPrimaryKeyToHclTerraform(struct?: CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference | CoreCrossConnectGroupMacsecPropertiesPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_association_key_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.connectivityAssociationKeySecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectivity_association_key_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.connectivityAssociationKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectivity_association_name_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.connectivityAssociationNameSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectivity_association_name_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.connectivityAssociationNameSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCrossConnectGroupMacsecPropertiesPrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityAssociationKeySecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityAssociationKeySecretId = this._connectivityAssociationKeySecretId;
    }
    if (this._connectivityAssociationKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityAssociationKeySecretVersion = this._connectivityAssociationKeySecretVersion;
    }
    if (this._connectivityAssociationNameSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityAssociationNameSecretId = this._connectivityAssociationNameSecretId;
    }
    if (this._connectivityAssociationNameSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityAssociationNameSecretVersion = this._connectivityAssociationNameSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreCrossConnectGroupMacsecPropertiesPrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityAssociationKeySecretId = undefined;
      this._connectivityAssociationKeySecretVersion = undefined;
      this._connectivityAssociationNameSecretId = undefined;
      this._connectivityAssociationNameSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityAssociationKeySecretId = value.connectivityAssociationKeySecretId;
      this._connectivityAssociationKeySecretVersion = value.connectivityAssociationKeySecretVersion;
      this._connectivityAssociationNameSecretId = value.connectivityAssociationNameSecretId;
      this._connectivityAssociationNameSecretVersion = value.connectivityAssociationNameSecretVersion;
    }
  }

  // connectivity_association_key_secret_id - computed: false, optional: false, required: true
  private _connectivityAssociationKeySecretId?: string; 
  public get connectivityAssociationKeySecretId() {
    return this.getStringAttribute('connectivity_association_key_secret_id');
  }
  public set connectivityAssociationKeySecretId(value: string) {
    this._connectivityAssociationKeySecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityAssociationKeySecretIdInput() {
    return this._connectivityAssociationKeySecretId;
  }

  // connectivity_association_key_secret_version - computed: true, optional: true, required: false
  private _connectivityAssociationKeySecretVersion?: string; 
  public get connectivityAssociationKeySecretVersion() {
    return this.getStringAttribute('connectivity_association_key_secret_version');
  }
  public set connectivityAssociationKeySecretVersion(value: string) {
    this._connectivityAssociationKeySecretVersion = value;
  }
  public resetConnectivityAssociationKeySecretVersion() {
    this._connectivityAssociationKeySecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityAssociationKeySecretVersionInput() {
    return this._connectivityAssociationKeySecretVersion;
  }

  // connectivity_association_name_secret_id - computed: false, optional: false, required: true
  private _connectivityAssociationNameSecretId?: string; 
  public get connectivityAssociationNameSecretId() {
    return this.getStringAttribute('connectivity_association_name_secret_id');
  }
  public set connectivityAssociationNameSecretId(value: string) {
    this._connectivityAssociationNameSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityAssociationNameSecretIdInput() {
    return this._connectivityAssociationNameSecretId;
  }

  // connectivity_association_name_secret_version - computed: true, optional: true, required: false
  private _connectivityAssociationNameSecretVersion?: string; 
  public get connectivityAssociationNameSecretVersion() {
    return this.getStringAttribute('connectivity_association_name_secret_version');
  }
  public set connectivityAssociationNameSecretVersion(value: string) {
    this._connectivityAssociationNameSecretVersion = value;
  }
  public resetConnectivityAssociationNameSecretVersion() {
    this._connectivityAssociationNameSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityAssociationNameSecretVersionInput() {
    return this._connectivityAssociationNameSecretVersion;
  }
}
export interface CoreCrossConnectGroupMacsecProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}
  */
  readonly encryptionCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}
  */
  readonly isUnprotectedTrafficAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}
  */
  readonly state: string;
  /**
  * primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#primary_key CoreCrossConnectGroup#primary_key}
  */
  readonly primaryKey?: CoreCrossConnectGroupMacsecPropertiesPrimaryKey;
}

export function coreCrossConnectGroupMacsecPropertiesToTerraform(struct?: CoreCrossConnectGroupMacsecPropertiesOutputReference | CoreCrossConnectGroupMacsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_cipher: cdktf.stringToTerraform(struct!.encryptionCipher),
    is_unprotected_traffic_allowed: cdktf.booleanToTerraform(struct!.isUnprotectedTrafficAllowed),
    state: cdktf.stringToTerraform(struct!.state),
    primary_key: coreCrossConnectGroupMacsecPropertiesPrimaryKeyToTerraform(struct!.primaryKey),
  }
}


export function coreCrossConnectGroupMacsecPropertiesToHclTerraform(struct?: CoreCrossConnectGroupMacsecPropertiesOutputReference | CoreCrossConnectGroupMacsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_cipher: {
      value: cdktf.stringToHclTerraform(struct!.encryptionCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_unprotected_traffic_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isUnprotectedTrafficAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: coreCrossConnectGroupMacsecPropertiesPrimaryKeyToHclTerraform(struct!.primaryKey),
      isBlock: true,
      type: "list",
      storageClassType: "CoreCrossConnectGroupMacsecPropertiesPrimaryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreCrossConnectGroupMacsecPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreCrossConnectGroupMacsecProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionCipher = this._encryptionCipher;
    }
    if (this._isUnprotectedTrafficAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUnprotectedTrafficAllowed = this._isUnprotectedTrafficAllowed;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._primaryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreCrossConnectGroupMacsecProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionCipher = undefined;
      this._isUnprotectedTrafficAllowed = undefined;
      this._state = undefined;
      this._primaryKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionCipher = value.encryptionCipher;
      this._isUnprotectedTrafficAllowed = value.isUnprotectedTrafficAllowed;
      this._state = value.state;
      this._primaryKey.internalValue = value.primaryKey;
    }
  }

  // encryption_cipher - computed: true, optional: true, required: false
  private _encryptionCipher?: string; 
  public get encryptionCipher() {
    return this.getStringAttribute('encryption_cipher');
  }
  public set encryptionCipher(value: string) {
    this._encryptionCipher = value;
  }
  public resetEncryptionCipher() {
    this._encryptionCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionCipherInput() {
    return this._encryptionCipher;
  }

  // is_unprotected_traffic_allowed - computed: true, optional: true, required: false
  private _isUnprotectedTrafficAllowed?: boolean | cdktf.IResolvable; 
  public get isUnprotectedTrafficAllowed() {
    return this.getBooleanAttribute('is_unprotected_traffic_allowed');
  }
  public set isUnprotectedTrafficAllowed(value: boolean | cdktf.IResolvable) {
    this._isUnprotectedTrafficAllowed = value;
  }
  public resetIsUnprotectedTrafficAllowed() {
    this._isUnprotectedTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnprotectedTrafficAllowedInput() {
    return this._isUnprotectedTrafficAllowed;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey = new CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(this, "primary_key");
  public get primaryKey() {
    return this._primaryKey;
  }
  public putPrimaryKey(value: CoreCrossConnectGroupMacsecPropertiesPrimaryKey) {
    this._primaryKey.internalValue = value;
  }
  public resetPrimaryKey() {
    this._primaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey.internalValue;
  }
}
export interface CoreCrossConnectGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}
  */
  readonly update?: string;
}

export function coreCrossConnectGroupTimeoutsToTerraform(struct?: CoreCrossConnectGroupTimeouts | cdktf.IResolvable): any {
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


export function coreCrossConnectGroupTimeoutsToHclTerraform(struct?: CoreCrossConnectGroupTimeouts | cdktf.IResolvable): any {
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

export class CoreCrossConnectGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreCrossConnectGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreCrossConnectGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group oci_core_cross_connect_group}
*/
export class CoreCrossConnectGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_cross_connect_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreCrossConnectGroup to import
  * @param importFromId The id of the existing CoreCrossConnectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreCrossConnectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_cross_connect_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_cross_connect_group oci_core_cross_connect_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreCrossConnectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CoreCrossConnectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect_group',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._customerReferenceName = config.customerReferenceName;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._macsecProperties.internalValue = config.macsecProperties;
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

  // customer_reference_name - computed: true, optional: true, required: false
  private _customerReferenceName?: string; 
  public get customerReferenceName() {
    return this.getStringAttribute('customer_reference_name');
  }
  public set customerReferenceName(value: string) {
    this._customerReferenceName = value;
  }
  public resetCustomerReferenceName() {
    this._customerReferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerReferenceNameInput() {
    return this._customerReferenceName;
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

  // oci_logical_device_name - computed: true, optional: false, required: false
  public get ociLogicalDeviceName() {
    return this.getStringAttribute('oci_logical_device_name');
  }

  // oci_physical_device_name - computed: true, optional: false, required: false
  public get ociPhysicalDeviceName() {
    return this.getStringAttribute('oci_physical_device_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // macsec_properties - computed: false, optional: true, required: false
  private _macsecProperties = new CoreCrossConnectGroupMacsecPropertiesOutputReference(this, "macsec_properties");
  public get macsecProperties() {
    return this._macsecProperties;
  }
  public putMacsecProperties(value: CoreCrossConnectGroupMacsecProperties) {
    this._macsecProperties.internalValue = value;
  }
  public resetMacsecProperties() {
    this._macsecProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecPropertiesInput() {
    return this._macsecProperties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreCrossConnectGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreCrossConnectGroupTimeouts) {
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
      customer_reference_name: cdktf.stringToTerraform(this._customerReferenceName),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      macsec_properties: coreCrossConnectGroupMacsecPropertiesToTerraform(this._macsecProperties.internalValue),
      timeouts: coreCrossConnectGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      customer_reference_name: {
        value: cdktf.stringToHclTerraform(this._customerReferenceName),
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
      macsec_properties: {
        value: coreCrossConnectGroupMacsecPropertiesToHclTerraform(this._macsecProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreCrossConnectGroupMacsecPropertiesList",
      },
      timeouts: {
        value: coreCrossConnectGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreCrossConnectGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
