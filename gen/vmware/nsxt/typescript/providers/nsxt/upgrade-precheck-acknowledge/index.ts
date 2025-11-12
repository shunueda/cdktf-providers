// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradePrecheckAcknowledgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge#id UpgradePrecheckAcknowledge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of precheck warnings that need to be acknowledged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge#precheck_ids UpgradePrecheckAcknowledge#precheck_ids}
  */
  readonly precheckIds: string[];
  /**
  * Target system version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge#target_version UpgradePrecheckAcknowledge#target_version}
  */
  readonly targetVersion: string;
}
export interface UpgradePrecheckAcknowledgePrecheckWarnings {
}

export function upgradePrecheckAcknowledgePrecheckWarningsToTerraform(struct?: UpgradePrecheckAcknowledgePrecheckWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function upgradePrecheckAcknowledgePrecheckWarningsToHclTerraform(struct?: UpgradePrecheckAcknowledgePrecheckWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpgradePrecheckAcknowledgePrecheckWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradePrecheckAcknowledgePrecheckWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradePrecheckAcknowledgePrecheckWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_acknowledged - computed: true, optional: false, required: false
  public get isAcknowledged() {
    return this.getBooleanAttribute('is_acknowledged');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class UpgradePrecheckAcknowledgePrecheckWarningsList extends cdktf.ComplexList {

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
  public get(index: number): UpgradePrecheckAcknowledgePrecheckWarningsOutputReference {
    return new UpgradePrecheckAcknowledgePrecheckWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge nsxt_upgrade_precheck_acknowledge}
*/
export class UpgradePrecheckAcknowledge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_upgrade_precheck_acknowledge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradePrecheckAcknowledge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradePrecheckAcknowledge to import
  * @param importFromId The id of the existing UpgradePrecheckAcknowledge that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradePrecheckAcknowledge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_upgrade_precheck_acknowledge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_precheck_acknowledge nsxt_upgrade_precheck_acknowledge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradePrecheckAcknowledgeConfig
  */
  public constructor(scope: Construct, id: string, config: UpgradePrecheckAcknowledgeConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_upgrade_precheck_acknowledge',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._precheckIds = config.precheckIds;
    this._targetVersion = config.targetVersion;
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

  // precheck_ids - computed: false, optional: false, required: true
  private _precheckIds?: string[]; 
  public get precheckIds() {
    return this.getListAttribute('precheck_ids');
  }
  public set precheckIds(value: string[]) {
    this._precheckIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precheckIdsInput() {
    return this._precheckIds;
  }

  // precheck_warnings - computed: true, optional: false, required: false
  private _precheckWarnings = new UpgradePrecheckAcknowledgePrecheckWarningsList(this, "precheck_warnings", false);
  public get precheckWarnings() {
    return this._precheckWarnings;
  }

  // target_version - computed: false, optional: false, required: true
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      precheck_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._precheckIds),
      target_version: cdktf.stringToTerraform(this._targetVersion),
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
      precheck_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._precheckIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
