// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/archive_retentions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveRetentionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of 4 retentions. The first retention is the default retention and can't be renamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/archive_retentions#retentions ArchiveRetentions#retentions}
  */
  readonly retentions: ArchiveRetentionsRetentions[] | cdktf.IResolvable;
}
export interface ArchiveRetentionsRetentions {
  /**
  * The retention name. If not set, the retention will be named by backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/archive_retentions#name ArchiveRetentions#name}
  */
  readonly name?: string;
}

export function archiveRetentionsRetentionsToTerraform(struct?: ArchiveRetentionsRetentions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function archiveRetentionsRetentionsToHclTerraform(struct?: ArchiveRetentionsRetentions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveRetentionsRetentionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArchiveRetentionsRetentions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveRetentionsRetentions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }
}

export class ArchiveRetentionsRetentionsList extends cdktf.ComplexList {
  public internalValue? : ArchiveRetentionsRetentions[] | cdktf.IResolvable

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
  public get(index: number): ArchiveRetentionsRetentionsOutputReference {
    return new ArchiveRetentionsRetentionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/archive_retentions coralogix_archive_retentions}
*/
export class ArchiveRetentions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_archive_retentions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchiveRetentions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchiveRetentions to import
  * @param importFromId The id of the existing ArchiveRetentions that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/archive_retentions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchiveRetentions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_archive_retentions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/archive_retentions coralogix_archive_retentions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchiveRetentionsConfig
  */
  public constructor(scope: Construct, id: string, config: ArchiveRetentionsConfig) {
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
    this._retentions.internalValue = config.retentions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retentions - computed: false, optional: false, required: true
  private _retentions = new ArchiveRetentionsRetentionsList(this, "retentions", false);
  public get retentions() {
    return this._retentions;
  }
  public putRetentions(value: ArchiveRetentionsRetentions[] | cdktf.IResolvable) {
    this._retentions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionsInput() {
    return this._retentions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      retentions: cdktf.listMapper(archiveRetentionsRetentionsToTerraform, false)(this._retentions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      retentions: {
        value: cdktf.listMapperHcl(archiveRetentionsRetentionsToHclTerraform, false)(this._retentions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveRetentionsRetentionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
