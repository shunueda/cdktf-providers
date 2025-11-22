// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/archive_retentions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixArchiveRetentionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCoralogixArchiveRetentionsRetentions {
}

export function dataCoralogixArchiveRetentionsRetentionsToTerraform(struct?: DataCoralogixArchiveRetentionsRetentions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixArchiveRetentionsRetentionsToHclTerraform(struct?: DataCoralogixArchiveRetentionsRetentions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixArchiveRetentionsRetentionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixArchiveRetentionsRetentions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixArchiveRetentionsRetentions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }
}

export class DataCoralogixArchiveRetentionsRetentionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixArchiveRetentionsRetentionsOutputReference {
    return new DataCoralogixArchiveRetentionsRetentionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/archive_retentions coralogix_archive_retentions}
*/
export class DataCoralogixArchiveRetentions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_archive_retentions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixArchiveRetentions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixArchiveRetentions to import
  * @param importFromId The id of the existing DataCoralogixArchiveRetentions that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/archive_retentions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixArchiveRetentions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_archive_retentions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/archive_retentions coralogix_archive_retentions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixArchiveRetentionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixArchiveRetentionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_archive_retentions',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retentions - computed: true, optional: false, required: false
  private _retentions = new DataCoralogixArchiveRetentionsRetentionsList(this, "retentions", false);
  public get retentions() {
    return this._retentions;
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
