// https://registry.terraform.io/providers/honeycombio/honeycombio/0.43.0/docs/data-sources/auth_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHoneycombioAuthMetadataConfig extends cdktf.TerraformMetaArguments {
}
export interface DataHoneycombioAuthMetadataApiKeyAccess {
}

export function dataHoneycombioAuthMetadataApiKeyAccessToTerraform(struct?: DataHoneycombioAuthMetadataApiKeyAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHoneycombioAuthMetadataApiKeyAccessToHclTerraform(struct?: DataHoneycombioAuthMetadataApiKeyAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHoneycombioAuthMetadataApiKeyAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHoneycombioAuthMetadataApiKeyAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioAuthMetadataApiKeyAccess | cdktf.IResolvable | undefined) {
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

  // boards - computed: true, optional: false, required: false
  public get boards() {
    return this.getBooleanAttribute('boards');
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getBooleanAttribute('columns');
  }

  // datasets - computed: true, optional: false, required: false
  public get datasets() {
    return this.getBooleanAttribute('datasets');
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.getBooleanAttribute('events');
  }

  // markers - computed: true, optional: false, required: false
  public get markers() {
    return this.getBooleanAttribute('markers');
  }

  // queries - computed: true, optional: false, required: false
  public get queries() {
    return this.getBooleanAttribute('queries');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getBooleanAttribute('recipients');
  }

  // slos - computed: true, optional: false, required: false
  public get slos() {
    return this.getBooleanAttribute('slos');
  }

  // triggers - computed: true, optional: false, required: false
  public get triggers() {
    return this.getBooleanAttribute('triggers');
  }
}
export interface DataHoneycombioAuthMetadataEnvironment {
}

export function dataHoneycombioAuthMetadataEnvironmentToTerraform(struct?: DataHoneycombioAuthMetadataEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHoneycombioAuthMetadataEnvironmentToHclTerraform(struct?: DataHoneycombioAuthMetadataEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHoneycombioAuthMetadataEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHoneycombioAuthMetadataEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioAuthMetadataEnvironment | cdktf.IResolvable | undefined) {
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

  // classic - computed: true, optional: false, required: false
  public get classic() {
    return this.getBooleanAttribute('classic');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}
export interface DataHoneycombioAuthMetadataTeam {
}

export function dataHoneycombioAuthMetadataTeamToTerraform(struct?: DataHoneycombioAuthMetadataTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHoneycombioAuthMetadataTeamToHclTerraform(struct?: DataHoneycombioAuthMetadataTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHoneycombioAuthMetadataTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHoneycombioAuthMetadataTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioAuthMetadataTeam | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.43.0/docs/data-sources/auth_metadata honeycombio_auth_metadata}
*/
export class DataHoneycombioAuthMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_auth_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHoneycombioAuthMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHoneycombioAuthMetadata to import
  * @param importFromId The id of the existing DataHoneycombioAuthMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.43.0/docs/data-sources/auth_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHoneycombioAuthMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_auth_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.43.0/docs/data-sources/auth_metadata honeycombio_auth_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHoneycombioAuthMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataHoneycombioAuthMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_auth_metadata',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.43.0',
        providerVersionConstraint: '0.43.0'
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

  // api_key_access - computed: false, optional: false, required: false
  private _apiKeyAccess = new DataHoneycombioAuthMetadataApiKeyAccessOutputReference(this, "api_key_access");
  public get apiKeyAccess() {
    return this._apiKeyAccess;
  }

  // environment - computed: false, optional: false, required: false
  private _environment = new DataHoneycombioAuthMetadataEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }

  // team - computed: false, optional: false, required: false
  private _team = new DataHoneycombioAuthMetadataTeamOutputReference(this, "team");
  public get team() {
    return this._team;
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
