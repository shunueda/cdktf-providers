// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsLogAnalyticsEntityAssociationsRemoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#association_entities LogAnalyticsLogAnalyticsEntityAssociationsRemove#association_entities}
  */
  readonly associationEntities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#id LogAnalyticsLogAnalyticsEntityAssociationsRemove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#log_analytics_entity_id LogAnalyticsLogAnalyticsEntityAssociationsRemove#log_analytics_entity_id}
  */
  readonly logAnalyticsEntityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#namespace LogAnalyticsLogAnalyticsEntityAssociationsRemove#namespace}
  */
  readonly namespace: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#timeouts LogAnalyticsLogAnalyticsEntityAssociationsRemove#timeouts}
  */
  readonly timeouts?: LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts;
}
export interface LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#create LogAnalyticsLogAnalyticsEntityAssociationsRemove#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#delete LogAnalyticsLogAnalyticsEntityAssociationsRemove#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#update LogAnalyticsLogAnalyticsEntityAssociationsRemove#update}
  */
  readonly update?: string;
}

export function logAnalyticsLogAnalyticsEntityAssociationsRemoveTimeoutsToTerraform(struct?: LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts | cdktf.IResolvable): any {
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


export function logAnalyticsLogAnalyticsEntityAssociationsRemoveTimeoutsToHclTerraform(struct?: LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts | cdktf.IResolvable): any {
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

export class LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove oci_log_analytics_log_analytics_entity_associations_remove}
*/
export class LogAnalyticsLogAnalyticsEntityAssociationsRemove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_entity_associations_remove";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntityAssociationsRemove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsLogAnalyticsEntityAssociationsRemove to import
  * @param importFromId The id of the existing LogAnalyticsLogAnalyticsEntityAssociationsRemove that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsLogAnalyticsEntityAssociationsRemove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_entity_associations_remove", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_entity_associations_remove oci_log_analytics_log_analytics_entity_associations_remove} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsLogAnalyticsEntityAssociationsRemoveConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsLogAnalyticsEntityAssociationsRemoveConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_entity_associations_remove',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associationEntities = config.associationEntities;
    this._id = config.id;
    this._logAnalyticsEntityId = config.logAnalyticsEntityId;
    this._namespace = config.namespace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_entities - computed: false, optional: false, required: true
  private _associationEntities?: string[]; 
  public get associationEntities() {
    return this.getListAttribute('association_entities');
  }
  public set associationEntities(value: string[]) {
    this._associationEntities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationEntitiesInput() {
    return this._associationEntities;
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

  // log_analytics_entity_id - computed: false, optional: false, required: true
  private _logAnalyticsEntityId?: string; 
  public get logAnalyticsEntityId() {
    return this.getStringAttribute('log_analytics_entity_id');
  }
  public set logAnalyticsEntityId(value: string) {
    this._logAnalyticsEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsEntityIdInput() {
    return this._logAnalyticsEntityId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts) {
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
      association_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associationEntities),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_entity_id: cdktf.stringToTerraform(this._logAnalyticsEntityId),
      namespace: cdktf.stringToTerraform(this._namespace),
      timeouts: logAnalyticsLogAnalyticsEntityAssociationsRemoveTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      association_entities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associationEntities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_entity_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: logAnalyticsLogAnalyticsEntityAssociationsRemoveTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsLogAnalyticsEntityAssociationsRemoveTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
