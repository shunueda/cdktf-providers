// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_client_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnClientConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * CDN traffic usage limit in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_client_config#utilization_level CdnClientConfig#utilization_level}
  */
  readonly utilizationLevel?: number;
}
export interface CdnClientConfigService {
}

export function cdnClientConfigServiceToTerraform(struct?: CdnClientConfigService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnClientConfigServiceToHclTerraform(struct?: CdnClientConfigService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnClientConfigServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnClientConfigService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnClientConfigService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }
}

export class CdnClientConfigServiceList extends cdktf.ComplexList {

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
  public get(index: number): CdnClientConfigServiceOutputReference {
    return new CdnClientConfigServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_client_config gcore_cdn_client_config}
*/
export class CdnClientConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_client_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnClientConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnClientConfig to import
  * @param importFromId The id of the existing CdnClientConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_client_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnClientConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_client_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_client_config gcore_cdn_client_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnClientConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CdnClientConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_client_config',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3',
        providerVersionConstraint: '0.31.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._utilizationLevel = config.utilizationLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_suspend_enabled - computed: true, optional: false, required: false
  public get autoSuspendEnabled() {
    return this.getBooleanAttribute('auto_suspend_enabled');
  }

  // cdn_resources_rules_max_count - computed: true, optional: false, required: false
  public get cdnResourcesRulesMaxCount() {
    return this.getNumberAttribute('cdn_resources_rules_max_count');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service - computed: true, optional: false, required: false
  private _service = new CdnClientConfigServiceList(this, "service", false);
  public get service() {
    return this._service;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // use_balancer - computed: true, optional: false, required: false
  public get useBalancer() {
    return this.getBooleanAttribute('use_balancer');
  }

  // utilization_level - computed: false, optional: true, required: false
  private _utilizationLevel?: number; 
  public get utilizationLevel() {
    return this.getNumberAttribute('utilization_level');
  }
  public set utilizationLevel(value: number) {
    this._utilizationLevel = value;
  }
  public resetUtilizationLevel() {
    this._utilizationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationLevelInput() {
    return this._utilizationLevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      utilization_level: cdktf.numberToTerraform(this._utilizationLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      utilization_level: {
        value: cdktf.numberToHclTerraform(this._utilizationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
