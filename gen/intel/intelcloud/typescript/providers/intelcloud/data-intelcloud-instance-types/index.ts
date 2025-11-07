// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntelcloudInstanceTypesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataIntelcloudInstanceTypesInstanceTypes {
}

export function dataIntelcloudInstanceTypesInstanceTypesToTerraform(struct?: DataIntelcloudInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntelcloudInstanceTypesInstanceTypesToHclTerraform(struct?: DataIntelcloudInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntelcloudInstanceTypesInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntelcloudInstanceTypesInstanceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntelcloudInstanceTypesInstanceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instance_category - computed: true, optional: false, required: false
  public get instanceCategory() {
    return this.getStringAttribute('instance_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIntelcloudInstanceTypesInstanceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntelcloudInstanceTypesInstanceTypesOutputReference {
    return new DataIntelcloudInstanceTypesInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/instance_types intelcloud_instance_types}
*/
export class DataIntelcloudInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntelcloudInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntelcloudInstanceTypes to import
  * @param importFromId The id of the existing DataIntelcloudInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntelcloudInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/instance_types intelcloud_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntelcloudInstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntelcloudInstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intelcloud_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // instance_types - computed: true, optional: false, required: false
  private _instanceTypes = new DataIntelcloudInstanceTypesInstanceTypesList(this, "instance_types", false);
  public get instanceTypes() {
    return this._instanceTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
