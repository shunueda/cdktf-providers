// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayServiceAccountV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The name of the service account, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2#name GatewayServiceAccountV2#name}
  */
  readonly name: string;
  /**
  * Service account specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2#spec GatewayServiceAccountV2#spec}
  */
  readonly spec: GatewayServiceAccountV2Spec;
  /**
  * The name of the virtual cluster the service account belongs to. If not provided, the service account will be created in the default passthrough virtual cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2#vcluster GatewayServiceAccountV2#vcluster}
  */
  readonly vcluster?: string;
}
export interface GatewayServiceAccountV2Spec {
  /**
  * Set of the external names of the service account. Required if spec.type is set to EXTERNAL. An external service account should have exactly one external name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2#external_names GatewayServiceAccountV2#external_names}
  */
  readonly externalNames?: string[];
  /**
  * The type of the Service Account. Can only be either LOCAL or EXTERNAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2#type GatewayServiceAccountV2#type}
  */
  readonly type: string;
}

export function gatewayServiceAccountV2SpecToTerraform(struct?: GatewayServiceAccountV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalNames),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayServiceAccountV2SpecToHclTerraform(struct?: GatewayServiceAccountV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayServiceAccountV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayServiceAccountV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNames = this._externalNames;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayServiceAccountV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalNames = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalNames = value.externalNames;
      this._type = value.type;
    }
  }

  // external_names - computed: true, optional: true, required: false
  private _externalNames?: string[]; 
  public get externalNames() {
    return cdktf.Fn.tolist(this.getListAttribute('external_names'));
  }
  public set externalNames(value: string[]) {
    this._externalNames = value;
  }
  public resetExternalNames() {
    this._externalNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNamesInput() {
    return this._externalNames;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2 conduktor_gateway_service_account_v2}
*/
export class GatewayServiceAccountV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_gateway_service_account_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayServiceAccountV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayServiceAccountV2 to import
  * @param importFromId The id of the existing GatewayServiceAccountV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayServiceAccountV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_gateway_service_account_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/gateway_service_account_v2 conduktor_gateway_service_account_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayServiceAccountV2Config
  */
  public constructor(scope: Construct, id: string, config: GatewayServiceAccountV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_gateway_service_account_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._spec.internalValue = config.spec;
    this._vcluster = config.vcluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new GatewayServiceAccountV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GatewayServiceAccountV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // vcluster - computed: true, optional: true, required: false
  private _vcluster?: string; 
  public get vcluster() {
    return this.getStringAttribute('vcluster');
  }
  public set vcluster(value: string) {
    this._vcluster = value;
  }
  public resetVcluster() {
    this._vcluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterInput() {
    return this._vcluster;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      spec: gatewayServiceAccountV2SpecToTerraform(this._spec.internalValue),
      vcluster: cdktf.stringToTerraform(this._vcluster),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: gatewayServiceAccountV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayServiceAccountV2Spec",
      },
      vcluster: {
        value: cdktf.stringToHclTerraform(this._vcluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
