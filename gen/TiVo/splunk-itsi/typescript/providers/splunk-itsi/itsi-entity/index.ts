// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItsiEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of Field/Value pairs that identify the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#aliases ItsiEntity#aliases}
  */
  readonly aliases?: { [key: string]: string };
  /**
  * User defined description of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#description ItsiEntity#description}
  */
  readonly description?: string;
  /**
  * A set of _key values for each entity type associated with the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#entity_type_ids ItsiEntity#entity_type_ids}
  */
  readonly entityTypeIds?: string[];
  /**
  * Map of Field/Value pairs that provide information/description for the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#info ItsiEntity#info}
  */
  readonly info?: { [key: string]: string };
  /**
  * Name of the entity. Can be any unique value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#title ItsiEntity#title}
  */
  readonly title: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#timeouts ItsiEntity#timeouts}
  */
  readonly timeouts?: ItsiEntityTimeouts;
}
export interface ItsiEntityTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#create ItsiEntity#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#delete ItsiEntity#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#read ItsiEntity#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#update ItsiEntity#update}
  */
  readonly update?: string;
}

export function itsiEntityTimeoutsToTerraform(struct?: ItsiEntityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function itsiEntityTimeoutsToHclTerraform(struct?: ItsiEntityTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ItsiEntityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiEntityTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity itsi_entity}
*/
export class ItsiEntity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItsiEntity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItsiEntity to import
  * @param importFromId The id of the existing ItsiEntity that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItsiEntity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity itsi_entity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItsiEntityConfig
  */
  public constructor(scope: Construct, id: string, config: ItsiEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'itsi_entity',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._description = config.description;
    this._entityTypeIds = config.entityTypeIds;
    this._info = config.info;
    this._title = config.title;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: true, optional: true, required: false
  private _aliases?: { [key: string]: string }; 
  public get aliases() {
    return this.getStringMapAttribute('aliases');
  }
  public set aliases(value: { [key: string]: string }) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
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

  // entity_type_ids - computed: true, optional: true, required: false
  private _entityTypeIds?: string[]; 
  public get entityTypeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_type_ids'));
  }
  public set entityTypeIds(value: string[]) {
    this._entityTypeIds = value;
  }
  public resetEntityTypeIds() {
    this._entityTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeIdsInput() {
    return this._entityTypeIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: true, required: false
  private _info?: { [key: string]: string }; 
  public get info() {
    return this.getStringMapAttribute('info');
  }
  public set info(value: { [key: string]: string }) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItsiEntityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItsiEntityTimeouts) {
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
      aliases: cdktf.hashMapper(cdktf.stringToTerraform)(this._aliases),
      description: cdktf.stringToTerraform(this._description),
      entity_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entityTypeIds),
      info: cdktf.hashMapper(cdktf.stringToTerraform)(this._info),
      title: cdktf.stringToTerraform(this._title),
      timeouts: itsiEntityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._aliases),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entityTypeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      info: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._info),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: itsiEntityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiEntityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
