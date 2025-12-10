// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChaosImageRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#id ChaosImageRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The infrastructure ID to set up the image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#infra_id ChaosImageRegistry#infra_id}
  */
  readonly infraId?: string;
  /**
  * Whether this is the default registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#is_default ChaosImageRegistry#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Whether override is allowed for this registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#is_override_allowed ChaosImageRegistry#is_override_allowed}
  */
  readonly isOverrideAllowed?: boolean | cdktf.IResolvable;
  /**
  * Whether the registry is private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#is_private ChaosImageRegistry#is_private}
  */
  readonly isPrivate: boolean | cdktf.IResolvable;
  /**
  * The organization ID of the image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#org_id ChaosImageRegistry#org_id}
  */
  readonly orgId?: string;
  /**
  * The project ID of the image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#project_id ChaosImageRegistry#project_id}
  */
  readonly projectId?: string;
  /**
  * The registry account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#registry_account ChaosImageRegistry#registry_account}
  */
  readonly registryAccount: string;
  /**
  * The registry server URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#registry_server ChaosImageRegistry#registry_server}
  */
  readonly registryServer: string;
  /**
  * The name of the secret for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#secret_name ChaosImageRegistry#secret_name}
  */
  readonly secretName?: string;
  /**
  * Whether to use custom images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#use_custom_images ChaosImageRegistry#use_custom_images}
  */
  readonly useCustomImages?: boolean | cdktf.IResolvable;
  /**
  * custom_images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#custom_images ChaosImageRegistry#custom_images}
  */
  readonly customImages?: ChaosImageRegistryCustomImages[] | cdktf.IResolvable;
}
export interface ChaosImageRegistryCustomImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#ddcr ChaosImageRegistry#ddcr}
  */
  readonly ddcr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#ddcr_fault ChaosImageRegistry#ddcr_fault}
  */
  readonly ddcrFault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#ddcr_lib ChaosImageRegistry#ddcr_lib}
  */
  readonly ddcrLib?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#log_watcher ChaosImageRegistry#log_watcher}
  */
  readonly logWatcher?: string;
}

export function chaosImageRegistryCustomImagesToTerraform(struct?: ChaosImageRegistryCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddcr: cdktf.stringToTerraform(struct!.ddcr),
    ddcr_fault: cdktf.stringToTerraform(struct!.ddcrFault),
    ddcr_lib: cdktf.stringToTerraform(struct!.ddcrLib),
    log_watcher: cdktf.stringToTerraform(struct!.logWatcher),
  }
}


export function chaosImageRegistryCustomImagesToHclTerraform(struct?: ChaosImageRegistryCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddcr: {
      value: cdktf.stringToHclTerraform(struct!.ddcr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddcr_fault: {
      value: cdktf.stringToHclTerraform(struct!.ddcrFault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddcr_lib: {
      value: cdktf.stringToHclTerraform(struct!.ddcrLib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_watcher: {
      value: cdktf.stringToHclTerraform(struct!.logWatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosImageRegistryCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChaosImageRegistryCustomImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddcr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddcr = this._ddcr;
    }
    if (this._ddcrFault !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddcrFault = this._ddcrFault;
    }
    if (this._ddcrLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddcrLib = this._ddcrLib;
    }
    if (this._logWatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.logWatcher = this._logWatcher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosImageRegistryCustomImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddcr = undefined;
      this._ddcrFault = undefined;
      this._ddcrLib = undefined;
      this._logWatcher = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddcr = value.ddcr;
      this._ddcrFault = value.ddcrFault;
      this._ddcrLib = value.ddcrLib;
      this._logWatcher = value.logWatcher;
    }
  }

  // ddcr - computed: true, optional: true, required: false
  private _ddcr?: string; 
  public get ddcr() {
    return this.getStringAttribute('ddcr');
  }
  public set ddcr(value: string) {
    this._ddcr = value;
  }
  public resetDdcr() {
    this._ddcr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddcrInput() {
    return this._ddcr;
  }

  // ddcr_fault - computed: true, optional: true, required: false
  private _ddcrFault?: string; 
  public get ddcrFault() {
    return this.getStringAttribute('ddcr_fault');
  }
  public set ddcrFault(value: string) {
    this._ddcrFault = value;
  }
  public resetDdcrFault() {
    this._ddcrFault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddcrFaultInput() {
    return this._ddcrFault;
  }

  // ddcr_lib - computed: true, optional: true, required: false
  private _ddcrLib?: string; 
  public get ddcrLib() {
    return this.getStringAttribute('ddcr_lib');
  }
  public set ddcrLib(value: string) {
    this._ddcrLib = value;
  }
  public resetDdcrLib() {
    this._ddcrLib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddcrLibInput() {
    return this._ddcrLib;
  }

  // log_watcher - computed: true, optional: true, required: false
  private _logWatcher?: string; 
  public get logWatcher() {
    return this.getStringAttribute('log_watcher');
  }
  public set logWatcher(value: string) {
    this._logWatcher = value;
  }
  public resetLogWatcher() {
    this._logWatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logWatcherInput() {
    return this._logWatcher;
  }
}

export class ChaosImageRegistryCustomImagesList extends cdktf.ComplexList {
  public internalValue? : ChaosImageRegistryCustomImages[] | cdktf.IResolvable

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
  public get(index: number): ChaosImageRegistryCustomImagesOutputReference {
    return new ChaosImageRegistryCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry harness_chaos_image_registry}
*/
export class ChaosImageRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_chaos_image_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChaosImageRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChaosImageRegistry to import
  * @param importFromId The id of the existing ChaosImageRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChaosImageRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_chaos_image_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/chaos_image_registry harness_chaos_image_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChaosImageRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: ChaosImageRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_chaos_image_registry',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._infraId = config.infraId;
    this._isDefault = config.isDefault;
    this._isOverrideAllowed = config.isOverrideAllowed;
    this._isPrivate = config.isPrivate;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._registryAccount = config.registryAccount;
    this._registryServer = config.registryServer;
    this._secretName = config.secretName;
    this._useCustomImages = config.useCustomImages;
    this._customImages.internalValue = config.customImages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // infra_id - computed: false, optional: true, required: false
  private _infraId?: string; 
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }
  public set infraId(value: string) {
    this._infraId = value;
  }
  public resetInfraId() {
    this._infraId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdInput() {
    return this._infraId;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_override_allowed - computed: false, optional: true, required: false
  private _isOverrideAllowed?: boolean | cdktf.IResolvable; 
  public get isOverrideAllowed() {
    return this.getBooleanAttribute('is_override_allowed');
  }
  public set isOverrideAllowed(value: boolean | cdktf.IResolvable) {
    this._isOverrideAllowed = value;
  }
  public resetIsOverrideAllowed() {
    this._isOverrideAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideAllowedInput() {
    return this._isOverrideAllowed;
  }

  // is_private - computed: false, optional: false, required: true
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // registry_account - computed: false, optional: false, required: true
  private _registryAccount?: string; 
  public get registryAccount() {
    return this.getStringAttribute('registry_account');
  }
  public set registryAccount(value: string) {
    this._registryAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAccountInput() {
    return this._registryAccount;
  }

  // registry_server - computed: false, optional: false, required: true
  private _registryServer?: string; 
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }
  public set registryServer(value: string) {
    this._registryServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryServerInput() {
    return this._registryServer;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // use_custom_images - computed: false, optional: true, required: false
  private _useCustomImages?: boolean | cdktf.IResolvable; 
  public get useCustomImages() {
    return this.getBooleanAttribute('use_custom_images');
  }
  public set useCustomImages(value: boolean | cdktf.IResolvable) {
    this._useCustomImages = value;
  }
  public resetUseCustomImages() {
    this._useCustomImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomImagesInput() {
    return this._useCustomImages;
  }

  // custom_images - computed: false, optional: true, required: false
  private _customImages = new ChaosImageRegistryCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: ChaosImageRegistryCustomImages[] | cdktf.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      infra_id: cdktf.stringToTerraform(this._infraId),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_override_allowed: cdktf.booleanToTerraform(this._isOverrideAllowed),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      registry_account: cdktf.stringToTerraform(this._registryAccount),
      registry_server: cdktf.stringToTerraform(this._registryServer),
      secret_name: cdktf.stringToTerraform(this._secretName),
      use_custom_images: cdktf.booleanToTerraform(this._useCustomImages),
      custom_images: cdktf.listMapper(chaosImageRegistryCustomImagesToTerraform, true)(this._customImages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infra_id: {
        value: cdktf.stringToHclTerraform(this._infraId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_override_allowed: {
        value: cdktf.booleanToHclTerraform(this._isOverrideAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_account: {
        value: cdktf.stringToHclTerraform(this._registryAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_server: {
        value: cdktf.stringToHclTerraform(this._registryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_custom_images: {
        value: cdktf.booleanToHclTerraform(this._useCustomImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_images: {
        value: cdktf.listMapperHcl(chaosImageRegistryCustomImagesToHclTerraform, true)(this._customImages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChaosImageRegistryCustomImagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
