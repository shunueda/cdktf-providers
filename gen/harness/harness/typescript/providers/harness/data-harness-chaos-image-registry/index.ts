// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessChaosImageRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to check if override is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry#check_override DataHarnessChaosImageRegistry#check_override}
  */
  readonly checkOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry#id DataHarnessChaosImageRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The infrastructure ID to set up the image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry#infra_id DataHarnessChaosImageRegistry#infra_id}
  */
  readonly infraId?: string;
  /**
  * The organization ID of the image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry#org_id DataHarnessChaosImageRegistry#org_id}
  */
  readonly orgId?: string;
  /**
  * The project ID of the image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry#project_id DataHarnessChaosImageRegistry#project_id}
  */
  readonly projectId?: string;
}
export interface DataHarnessChaosImageRegistryCustomImages {
}

export function dataHarnessChaosImageRegistryCustomImagesToTerraform(struct?: DataHarnessChaosImageRegistryCustomImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessChaosImageRegistryCustomImagesToHclTerraform(struct?: DataHarnessChaosImageRegistryCustomImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessChaosImageRegistryCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessChaosImageRegistryCustomImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessChaosImageRegistryCustomImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddcr - computed: true, optional: false, required: false
  public get ddcr() {
    return this.getStringAttribute('ddcr');
  }

  // ddcr_fault - computed: true, optional: false, required: false
  public get ddcrFault() {
    return this.getStringAttribute('ddcr_fault');
  }

  // ddcr_lib - computed: true, optional: false, required: false
  public get ddcrLib() {
    return this.getStringAttribute('ddcr_lib');
  }

  // log_watcher - computed: true, optional: false, required: false
  public get logWatcher() {
    return this.getStringAttribute('log_watcher');
  }
}

export class DataHarnessChaosImageRegistryCustomImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessChaosImageRegistryCustomImagesOutputReference {
    return new DataHarnessChaosImageRegistryCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry harness_chaos_image_registry}
*/
export class DataHarnessChaosImageRegistry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_chaos_image_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessChaosImageRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessChaosImageRegistry to import
  * @param importFromId The id of the existing DataHarnessChaosImageRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessChaosImageRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_chaos_image_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/chaos_image_registry harness_chaos_image_registry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessChaosImageRegistryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHarnessChaosImageRegistryConfig = {}) {
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
    this._checkOverride = config.checkOverride;
    this._id = config.id;
    this._infraId = config.infraId;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_override - computed: false, optional: true, required: false
  private _checkOverride?: boolean | cdktf.IResolvable; 
  public get checkOverride() {
    return this.getBooleanAttribute('check_override');
  }
  public set checkOverride(value: boolean | cdktf.IResolvable) {
    this._checkOverride = value;
  }
  public resetCheckOverride() {
    this._checkOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkOverrideInput() {
    return this._checkOverride;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_images - computed: true, optional: false, required: false
  private _customImages = new DataHarnessChaosImageRegistryCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_override_allowed - computed: true, optional: false, required: false
  public get isOverrideAllowed() {
    return this.getBooleanAttribute('is_override_allowed');
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
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

  // override_blocked_by_scope - computed: true, optional: false, required: false
  public get overrideBlockedByScope() {
    return this.getStringAttribute('override_blocked_by_scope');
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

  // registry_account - computed: true, optional: false, required: false
  public get registryAccount() {
    return this.getStringAttribute('registry_account');
  }

  // registry_server - computed: true, optional: false, required: false
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // use_custom_images - computed: true, optional: false, required: false
  public get useCustomImages() {
    return this.getBooleanAttribute('use_custom_images');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_override: cdktf.booleanToTerraform(this._checkOverride),
      id: cdktf.stringToTerraform(this._id),
      infra_id: cdktf.stringToTerraform(this._infraId),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_override: {
        value: cdktf.booleanToHclTerraform(this._checkOverride),
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
      infra_id: {
        value: cdktf.stringToHclTerraform(this._infraId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
