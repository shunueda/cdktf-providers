// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcS3ConfiguratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disk type of the S3 configurator (`nvme`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator#disk_type DataTwcS3Configurator#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator#id DataTwcS3Configurator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the S3 configurator (`ru-1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator#location DataTwcS3Configurator#location}
  */
  readonly location?: string;
  /**
  * Storage class of the S3 configurator (`cold`, `hot`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator#storage_class DataTwcS3Configurator#storage_class}
  */
  readonly storageClass?: string;
  /**
  * requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator#requirements DataTwcS3Configurator#requirements}
  */
  readonly requirements?: DataTwcS3ConfiguratorRequirements[] | cdktf.IResolvable;
}
export interface DataTwcS3ConfiguratorRequirements {
}

export function dataTwcS3ConfiguratorRequirementsToTerraform(struct?: DataTwcS3ConfiguratorRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwcS3ConfiguratorRequirementsToHclTerraform(struct?: DataTwcS3ConfiguratorRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwcS3ConfiguratorRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTwcS3ConfiguratorRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwcS3ConfiguratorRequirements | cdktf.IResolvable | undefined) {
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

  // disk_max - computed: true, optional: false, required: false
  public get diskMax() {
    return this.getNumberAttribute('disk_max');
  }

  // disk_min - computed: true, optional: false, required: false
  public get diskMin() {
    return this.getNumberAttribute('disk_min');
  }

  // disk_step - computed: true, optional: false, required: false
  public get diskStep() {
    return this.getNumberAttribute('disk_step');
  }
}

export class DataTwcS3ConfiguratorRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataTwcS3ConfiguratorRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataTwcS3ConfiguratorRequirementsOutputReference {
    return new DataTwcS3ConfiguratorRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator twc_s3_configurator}
*/
export class DataTwcS3Configurator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_s3_configurator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcS3Configurator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcS3Configurator to import
  * @param importFromId The id of the existing DataTwcS3Configurator that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcS3Configurator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_s3_configurator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_s3_configurator twc_s3_configurator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcS3ConfiguratorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcS3ConfiguratorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_s3_configurator',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskType = config.diskType;
    this._id = config.id;
    this._location = config.location;
    this._storageClass = config.storageClass;
    this._requirements.internalValue = config.requirements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements = new DataTwcS3ConfiguratorRequirementsList(this, "requirements", false);
  public get requirements() {
    return this._requirements;
  }
  public putRequirements(value: DataTwcS3ConfiguratorRequirements[] | cdktf.IResolvable) {
    this._requirements.internalValue = value;
  }
  public resetRequirements() {
    this._requirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      requirements: cdktf.listMapper(dataTwcS3ConfiguratorRequirementsToTerraform, true)(this._requirements.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirements: {
        value: cdktf.listMapperHcl(dataTwcS3ConfiguratorRequirementsToHclTerraform, true)(this._requirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcS3ConfiguratorRequirementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
