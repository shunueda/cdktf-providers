// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityMonitoredEntitySecondaryMonTopkAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk#id VisibilityMonitoredEntitySecondaryMonTopkA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk#uuid VisibilityMonitoredEntitySecondaryMonTopkA#uuid}
  */
  readonly uuid?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk#sources VisibilityMonitoredEntitySecondaryMonTopkA#sources}
  */
  readonly sources?: VisibilityMonitoredEntitySecondaryMonTopkSourcesA;
}
export interface VisibilityMonitoredEntitySecondaryMonTopkSourcesA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk#uuid VisibilityMonitoredEntitySecondaryMonTopkA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitoredEntitySecondaryMonTopkSourcesAToTerraform(struct?: VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference | VisibilityMonitoredEntitySecondaryMonTopkSourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitoredEntitySecondaryMonTopkSourcesAToHclTerraform(struct?: VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference | VisibilityMonitoredEntitySecondaryMonTopkSourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntitySecondaryMonTopkSourcesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntitySecondaryMonTopkSourcesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk thunder_visibility_monitored_entity_secondary_mon_topk}
*/
export class VisibilityMonitoredEntitySecondaryMonTopkA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_secondary_mon_topk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityMonitoredEntitySecondaryMonTopkA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityMonitoredEntitySecondaryMonTopkA to import
  * @param importFromId The id of the existing VisibilityMonitoredEntitySecondaryMonTopkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityMonitoredEntitySecondaryMonTopkA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_secondary_mon_topk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitored_entity_secondary_mon_topk thunder_visibility_monitored_entity_secondary_mon_topk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityMonitoredEntitySecondaryMonTopkAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityMonitoredEntitySecondaryMonTopkAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_secondary_mon_topk',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._sources.internalValue = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: VisibilityMonitoredEntitySecondaryMonTopkSourcesA) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sources: visibilityMonitoredEntitySecondaryMonTopkSourcesAToTerraform(this._sources.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources: {
        value: visibilityMonitoredEntitySecondaryMonTopkSourcesAToHclTerraform(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitoredEntitySecondaryMonTopkSourcesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
